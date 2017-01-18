/**
 * Created by ZeroInfinity on 1/11/2017.
 */

import {Component, Input} from "@angular/core";

import {ProjectService} from "../../../shared/services/Containers/ProjectService/project.service";
import {BuildLevelService} from "../../../shared/services/Containers/BuildLevelService/buildLevel.service";
import {MilestoneService} from "../../../shared/services/Containers/MileStoneService/mileStone.service";
import {ProjectBuildLevelMileStoneMapService} from "../../../shared/services/Containers/ProjectService/projectBuildLevelMileStoneMap.service";

import {ToggleButtonModule} from 'primeng/primeng';
import {IBuildLevel} from "../../../shared/services/definitions/BuildLevel/IBuildLevel";
import {IMileStone} from "../../../shared/services/definitions/MileStone/IMileStone";
import {IProjectBuildLevelMileStoneView} from "../../../shared/services/definitions/ProjectBuildLevelMileStoneView/IProjectBuildLevelMileStoneView";
import {LoggerService} from "../../../shared/services/logger/logger.service";
import {ProjectBuildLevelMapService} from "../../../shared/services/Containers/ProjectService/projectBuildLevelMap.service";
import {IProjectBuildLevelMap} from "../../../shared/services/definitions/ProjectBuildLevelMapView/IProjectBuildLevelMap";
import {IMileStoneBuilLevelRow} from "../../../shared/services/definitions/ProjectBuildLevelMileStoneView/IMileStoneBuilLevelRow";
import {IMileStoneBuildLevelCol} from "../../../shared/services/definitions/ProjectBuildLevelMileStoneView/IMileStoneBuildLevelCol";
import {IProjectBuildLevelMilestoneMapViewModel} from "../../../shared/services/definitions/ProjectBuildLevelMileStoneView/IProjectBuildLevelMilestoneMapViewModel";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';
import { Message } from 'primeng/primeng';
import {isBoolean} from "util";

@Component({
    selector: 'project-schedule',
    styleUrls: ['app/body/Project/ProjectSchedule/projectSchedule.component.css'],
    templateUrl: 'app/body/Project/ProjectSchedule/projectSchedule.component.html'
})

export class ProjectScheduleComponent {
    @Input() projectId:string;
    msgs:Message[] = [];
    buildLevels: IBuildLevel[] = [];
    buildLevelsColHeaders:any[] = [];
    mileStones: IMileStone[] = [];
    projectBLMapList: IProjectBuildLevelMap[] = [];
    projectBLMSMapList: IMileStoneBuildLevelCol[] = [];
    dataToSaveProjectBLMSMapList: IProjectBuildLevelMileStoneView;
    mileStoneBuildLevel: any[] = [];
    isBuildLevelData: boolean = false;

    selectedNewBuildLevels: string[] = [];

    selectedToggleBuildLevel: string;
    private buildLevelsToAdd: IBuildLevel[] = [];


    constructor(private ls: LoggerService,
                private buildLevelService: BuildLevelService,
                private mileStoneService: MilestoneService,
                private projectBuildLevelMapService: ProjectBuildLevelMapService,
                private projectBuildLevelMileStoneMapService: ProjectBuildLevelMileStoneMapService) {
        this.ls.setShow(true);
    }

    ngOnInit() {
        let buildLevelCall = this.buildLevelService.getBuildLevels();
        let mileStoneCall = this.mileStoneService.getAll();
        let projectBLMapCall = this.projectBuildLevelMapService.getAllByProjectId(this.projectId);
        let projectBLMSMapCall = this.projectBuildLevelMileStoneMapService.getAllBuildLevelMileStoneByProjectUrl(this.projectId);

        Observable.forkJoin([buildLevelCall, mileStoneCall, projectBLMapCall, projectBLMSMapCall])
            .subscribe(results => {
                this.buildLevels = results[0].$values;
                this.mileStones = results[1].result;
                this.projectBLMapList = results[2].result;
                this.projectBLMSMapList = results[3].result;

                this.ls.logConsole("ForkJoin is done---", "");
                this.ls.logConsole("Build Levels data ----", this.buildLevels);
                this.ls.logConsole("Mile StonesList ----- ", this.mileStones);
                this.ls.logConsole("ProjectMapList -------", this.projectBLMapList);
                this.ls.logConsole("Project BLMSMaplist --", this.projectBLMSMapList);

                this.initialize();
            });

        // Getting All The Build Levels
        /*this.buildLevelService.getBuildLevels()
         .subscribe(res => {

         this.buildLevels = res.$values;
         this.ls.logConsole("BuildLevels -----", this.buildLevels);
         // Getting All MileStones

         this.mileStoneService.getAll()
         .subscribe(mileStoneResult => {
         this.ls.logConsole("All mileStones list", mileStoneResult);
         this.mileStones = mileStoneResult.result;
         // Getting Project Build Levels and their information
         this.projectBuildLevelMapService.getAllByProjectId(this.projectId)
         .subscribe(pblmResult => {
         if (pblmResult.isSuccess) {
         this.projectBLMapList = pblmResult.result;
         this.ls.logConsole("Project Build LevelMap List ------", this.projectBLMapList);

         // Getting project build level with miles stones
         this.projectMapService
         .getAllBuildLevelMileStoneByProjectUrl(this.projectId)
         .subscribe(allMapResult => {
         this.ls.logConsole("All Project BL MS Map ----", allMapResult);
         if (allMapResult.isSuccess) {
         if (allMapResult.result.length > 0) {
         this.projectBLMSMapList = allMapResult.result;
         }
         }
         this.initialize();
         });
         }
         })
         });
         });*/
    }

