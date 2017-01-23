import { Component, Input,  Output, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
//import { DataTableModule,TabViewModule, ButtonModule, InputTextareaModule,InputTextModule, PanelModule, 
//    DropdownModule, SelectItem } from 'primeng/primeng';
import { Router, ActivatedRoute } from '@angular/router';

import { TorquesheetService } from '../../../shared/services/torquesheet.service';
import { ITorqueSheet } from '../../../shared/services/definitions/ITorqueSheet';
import { ProjectService } from './../../../shared/services/Containers/ProjectService/project.service'

    @Component({
        selector: 'add-torquesheet',
        styleUrls: ['app/body/TorqueSheet/Add/add.component.css'],
        templateUrl: 'app/body/TorqueSheet/Add/add.component.html'
    })
    export class AddComponent implements AfterViewInit, OnInit {
        torqueSheetDetails: ITorqueSheet;
        landingFrom: string;
        identifierId: string;
        public torqueSheetNames:any;
        public spreadInstance: any;
        public isViewInitialized: boolean;
        public resourceMap: any = {};
        public spreadNS = GC.Spread.Sheets;
        pictureIndex: number = 1;
        PICTURE_ROWCOUNT: number = 16;
        PICTURE_COLUMNCOUNT: number = 10;
        buildLevels:any;
        justBuildLevels:any;
        allTorqueBooks:any;
        torqueBooks:any;
        buildLevelIdForAddingTorqueBook:string;
        //@Input() isDisplayComponentInPopUp: boolean;
        //@Input() fromTorqueBookId: string;
        //@Output() onAddComplete: EventEmitter<any> = new EventEmitter<any>();
        //@Output() onCancelComplete: EventEmitter<any> = new EventEmitter<any>();
        constructor(private service: TorquesheetService, private route: ActivatedRoute, private router: Router, private projectService: ProjectService) {
            this.torqueSheetDetails = <ITorqueSheet>{};
            this.route.params.subscribe(params => {
                this.torqueSheetDetails.torqueBookId = params['torqueBookId'];
                if(this.torqueSheetDetails.torqueBookId != undefined)
                    this.getTorqueBooksTorqueSheetNames(this.torqueSheetDetails.torqueBookId);
                this.landingFrom = params['landingFrom'];
                this.identifierId = params['identifierId'];
                if (this.landingFrom == "Project") {
                    this.getBuildLevels();
                }
            });
        }

        getBuildLevels() {
            this.projectService.getBuildLevels(this.identifierId).subscribe(a => {
                if(a.isSuccess && a.result != undefined){
                    this.buildLevels = a.result.buildLevels;
                    this.allTorqueBooks = a.result.torqueBooks;
                    this.justBuildLevels = new Array();
                    this.justBuildLevels.push({label:"Select Build Level", value:null});
                    for(var bl of a.result.justBuildLevels)
                    {
                        this.justBuildLevels.push({label:bl.name, value:bl.id});
                    }
                }
            });
        }

        onBuildLevelChange(){
            this.torqueBooks = new Array();
            if(this.buildLevelIdForAddingTorqueBook != null){
                this.torqueBooks.push({label:"Select Torque Book", value:null});
                for(var bl of this.allTorqueBooks)
                {
                    if(bl.id == this.buildLevelIdForAddingTorqueBook)
                        this.torqueBooks.push({label:bl.torqueBookName , value:bl.torqueBookId});
                }
            }
        }

        onTorqueBookChange(){
            if(this.torqueSheetDetails.torqueBookId != undefined)
                this.getTorqueBooksTorqueSheetNames(this.torqueSheetDetails.torqueBookId);
            else
                this.torqueSheetNames = new Array();
        }

        ngAfterViewInit() {
            var obj = this;
            if (!this.isViewInitialized) {
                setTimeout(function () {
                    obj.isViewInitialized = true;
                    $("#torqueSheetSpreadContainer").html("");
                    obj.spreadInstance = new GC.Spread.Sheets.Workbook($("#torqueSheetSpreadContainer").get(0));
                    //obj.spreadInstance.isPaintSuspended(true);
                    //console.log(contents);
                    //obj.spreadInstance.fromJSON(JSON.parse(contents));
                    //obj.spreadInstance.isPaintSuspended(false);
                }, 200);
            }
        }

        ngOnInit() {

        }

        onInsertPictueClick() {
            $("#fileSelector").click();
        }

        onPictureSelect() {
             var file = ($("#fileSelector")[0] as any).files[0];
                //action = $(this).data("action");

            if (!file) return false;

            // clear to make sure change event occures even when same file selected again
            $("#fileSelector").val("");

            //if (action === "doImport") {
            //    return importFile(file);
            //}

            if (!/image\/\w+/.test(file.type)) {
                alert(this.getResource("messages.imageFileRequired"));
                return false;
            }
            var reader = new FileReader();
            var obj = this;
            reader.onload = function () {
                //switch (action) {
                //    case "addpicture":
                obj.addPicture(this.result);
                //        break;
                //}
            };
            reader.readAsDataURL(file);
        }

        getResource(key) {
            key = key.replace(/\./g, "_");

            return this.resourceMap[key];
        }

        getActualRange(range, maxRowCount, maxColCount) {
            var row = range.row < 0 ? 0 : range.row;
            var col = range.col < 0 ? 0 : range.col;
            var rowCount = range.rowCount < 0 ? maxRowCount : range.rowCount;
            var colCount = range.colCount < 0 ? maxColCount : range.colCount;

            return new this.spreadNS.Range(row, col, rowCount, colCount);
        }

        addPicture(pictureUrl) {
            var sheet = this.spreadInstance.getActiveSheet();
            var defaults = sheet.defaults, rowHeight = defaults.rowHeight, colWidth = defaults.colWidth;
            var sel = sheet.getSelections()[0];
            if (pictureUrl !== "" && sel) {
                sheet.suspendPaint();

                var cr = this.getActualRange(sel, sheet.getRowCount(), sheet.getColumnCount());
                var name = "Picture" + this.pictureIndex;
                this.pictureIndex++;

                // prepare and adjust the range for add picture
                var row = cr.row, col = cr.col,
                    endRow = row + this.PICTURE_ROWCOUNT,
                    endColumn = col + this.PICTURE_COLUMNCOUNT,
                    rowCount = sheet.getRowCount(),
                    columnCount = sheet.getColumnCount();

                if (endRow > rowCount) {
                    endRow = rowCount - 1;
                    row = endRow - this.PICTURE_ROWCOUNT;
                }

                if (endColumn > columnCount) {
                    endColumn = columnCount - 1;
                    col = endColumn - this.PICTURE_COLUMNCOUNT;
                }

                var picture = sheet.pictures.add(name, pictureUrl, col * colWidth, row * rowHeight, (endColumn - col) * colWidth, (endRow - row) * rowHeight)
                    .backColor("#FFFFFF").borderColor("#000000")
                    .borderStyle("solid").borderWidth(1).borderRadius(3);
                sheet.resumePaint();

                this.spreadInstance.focus();
                picture.isSelected(true);
            }
        }

        getTorqueBooksTorqueSheetNames(torqueBookId) {
            this.service.getTorqueBooksTorqueSheetNames(torqueBookId).subscribe(a => {
                if (a.isSuccess) {
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

        onSubmit(formRef) {
            //var postData = {
            //    torqueBookId: this.torqueBookIdForAddingTorqueSheet,
            //    nameId: this.newTorqueSheetNameId
            //};
            //var tempId = this.torqueBookIdForAddingTorqueSheet;
            //var container = $(this.torqueBookElmForAddingTorqueSheet).closest("div.ui-treetable-row");
            this.onAdd(false);
        }

        onAdd(submitForApproval:boolean){
            this.torqueSheetDetails.contents = JSON.stringify(this.spreadInstance.toJSON());
            this.service.postTorqueSheet(this.torqueSheetDetails, submitForApproval).subscribe(res => {
                if (this.landingFrom == "Project") {
                    $("#torqueSheetSpreadContainer").html("");
                    this.router.navigate(["/project/detailsmain/", this.identifierId]);
                }
                //this.onAddTorqueSheetCancel();
            });
        }

        onAddAndSubmit(){
            this.onAdd(true);
        }
        onCancel() {
            if (this.landingFrom == "Project") {
                $("#torqueSheetSpreadContainer").html("");
                this.router.navigate(["/project/detailsmain/", this.identifierId]);

            }else{
                this.router.navigate(["/torquesheet"]);
            }
        }
    }
