import { Validators } from '@angular/forms';
import { Component, Input, Output, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TorquesheetService } from '../../../shared/services/torquesheet.service';
import { UserService } from '../../../shared/services/user.service';
import { ITorqueSheet } from '../../../shared/services/definitions/ITorqueSheet';
import { ConfirmationService } from 'primeng/primeng';

@Component({
    selector: 'details-torquesheet',
    templateUrl: 'app/body/TorqueSheet/Details/details.component.html',
    styles: ['.latestVersion { color:green; font-weight:bold; font-size: large; } .oldVersion {color:red; font-weight:bold; font-size: large;}']
})
export class DetailsComponent {
    torqueSheetDetails: ITorqueSheet;
    landingFrom: string;
    identifierId: string;
    public selectedApprovers: Array<any> = new Array();
    public filteredApprovers: Array<any> = new Array();
    public filteredSelectedApprovers: Array<any> = new Array();
    public displayApproverEmail: boolean;
    public subject: string;
    public torqueSheetNames: any;
    public spreadInstance: any;
    public isViewInitialized: boolean;
    public resourceMap: any = {};
    public spreadNS = GC.Spread.Sheets;
    pictureIndex: number = 1;
    PICTURE_ROWCOUNT: number = 16;
    PICTURE_COLUMNCOUNT: number = 10;
    public torqueSheetId: string;
    public getCurrentVersionOrLatestVersion: string;
    public get latestVersionStyle() {
        return (this.torqueSheetDetails != null && this.torqueSheetDetails.isUserViewingLatestVersion) ? "latestVersion" : "oldVersion";
    }
    public otherVersionId: any;
    public get latestVersionText() {
        if (this.torqueSheetDetails == null)
            return "";
        else if (this.torqueSheetDetails.isUserViewingLatestVersion)
            return "You are viewing latest version of Torque Sheet";
        else
            return "You are viewing old version of Torque Sheet and a latest version is available";
    }
    //@Input() isDisplayComponentInPopUp: boolean;
    //@Input() fromTorqueBookId: string;
    //@Output() onAddComplete: EventEmitter<any> = new EventEmitter<any>();
    //@Output() onCancelComplete: EventEmitter<any> = new EventEmitter<any>();
    constructor(private service: TorquesheetService, private route: ActivatedRoute, private router: Router, private confirmationService: ConfirmationService, private userService: UserService) {
        //this.torqueSheetDetails = <ITorqueSheet>{};
        this.route.params.subscribe(params => {
            //this.torqueSheetDetails.id = params['id'];
            this.getCurrentVersionOrLatestVersion = params['getCurrentVersionOrLatestVersion'];
            this.getTorqueSheetDetails(params['id']);
            //this.torqueSheetDetails.torqueBookId = params['torqueBookId'];
            //this.getTorqueBooksTorqueSheetNames(params['torqueBookId']);
            this.landingFrom = params['landingFrom'];
            this.identifierId = params['identifierId'];
        });
    }

    filterApprovers(event) {
        this.userService.filterUserByName(event.query).subscribe(filteredList => {
            if (filteredList.isSuccess)
                this.filteredApprovers = filteredList.result;
        });
    }

    getTorqueSheetDetails(id: string) {
        this.service.getTorqueSheet(id, this.getCurrentVersionOrLatestVersion).subscribe(a => {
            //if (a.isSuccess) {
            this.torqueSheetDetails = a;
            this.torqueSheetDetails.otherVersions = this.torqueSheetDetails.otherVersions.$values;
            
            this.getTorqueBooksTorqueSheetNames(a.torqueBookId);
                
                var obj = this;
                setTimeout(function () {
                   // $("#torqueSheetSpreadContainer").html("");
                    obj.spreadInstance = new GC.Spread.Sheets.Workbook($("#torqueSheetSpreadContainer").get(0));
                    obj.spreadInstance.isPaintSuspended(true);
                    obj.spreadInstance.fromJSON(JSON.parse(obj.torqueSheetDetails.contents));
                    obj.spreadInstance.isPaintSuspended(false);
                }, 200);
            //}
        });
    }