    initialize() {
        let pBLMSMapListHasData: boolean = (this.projectBLMSMapList.length > 0);
        let pBLMapListHasData: boolean = this.projectBLMapList.length > 0;

        this.ls.logConsole("pBLMSMapListHasData ---", pBLMSMapListHasData);
        this.ls.logConsole("pBLMapListHasData -----", pBLMapListHasData);

        this.isBuildLevelData = (pBLMSMapListHasData || pBLMapListHasData);
        // grid value initialization
        this.mileStoneBuildLevel = [];
        let mileStoneBuildLevelRow = [];
        let mileStoneCols = [];

        this.buildLevelsColHeaders[0] = {id:'',name:'Mile Stones', visible:true};
        if (pBLMapListHasData) {
            this.projectBLMapList.forEach(item => {
                let blMatchingProjectBLList = this.buildLevels.filter(filter => filter.id === item.buildLevelId)[0];
                this.buildLevelsColHeaders.push({id: blMatchingProjectBLList.id, name: blMatchingProjectBLList.name, visible: true});
                this.selectedNewBuildLevels.push(item.buildLevelId)

            });
        }

        //region Initialize all data with check points
        this.mileStones.map(ms => {
            let mileStoneCol: IMileStoneBuildLevelCol;

            this.buildLevels.map(bl => {

                let currentBuildLevelInfo: IProjectBuildLevelMap;
                //= this.projectBLMapList
                //  .filter(pBLMfilter => bl.id === pBLMfilter.buildLevelId)[0];
                //this.ls.logConsole("Current BuildLevelInfo ----", currentBuildLevelInfo);
                let isBuildLevelsEnabled: boolean = false;
                let isCurrentBuildLevelMapped: boolean = false;
                let isCurrentMileStoneMapped: boolean = false;

                if (pBLMSMapListHasData) {
                    this.projectBLMSMapList.filter(x => {
                        if (x.buildLevelId === bl.id) {
                            isBuildLevelsEnabled = true;
                            isCurrentBuildLevelMapped = true;
                            return x;
                        }
                        if (x.mileStoneId === ms.id) {
                            isCurrentMileStoneMapped = true;
                        }
                    });
                }
                if (pBLMapListHasData) {
                    currentBuildLevelInfo = this.projectBLMapList
                        .filter(pBLMfilter => bl.id === pBLMfilter.buildLevelId)[0];
                    if (currentBuildLevelInfo) {
                        if (bl.id === currentBuildLevelInfo.buildLevelId) {
                            isBuildLevelsEnabled = true;
                            isCurrentBuildLevelMapped = true;
                        }
                    }
                }
                let currentBuildId = (currentBuildLevelInfo) ? currentBuildLevelInfo.buildLevelId : bl.id;
                mileStoneCol = {
                    id: this.projectId,
                    buildLevelId: currentBuildId,
                    buildLevelMap: currentBuildLevelInfo,
                    mileStoneId: ms.id,
                    mileStone: ms,
                    plannedStartDate: '',
                    plannedEndDate: '',
                    isDeleted: false,
                    enabled: JSON.parse(JSON.stringify(isBuildLevelsEnabled)),
                    buildLevelMapped: JSON.parse(JSON.stringify(isCurrentBuildLevelMapped)),
                    mileStoneMapped: JSON.parse(JSON.stringify(isCurrentMileStoneMapped))
                };


                mileStoneCols.push(mileStoneCol);
                isBuildLevelsEnabled = false;
                isCurrentBuildLevelMapped = false;
                isCurrentMileStoneMapped = false;
            })// End Of Build Level Loop
            mileStoneBuildLevelRow.push(mileStoneCols);
            //this.mileStoneBuildLevel.push(mileStoneCols);
            mileStoneCols = [];
        })//End Of Milestones loop
        //endregion

        //region Check If PBLMSMap had data
        if (pBLMSMapListHasData) {

        }
        //endregion

        //region If PBLMSMap No Data then Check PBLMap Data if it has

        //endregion

        // Save it to the DataGrid
        this.mileStoneBuildLevel = mileStoneBuildLevelRow;
        this.ls.logConsole("MileStoneBuildLevelRow ----", mileStoneBuildLevelRow);
        this.dataToSaveProjectBLMSMapList = {id: this.projectId, mileStoneBuildLevel: mileStoneBuildLevelRow};
        this.ls.logConsole("Project Map List -----", this.projectBLMSMapList);

    }

