import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../project.service'
declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'torque-book',
    templateUrl: 'torque-book.component.html'
})
export class TorqueBookComponent implements OnInit {
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
    
    @ViewChild('torqueBookForm') torqueBookForm: any;
    @ViewChild('torqueSheetForm') torqueSheetForm: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService) {}


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
            
            this.service.postTorqueSheet(postData).subscribe(res => {
                var expandImg = $("span.ui-treetable-toggler.fa-caret-right", container);
                if(expandImg != null && expandImg.length > 0)
                    expandImg.trigger("click");
                else{
                    this.service.getTorqueSheets(this.torqueBookIdForAddingTorqueSheet).subscribe(a => {
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
                this.service.getTorqueSheets(event.node.data.id).subscribe(a => {
                    event.node.children = a.$values;
                });
            }            
        }
    }
}