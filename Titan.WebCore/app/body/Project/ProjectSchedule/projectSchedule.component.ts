/**
 * Created by ZeroInfinity on 1/11/2017.
 */

import {Component} from "@angular/core";

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

@Component({
    selector: 'project-schedule',
    styleUrls: ['app/body/Project/ProjectSchedule/projectSchedule.component.css'],
    templateUrl: 'app/body/Project/ProjectSchedule/projectSchedule.component.html'
})

export class ProjectScheduleComponent {
    projectId: string = '53FE9592-1A9B-07D0-85D7-006A30BCD348';
    buildLevels: IBuildLevel[] = [];
    mileStones: IMileStone[] = [];
    projectBLMapList: IProjectBuildLevelMap[] = [];
    projectBLMSMapList: IMileStoneBuildLevelCol[] = [];
    dataToSaveProjectBLMSMapList: IProjectBuildLevelMileStoneView;
    mileStoneBuildLevel:any[] = [];

    isBuildLevelData: boolean = false;

    selectedNewBuildLevels: string[] = [];

    selectedToggleBuildLevel: string;
    private buildLevelsToAdd: IBuildLevel[] = [];


    constructor(private ls: LoggerService,
                private buildLevelService: BuildLevelService,
                private mileStoneService: MilestoneService,
                private projectBuildLevelMapService: ProjectBuildLevelMapService,
                private projectMapService: ProjectBuildLevelMileStoneMapService) {
        this.ls.setShow(true);
    }

    ngOnInit() {
        let buildLevelCall = this.buildLevelService.getBuildLevels();
        let mileStoneCall = this.mileStoneService.getAll();
        let projectBLMapCall = this.projectBuildLevelMapService.getAllByProjectId(this.projectId);
        let projectBLMSMapCall = this.projectMapService.getAllBuildLevelMileStoneByProjectUrl(this.projectId);

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
        let pBLMapListHasData: boolean = false; //this.projectBLMapList.length > 0;

        this.ls.logConsole("pBLMSMapListHasData ---", pBLMSMapListHasData);
        this.ls.logConsole("pBLMapListHasData -----", pBLMapListHasData);

        this.isBuildLevelData = (pBLMSMapListHasData || pBLMapListHasData);
        // grid value initialization
        this.mileStoneBuildLevel = [];
        let mileStoneBuildLevelRow = [];
        let mileStoneCols = [];

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
                        if (x.mileStone.id === ms.id) {
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

    saveGrid(event) {
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


            if (row.plannedStartDate) {
                projectBLMSView.projectId = this.projectId;
                projectBLMSView.projectBuildLevelId = row.buildLevelId;
                projectBLMSView.buildLevelName = row.buildLevelMap.name;
                projectBLMSView.mileStoneId = row.mileStone.id;
                projectBLMSView.mileStoneName = row.mileStone.name;
                projectBLMSView.plannedStartDate = row.plannedStartDate;
                projectBLMSView.plannedEndDate = row.plannedEndDate;
                blmsMap.push(projectBLMSView);
            }
        });
        this.ls.logConsole("Data to push -----", blmsMap);
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

        this.mileStoneBuildLevel
            .filter(filterItemRow => {
                this.ls.logConsole("filterItemRow -------", filterItemRow);
                filterItemRow.filter(filterItemCol => {
                    if (filterItemCol.buildLevelId === id) {
                        filterItemCol.enabled = mileStoneEnabled;
                        return filterItemCol;
                    }
                })
            });
    }
}