    handleToggleEvent(event, id) {
        this.ls.logConsole("Toggle Selected ------------------", this.selectedToggleBuildLevel);
        this.ls.logConsole("Toggle Id Passed to the event ----", id);
        this.ls.logConsole("Toggle Event----------------------", event);

        this.enableBuildLevelById(id, event);
    }

    addToProject(event, item) {
        this.ls.logConsole("Event ------", event);
        this.ls.logConsole("Item itself ---", item);
        this.ls.logConsole("selectedNewBuildLevels", this.selectedNewBuildLevels);
        this.buildLevelsToAdd = this.buildLevels.filter(filter => {
            if (this.selectedNewBuildLevels.filter(nblFilter => filter.id === nblFilter)[0]) return filter;
        });

        //this.newAddedBuildListGeneration();
        if (this.buildLevelsToAdd.length > 0) {
            this.isBuildLevelData = true;
        }


        this.buildLevelsColHeaders = [];
        this.buildLevelsColHeaders[0] = {id: '', name: 'Mile Stones', visible: true};
        this.ls.logConsole("SelectedNewBuildLevels ----", this.selectedNewBuildLevels);

        this.selectedNewBuildLevels.forEach(newBuildLevels => {
            let blMatchingProjectBLList = this.buildLevels.filter(filter => filter.id === newBuildLevels)[0];
            this.ls.logConsole("BLMatchingProjectBLList -----", blMatchingProjectBLList);

            this.buildLevelsColHeaders.push({
                id: blMatchingProjectBLList.id,
                name: blMatchingProjectBLList.name,
                visible: true
            });
        });

        this.enableBuildLevelById(item.id, event);
        //this.ls.logConsole("New Build Level List", this.buildLevelsToAdd);
    }

    /*private newAddedBuildListGeneration() {
     this.ls.logConsole("Newly Added Build List Generation called", "");
     //this.mileStoneBuildLevel = [];
     let mileStoneBuildLevelRow = [];
     let mileStoneCols = [];

     if (this.buildLevelsToAdd.length > 0) {
     this.isBuildLevelData = true;

     this.buildLevelsToAdd.forEach(item => {
     /!* let currentBuildLevelInfo = this.projectBLMapList
     .filter(pBLMfilter => item.id === pBLMfilter.buildLevelId)[0];*!/
     let isBuildLevelsEnabled: boolean = false;

     this.enableBuildLevelById(item.id);

     //let testCurrentMileStoneBuildLevel = this.mileStoneBuildLevel.find(x=> x.mileStoneRow.find(y=> y.buildLevelId === item.id));
     });
     }
     }*/

    enableBuildLevelById(id, toggleEvent) {
        let mileStoneEnabled: boolean = toggleEvent;

        /*console.time('arrowFunc');
        this.mileStoneBuildLevel
            .filter(filterItemRow => {
                this.ls.logConsole("filterItemRow -------", filterItemRow);
                filterItemRow.filter(filterItemCol => {
                    if (filterItemCol.buildLevelId === id) {
                        filterItemCol.enabled = mileStoneEnabled;
                    }
                })
            });
        console.timeEnd("arrowFunc");*/

        console.time("forEach");
        this.mileStoneBuildLevel.forEach(row => {
            row.forEach(col =>{
                if (col.buildLevelId === id) {
                    col['enabled'] = mileStoneEnabled;
                }
            })
        })

        console.timeEnd('forEach');
    }

    shorOrHideBuildLevelHeader(id):boolean {
        return this.selectedNewBuildLevels.filter(filter => filter === id).length > 0;
    }

