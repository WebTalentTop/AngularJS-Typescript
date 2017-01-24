"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AddComponent = (function () {
    //@Input() isDisplayComponentInPopUp: boolean;
    //@Input() fromTorqueBookId: string;
    //@Output() onAddComplete: EventEmitter<any> = new EventEmitter<any>();
    //@Output() onCancelComplete: EventEmitter<any> = new EventEmitter<any>();
    function AddComponent(service, route, router) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.resourceMap = {};
        this.spreadNS = GC.Spread.Sheets;
        this.pictureIndex = 1;
        this.PICTURE_ROWCOUNT = 16;
        this.PICTURE_COLUMNCOUNT = 10;
        this.torqueSheetDetails = {};
        this.route.params.subscribe(function (params) {
            _this.torqueSheetDetails.torqueBookId = params['torqueBookId'];
            _this.getTorqueBooksTorqueSheetNames(_this.torqueSheetDetails.torqueBookId);
            _this.landingFrom = params['landingFrom'];
            _this.identifierId = params['identifierId'];
        });
    }
    AddComponent.prototype.ngAfterViewInit = function () {
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
    };
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.onInsertPictueClick = function () {
        $("#fileSelector").click();
    };
    AddComponent.prototype.onPictureSelect = function () {
        var file = $("#fileSelector")[0].files[0];
        //action = $(this).data("action");
        if (!file)
            return false;
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
    };
    AddComponent.prototype.getResource = function (key) {
        key = key.replace(/\./g, "_");
        return this.resourceMap[key];
    };
    AddComponent.prototype.getActualRange = function (range, maxRowCount, maxColCount) {
        var row = range.row < 0 ? 0 : range.row;
        var col = range.col < 0 ? 0 : range.col;
        var rowCount = range.rowCount < 0 ? maxRowCount : range.rowCount;
        var colCount = range.colCount < 0 ? maxColCount : range.colCount;
        return new this.spreadNS.Range(row, col, rowCount, colCount);
    };
    AddComponent.prototype.addPicture = function (pictureUrl) {
        var sheet = this.spreadInstance.getActiveSheet();
        var defaults = sheet.defaults, rowHeight = defaults.rowHeight, colWidth = defaults.colWidth;
        var sel = sheet.getSelections()[0];
        if (pictureUrl !== "" && sel) {
            sheet.suspendPaint();
            var cr = this.getActualRange(sel, sheet.getRowCount(), sheet.getColumnCount());
            var name = "Picture" + this.pictureIndex;
            this.pictureIndex++;
            // prepare and adjust the range for add picture
            var row = cr.row, col = cr.col, endRow = row + this.PICTURE_ROWCOUNT, endColumn = col + this.PICTURE_COLUMNCOUNT, rowCount = sheet.getRowCount(), columnCount = sheet.getColumnCount();
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
    };
    AddComponent.prototype.getTorqueBooksTorqueSheetNames = function (torqueBookId) {
        var _this = this;
        this.service.getTorqueBooksTorqueSheetNames(torqueBookId).subscribe(function (a) {
            if (a.isSuccess) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Name",
                    value: null
                });
                for (var _i = 0, _a = a.result; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.torqueSheetNames = resultMap;
            }
        });
    };
    AddComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        //var postData = {
        //    torqueBookId: this.torqueBookIdForAddingTorqueSheet,
        //    nameId: this.newTorqueSheetNameId
        //};
        //var tempId = this.torqueBookIdForAddingTorqueSheet;
        //var container = $(this.torqueBookElmForAddingTorqueSheet).closest("div.ui-treetable-row");
        this.torqueSheetDetails.contents = JSON.stringify(this.spreadInstance.toJSON());
        this.service.postTorqueSheet(this.torqueSheetDetails).subscribe(function (res) {
            if (_this.landingFrom == "Project") {
                $("#torqueSheetSpreadContainer").html("");
                _this.router.navigate(["/project/detailsmain/", _this.identifierId]);
            }
            //this.onAddTorqueSheetCancel();
        });
    };
    AddComponent.prototype.onCancel = function () {
        if (this.landingFrom == "Project") {
            $("#torqueSheetSpreadContainer").html("");
            this.router.navigate(["/project/detailsmain/", this.identifierId]);
        }
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-torquesheet',
            styleUrls: ['app/body/TorqueSheet/Add/add.component.css'],
            templateUrl: 'app/body/TorqueSheet/Add/add.component.html'
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