    onVersionChange() {
        if (this.otherVersionId != null) {
            this.getCurrentVersionOrLatestVersion = "CurrentVersion";
            $("#torqueSheetSpreadContainer").html("");
            //this.spreadInstance = new GC.Spread.Sheets.Workbook($("#torqueSheetSpreadContainer").get(0));
            this.spreadInstance.destroy()
            //this.spreadInstance.isPaintSuspended(true);
            //this.spreadInstance.reset();
            //this.spreadInstance.isPaintSuspended(false);
            this.getTorqueSheetDetails(this.otherVersionId);
        }
    }

    ngAfterViewInit() {
        //var obj = this;
        //if (!this.isViewInitialized) {
        //    setTimeout(function () {
        //        obj.isViewInitialized = true;
        //        $("#torqueSheetSpreadContainer").html("");
        //        obj.spreadInstance = new GC.Spread.Sheets.Workbook($("#torqueSheetSpreadContainer").get(0));
        //        //obj.spreadInstance.isPaintSuspended(true);
        //        //console.log(contents);
        //        //obj.spreadInstance.fromJSON(JSON.parse(contents));
        //        //obj.spreadInstance.isPaintSuspended(false);
        //    }, 200);
        //}
    }

    ngOnInit() {
        this.torqueSheetNames = new Array();
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
                //if (this.torqueSheetDetails != undefined) {
                //    this.torqueSheetNames.push({
                //        label: this.torqueSheetDetails.name,
                //        value: this.torqueSheetDetails.nameId
                //    });
                //}
                this.torqueSheetNames = resultMap;
                if (this.torqueSheetNames != undefined) {
                    this.torqueSheetNames.push({
                        label: this.torqueSheetDetails.name,
                        value: this.torqueSheetDetails.nameId
                    });
                }
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
        this.torqueSheetDetails.contents = JSON.stringify(this.spreadInstance.toJSON());
        this.service.putTorqueSheet("", this.torqueSheetDetails).subscribe(res => {
            if (this.landingFrom == "Project") {
                $("#torqueSheetSpreadContainer").html("");
                this.router.navigate(["/project/detailsmain/", this.identifierId]);

            }
            //this.onAddTorqueSheetCancel();
        });
    }

    onSubmitForApproval() {
        this.displayApproverEmail = true;
    }

    onApprove() {
        this.saveTorqueSheet("Approve");
    }

    onSendEmailCancel() {
        this.displayApproverEmail = false;
    }

    onSendEmail() {
        this.displayApproverEmail = false;
        this.saveTorqueSheet("Submit");
    }

    onReject() {
        this.saveTorqueSheet("Reject");
    }

    onCreateNewVersion() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to create new version?',
            accept: () => {
                this.torqueSheetDetails.contents = JSON.stringify(this.spreadInstance.toJSON());
                this.service.createNewTorqueSheetVersion(this.torqueSheetDetails).subscribe(res => {
                    if (res.isSuccess) {
                        this.torqueSheetDetails = res.result;
                        this.torqueSheetDetails.otherVersions = this.torqueSheetDetails.otherVersions.$values;
                    }
                });
            }
        });
    }

    saveTorqueSheet(status) {
        this.torqueSheetDetails.contents = JSON.stringify(this.spreadInstance.toJSON());
        this.service.putTorqueSheet(status, this.torqueSheetDetails).subscribe(res => {
            if (res.isSuccess) {
                this.torqueSheetDetails = res.result;
                this.torqueSheetDetails.otherVersions = this.torqueSheetDetails.otherVersions.$values;
            }
        });
    }

    onCancel() {
        if (this.landingFrom == "Project") {
            $("#torqueSheetSpreadContainer").html("");
            this.router.navigate(["/project/detailsmain/", this.identifierId]);

        }
    }
}