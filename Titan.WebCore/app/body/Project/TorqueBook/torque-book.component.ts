import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from './../../../shared/services/project.services'
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
    public buildLevelIdForAddingTorqueBook: string;
    public buildLevelElmForAddingTorqueBook: any;
    public torqueBookIdForAddingTorqueSheet: string;
    public torqueBookElmForAddingTorqueSheet: any;
    public newTorqueBookName:string;
    public newTorqueSheetName:string;
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
            this.projectId = params['projectId']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

             this.service.getBuildLevels(this.projectId).subscribe(a => {
                 this.BuildLevels = a.$values;
            });
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
        if(rowType == "BuildLevel")
            this.onAddTorqueBook(id, event);
        else if(rowType == "TorqueBook")
            this.onAddTorqueSheet(id, event);
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
            this.torqueSheetService.getTorqueSheet(data.id).subscribe(res => {
                this.initializeTemplate(res.contents);
            });
        }
    }

    onAddTorqueSheetTemplateConfirmation() {
        var data = {
            id: this.modifyingTorqueSheet.id,
            contents: JSON.stringify(this.spreadInstance.toJSON())
        }
        this.torqueSheetService.putTorqueSheetTemplate(data).subscribe(res => {
            this.closeTemplateWindow();
            console.log('Success')
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
        //console.log(this.selectedTemplate);
        this.initializeTemplate(this.selectedTemplate.contents);
    }

    initializeTemplate(contents) {
        $("#torqueSheetSpreadContainer").html("");
        this.displayTorqueSheetTemplate = true;
        var obj = this;
        setTimeout(function () {
            obj.spreadInstance = new GcSpread.Sheets.Spread($("#torqueSheetSpreadContainer").get(0));
            obj.spreadInstance.isPaintSuspended(true);
            console.log(contents);
            obj.spreadInstance.fromJSON(JSON.parse(contents));
            obj.spreadInstance.isPaintSuspended(false);
        }, 200);
    }

    onAddTorqueBook(buildLevelId, event){
        this.buildLevelIdForAddingTorqueBook = buildLevelId;
        this.buildLevelElmForAddingTorqueBook = event.srcElement;
        this.displayAddTorqueBook = true;
    }

    onAddTorqueSheet(torqueBookId, event){
        this.torqueBookIdForAddingTorqueSheet = torqueBookId;
        this.torqueBookElmForAddingTorqueSheet = event.srcElement;
        this.displayAddTorqueSheet = true;
    }

    onAddTorqueBookConfirmation(){
        //if(this.torqueBookForm.valid){
            var postData = {projectId: this.projectId, buildLevelId: this.buildLevelIdForAddingTorqueBook,
                name: this.newTorqueBookName};
            var tempId = this.buildLevelIdForAddingTorqueBook;
            this.service.postTorqueBook(postData).subscribe(res => {
                var container = $(this.buildLevelElmForAddingTorqueBook).closest("div.ui-treetable-row");
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
                }
                this.onAddTorqueBookCancel();
            });
        //}
    }

    onAddTorqueSheetConfirmation(){
        //if(this.torqueSheetForm.valid){
            var postData = {torqueBookId: this.torqueBookIdForAddingTorqueSheet,
                name: this.newTorqueSheetName};
            var tempId = this.torqueBookIdForAddingTorqueSheet;
            var container = $(this.torqueBookElmForAddingTorqueSheet).closest("div.ui-treetable-row");
            
            this.torqueSheetService.postTorqueSheet(postData).subscribe(res => {
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