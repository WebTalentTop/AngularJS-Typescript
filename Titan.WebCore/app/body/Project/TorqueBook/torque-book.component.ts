import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from './../../../shared/services/Containers/ProjectService/project.service'
import { TorquesheetService } from './../../../shared/services/torquesheet.service'

declare var $:any;
@Component({
    selector: 'torque-book',
    templateUrl: 'app/body/Project/TorqueBook/torque-book.component.html'
})
export class TorqueBookComponent {
    public displayAddTorqueBook:boolean;
    public displayAddTorqueSheet:boolean;
    public BuildLevels:any;
    public justBuildLevels:any;
    public buildLevelIdForAddingTorqueBook: string;
    public buildLevelElmForAddingTorqueBook: any;
    public torqueBookIdForAddingTorqueSheet: string;
    public torqueBookElmForAddingTorqueSheet: any;
    public newTorqueBookName:string;
    public newTorqueSheetNameId:string;
    public torqueSheetNames:any;
    public projectId:string;
    public displaySelectTemplate:boolean;
    public torquesheetTemplates:any;
    public selectedTemplate:any;
    public displayTorqueSheetTemplate:boolean;
    public modifyingTorqueSheet: any;
    public displayTorqueSheetTemplateSelection: boolean;
    public spreadInstance: any;
    @ViewChild('torqueBookForm') torqueBookForm: any;
    @ViewChild('torqueSheetForm') torqueSheetForm: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService,
        private torqueSheetService: TorquesheetService) {}


    ngOnInit() { 
        this.route.params.forEach((params: Params) => {
            this.projectId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            this.getBuildLevels();
        });
    }

    getBuildLevels() {
        this.service.getBuildLevels(this.projectId).subscribe(a => {
            if(a.isSuccess && a.result != undefined){
                this.BuildLevels = a.result.buildLevels;
                this.justBuildLevels = new Array();
                this.justBuildLevels.push({label:"Select Build Level", value:null});
                for(var bl of a.result.justBuildLevels)
                {
                    this.justBuildLevels.push({label:bl.name, value:bl.id});
                }                //this.JustBuildLevels = a.result.justBuildLevels;
            }
        });
    }

    canAdd(rowType){
        if(rowType == "BuildLevel" || rowType == "TorqueBook")
            return true;
        return false;
    }

    canSelectTemplate(data){
        if ((data.rowType == "BuildLevel" || data.rowType == "TorqueBook") || data.contents != null)
            return false;
        return true;
    }

    canEditTorqueSheet(data) {
        if ((data.rowType == "BuildLevel" || data.rowType == "TorqueBook"))
            return false;
        return true;
    }

    canEditTemplate(data) {
        if ((data.rowType == "BuildLevel" || data.rowType == "TorqueBook"))
            return false;

        if (data.contents == null)
            return false;
        return true;
    }

    getLabel(rowType){
        if(rowType == "BuildLevel")
            return "Add Torque Book";
        else if(rowType == "TorqueBook")
            return "Add Torque Sheet";
    }

    onAdd(rowType, id, event){
       /* if(rowType == "BuildLevel")
            this.onAddTorqueBook(id, event);
        else if(rowType == "TorqueBook")
            this.onAddTorqueSheet(id, event);*/
    }

    onAddTemplate(data, event, displayTorqueSheetTemplateSelection) {
        this.modifyingTorqueSheet = data;
        this.displayTorqueSheetTemplateSelection = displayTorqueSheetTemplateSelection;
        this.displaySelectTemplate = true;
        if (displayTorqueSheetTemplateSelection) {
            this.torqueSheetService.getAllTorqueSheetTemplates().subscribe(templates => {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Template",
                    value: null
                });
                for (let template of templates.$values) {
                    var temp = {
                        label: template.name,
                        value: template
                    }
                    resultMap.push(temp);
                }
                this.torquesheetTemplates = resultMap;
            });
        } else {
            this.torqueSheetService.getTorqueSheet(data.id, "LatestVersion").subscribe(res => {
                this.initializeTemplate(res.contents);
            });
        }
    }

    onEditTorqueSheet(data, event) {
        this.router.navigate(["/torquesheet/details/", data.id, data.torqueBookId, "Project", this.projectId, "LatestVersion"]);
    }

    onNewEditTorqueSheet(data, isLatestVersion:boolean) {
        this.router.navigate(["/torquesheet/details/", isLatestVersion ? data.lastApprovedTorqueSheetId : data.currentDraftVersionTorqueSheetId, data.torqueBookId, "Project", this.projectId, "CurrentVersion"]);
    }

    onAddTorqueSheetTemplateConfirmation() {
        var data = {
            id: this.modifyingTorqueSheet.id,
            contents: JSON.stringify(this.spreadInstance.toJSON())
        }
        this.torqueSheetService.putTorqueSheetTemplate(data).subscribe(res => {
            this.closeTemplateWindow();
        });
    }

    onAddTorqueSheetTemplateCancel() {
        this.closeTemplateWindow();
    }

    closeTemplateWindow() {
        $("#torqueSheetSpreadContainer").html("");
        this.displayTorqueSheetTemplate = false; 
        this.displaySelectTemplate = false;
        this.modifyingTorqueSheet = null;
        //this.spreadInstance = null;
    }

    onTemplateChange(event, value){
        this.initializeTemplate(this.selectedTemplate.contents);
    }

    initializeTemplate(contents) {
        $("#torqueSheetSpreadContainer").html("");
        this.displayTorqueSheetTemplate = true;
        var obj = this;
        setTimeout(function () {
            obj.spreadInstance = new GC.Spread.Sheets.Workbook($("#torqueSheetSpreadContainer").get(0));
            obj.spreadInstance.isPaintSuspended(true);
            obj.spreadInstance.fromJSON(JSON.parse(contents));
            obj.spreadInstance.isPaintSuspended(false);
        }, 200);
    }

    /*onAddTorqueBook(buildLevelId, event){
        this.buildLevelIdForAddingTorqueBook = buildLevelId;
        this.buildLevelElmForAddingTorqueBook = event.srcElement;
        this.displayAddTorqueBook = true;
    }*/

    onAddTorqueBook(){
        //this.buildLevelIdForAddingTorqueBook = buildLevelId;
        //this.buildLevelElmForAddingTorqueBook = event.srcElement;
        this.displayAddTorqueBook = true;
    }

    /*onAddTorqueSheet(torqueBookId, event){
        this.torqueBookIdForAddingTorqueSheet = torqueBookId;
        this.router.navigate(["/torquesheet/add/", this.torqueBookIdForAddingTorqueSheet, "Project", this.projectId]);

        //this.torqueBookElmForAddingTorqueSheet = event.srcElement;
        //this.getTorqueBooksTorqueSheetNames(torqueBookId);
        //this.displayAddTorqueSheet = true;
    }*/

    onAddTorqueSheet(){
        //this.torqueBookIdForAddingTorqueSheet = torqueBookId;
        this.router.navigate(["/torquesheet/add/", this.torqueBookIdForAddingTorqueSheet, "Project", this.projectId]);

        //this.torqueBookElmForAddingTorqueSheet = event.srcElement;
        //this.getTorqueBooksTorqueSheetNames(torqueBookId);
        //this.displayAddTorqueSheet = true;
    }

    getTorqueBooksTorqueSheetNames(torqueBookId){
        this.torqueSheetService.getTorqueBooksTorqueSheetNames(torqueBookId).subscribe(a => {
            if(a.isSuccess){
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Name",
                    value: null
                });
                for (let template of a.result) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.torqueSheetNames = resultMap;
            }
        });
    }

    onAddTorqueBookConfirmation(){
        //if(this.torqueBookForm.valid){
            var postData = {projectId: this.projectId, buildLevelId: this.buildLevelIdForAddingTorqueBook,
                name: this.newTorqueBookName}; 
            var tempId = this.buildLevelIdForAddingTorqueBook;
            this.service.postTorqueBook(postData).subscribe(res => {
                this.getBuildLevels();
                /*var container = $(this.buildLevelElmForAddingTorqueBook).closest("div.ui-treetable-row");
                var expandImg = $("span.ui-treetable-toggler.fa-caret-right", container);
                if(expandImg != null && expandImg.length > 0)
                    expandImg.trigger("click"); 
                else{
                    this.service.getTorqueBooks(this.projectId, this.buildLevelIdForAddingTorqueBook).subscribe(a => {
                        for(var buildLevel of this.BuildLevels){
                            if(buildLevel.data.id == tempId){
                                buildLevel.children = a.$values;
                            }
                        }
                    });
                }*/
                this.onAddTorqueBookCancel();
            });
        //}
    }

    onAddTorqueSheetConfirmation(){
        //if(this.torqueSheetForm.valid){
            var postData = {torqueBookId: this.torqueBookIdForAddingTorqueSheet,
                nameId: this.newTorqueSheetNameId};
            var tempId = this.torqueBookIdForAddingTorqueSheet;
            var container = $(this.torqueBookElmForAddingTorqueSheet).closest("div.ui-treetable-row");
            
            this.torqueSheetService.postTorqueSheet(postData, false).subscribe(res => {
                var expandImg = $("span.ui-treetable-toggler.fa-caret-right", container);
                if(expandImg != null && expandImg.length > 0)
                    expandImg.trigger("click");
                else{
                    this.torqueSheetService.getTorqueSheets(this.torqueBookIdForAddingTorqueSheet).subscribe(a => {
                        for(var buildLevel of this.BuildLevels){
                            if(buildLevel.children != null){
                                for(var torqueBook of buildLevel.children){
                                    if(torqueBook.data.id == tempId){
                                        torqueBook.children = a.$values;
                                    }
                                }
                            }
                        }
                    });
                }
                this.onAddTorqueSheetCancel();
            });
        //}
    }

    onAddTorqueBookCancel(){
        this.buildLevelIdForAddingTorqueBook = "";        
        this.displayAddTorqueBook = false;
        this.buildLevelElmForAddingTorqueBook = null;        
    }

    onAddTorqueSheetCancel(){
        this.torqueBookIdForAddingTorqueSheet = "";        
        this.displayAddTorqueSheet = false;
        this.torqueBookElmForAddingTorqueSheet = null;        
    }

    nodeExpand(event){
        if(event.node){
            if(event.node.data.rowType == "BuildLevel"){
                this.service.getTorqueBooks(this.projectId, event.node.data.id).subscribe(a => {
                    event.node.children = a.$values;
                });
            }
            else if(event.node.data.rowType == "TorqueBook"){
                this.torqueSheetService.getTorqueSheets(event.node.data.id).subscribe(a => {
                    event.node.children = a.$values;
                });
            }            
        }
    }
}