    saveGrid(event) {
        this.msgs = [];
        let mileStoneStatusId: string = '1036C8A9-81DD-4577-9878-6AD0D3816270';
        let formIsValid:boolean[] = [];
        let blmsMap: IProjectBuildLevelMilestoneMapViewModel[] = [];
        this.ls.logConsole("Form Values ----", this.mileStoneBuildLevel);

        this.mileStoneBuildLevel.map(row => {
            let projectBLMSView: IProjectBuildLevelMilestoneMapViewModel = {
                projectId: '',
                projectBuildLevelId: '',
                buildLevelName: '',
                mileStoneId: '',
                mileStoneName: '',
                plannedStartDate: '',
                plannedEndDate: ''
            };

            row.map(col => {

                if (col.plannedStartDate) {
                    if (col.isDatesValid) {
                        projectBLMSView.projectId = this.projectId;
                        projectBLMSView.projectBuildLevelId = col.buildLevelId;
                        //projectBLMSView.buildLevelName = row.buildLevelMap.name;
                        projectBLMSView.mileStoneId = col.mileStone.id;
                        projectBLMSView.mileStoneStatusId = mileStoneStatusId;
                        //projectBLMSView.mileStoneName = col.mileStone.name;
                        projectBLMSView.plannedStartDate = col.plannedStartDate;
                        projectBLMSView.plannedEndDate = col.plannedEndDate;
                        blmsMap.push(projectBLMSView);
                    }
                    else {
                        formIsValid.push(false);
                    }
                }
            });
        });

        if (formIsValid.length === 0 && blmsMap.length > 0) {
            this.projectBuildLevelMileStoneMapService.postAdd(blmsMap)
                .subscribe(res => {
                    this.ls.logConsole("Posting Build Level MileStone Map Service", res);
                });
        }

        if (formIsValid.length > 0) {
            this.msgs.push({severity: 'warn', summary: 'Form is not valid', detail: 'Form has some invalid dates entered. Please fix before submit!'})
        }

        if (blmsMap.length === 0 ){
            this.msgs.push({severity: 'info', summary: 'No Data', detail: 'Form has no data. Please enter some data before submit!'})
        }
        this.ls.logConsole("Data to push -----", blmsMap);
    }

    validateStartDate(event, item:IMileStoneBuildLevelCol):boolean {
        this.msgs = [];
        let errorColor = "2px solid #FF3366";
        let startDateChangedValue = event;
        item.startDateErrorColor = 'none';
        item.endDateErrorColor = 'none';
        item.validDateMessage = '';

        if (startDateChangedValue) {
            if (!item.plannedEndDate) {
                item.isDatesValid = false;
                item.endDateErrorColor =errorColor;
                item.validDateMessage = 'End date require if you have a Start Date';
                return item.isDatesValid;
            }
        }

        if (item.plannedEndDate) {
            if (!startDateChangedValue) {
                item.isDatesValid = false;
                item.startDateErrorColor = errorColor;
                item.validDateMessage = 'Start date require if you have a End Date';
                return item.isDatesValid;
            }
        }

        if (startDateChangedValue && item.plannedEndDate) {
            let sd = new Date(startDateChangedValue);
            let ed = new Date(item.plannedEndDate);

            if (sd > ed) {
                item.isDatesValid = false;
                item.startDateErrorColor = errorColor;
                item.validDateMessage = "Start date can't be in the feature than end date";
                return item.isDatesValid;
            }
        }
        item.startDateErrorColor = 'none';
        item.endDateErrorColor = 'none';
        item.startDateErrorColor = '';
        item.endDateErrorColor = '';
        item.isDatesValid = true;
        return true;

    }

    validateEndDate(event, item:IMileStoneBuildLevelCol):boolean {
        this.msgs = [];
        let errorColor = "2px solid #FF3366";
        let endDateChangedValue = event;
        item.startDateErrorColor = 'none';
        item.endDateErrorColor = 'none';
        item.validDateMessage = '';

        if (item.plannedStartDate) {
            if (!endDateChangedValue) {
                item.isDatesValid = false;
                item.endDateErrorColor =errorColor;
                item.validDateMessage = 'End date require if you have a Start Date';
                return item.isDatesValid;
            }
        }

        if (endDateChangedValue) {
            if (!item.plannedStartDate) {
                item.isDatesValid = false;
                item.startDateErrorColor = errorColor;
                item.validDateMessage = 'Start date require if you have a End Date';
                return item.isDatesValid;
            }
        }

        if (item.plannedStartDate && endDateChangedValue) {
            let sd = new Date(item.plannedStartDate);
            let ed = new Date(endDateChangedValue);

            if (sd > ed) {
                item.isDatesValid = false;
                item.startDateErrorColor = errorColor;
                item.validDateMessage = "Start date can't be in the feature than end date";
                return item.isDatesValid;
            }
        }
        item.startDateErrorColor = 'none';
        item.endDateErrorColor = 'none';
        item.startDateErrorColor = '';
        item.endDateErrorColor = '';
        item.isDatesValid = true;

        return true;

    }
}