"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DetailsComponent = (function () {
    //@Input() isDisplayComponentInPopUp: boolean;
    //@Input() fromTorqueBookId: string;
    //@Output() onAddComplete: EventEmitter<any> = new EventEmitter<any>();
    //@Output() onCancelComplete: EventEmitter<any> = new EventEmitter<any>();
    function DetailsComponent(service, route, router, confirmationService) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.confirmationService = confirmationService;
        this.resourceMap = {};
        this.spreadNS = GC.Spread.Sheets;
        this.pictureIndex = 1;
        this.PICTURE_ROWCOUNT = 16;
        this.PICTURE_COLUMNCOUNT = 10;
        //this.torqueSheetDetails = <ITorqueSheet>{};
        this.route.params.subscribe(function (params) {
            //this.torqueSheetDetails.id = params['id'];
            _this.getCurrentVersionOrLatestVersion = params['getCurrentVersionOrLatestVersion'];
            _this.getTorqueSheetDetails(params['id']);
            //this.torqueSheetDetails.torqueBookId = params['torqueBookId'];
            //this.getTorqueBooksTorqueSheetNames(params['torqueBookId']);
            _this.landingFrom = params['landingFrom'];
            _this.identifierId = params['identifierId'];
        });
    }
    Object.defineProperty(DetailsComponent.prototype, "latestVersionStyle", {
        get: function () {
            return (this.torqueSheetDetails != null && this.torqueSheetDetails.isUserViewingLatestVersion) ? "latestVersion" : "oldVersion";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsComponent.prototype, "latestVersionText", {
        get: function () {
            if (this.torqueSheetDetails == null)
                return "";
            else if (this.torqueSheetDetails.isUserViewingLatestVersion)
                return "You are viewing latest version of Torque Sheet";
            else
                return "You are viewing old version of Torque Sheet and a latest version is available";
        },
        enumerable: true,
        configurable: true
    });
    DetailsComponent.prototype.getTorqueSheetDetails = function (id) {
        var _this = this;
        this.service.getTorqueSheet(id, this.getCurrentVersionOrLatestVersion).subscribe(function (a) {
            //if (a.isSuccess) {
            _this.torqueSheetDetails = a;
            _this.torqueSheetDetails.otherVersions = _this.torqueSheetDetails.otherVersions.$values;
            _this.getTorqueBooksTorqueSheetNames(a.torqueBookId);
            var obj = _this;
            setTimeout(function () {
                // $("#torqueSheetSpreadContainer").html("");
                obj.spreadInstance = new GC.Spread.Sheets.Workbook($("#torqueSheetSpreadContainer").get(0));
                obj.spreadInstance.isPaintSuspended(true);
                obj.spreadInstance.fromJSON(JSON.parse(obj.torqueSheetDetails.contents));
                obj.spreadInstance.isPaintSuspended(false);
            }, 200);
            //}
        });
    };
    DetailsComponent.prototype.onVersionChange = function () {
        if (this.otherVersionId != null) {
            this.getCurrentVersionOrLatestVersion = "CurrentVersion";
            $("#torqueSheetSpreadContainer").html("");
            //this.spreadInstance = new GC.Spread.Sheets.Workbook($("#torqueSheetSpreadContainer").get(0));
            this.spreadInstance.destroy();
            //this.spreadInstance.isPaintSuspended(true);
            //this.spreadInstance.reset();
            //this.spreadInstance.isPaintSuspended(false);
            this.getTorqueSheetDetails(this.otherVersionId);
        }
    };
    DetailsComponent.prototype.ngAfterViewInit = function () {
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
    };
    DetailsComponent.prototype.ngOnInit = function () {
        this.torqueSheetNames = new Array();
    };
    DetailsComponent.prototype.onInsertPictueClick = function () {
        $("#fileSelector").click();
    };
    DetailsComponent.prototype.onPictureSelect = function () {
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
    DetailsComponent.prototype.getResource = function (key) {
        key = key.replace(/\./g, "_");
        return this.resourceMap[key];
    };
    DetailsComponent.prototype.getActualRange = function (range, maxRowCount, maxColCount) {
        var row = range.row < 0 ? 0 : range.row;
        var col = range.col < 0 ? 0 : range.col;
        var rowCount = range.rowCount < 0 ? maxRowCount : range.rowCount;
        var colCount = range.colCount < 0 ? maxColCount : range.colCount;
        return new this.spreadNS.Range(row, col, rowCount, colCount);
    };
    DetailsComponent.prototype.addPicture = function (pictureUrl) {
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
    DetailsComponent.prototype.getTorqueBooksTorqueSheetNames = function (torqueBookId) {
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
                //if (this.torqueSheetDetails != undefined) {
                //    this.torqueSheetNames.push({
                //        label: this.torqueSheetDetails.name,
                //        value: this.torqueSheetDetails.nameId
                //    });
                //}
                _this.torqueSheetNames = resultMap;
                if (_this.torqueSheetNames != undefined) {
                    _this.torqueSheetNames.push({
                        label: _this.torqueSheetDetails.name,
                        value: _this.torqueSheetDetails.nameId
                    });
                }
            }
        });
    };
    DetailsComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        //var postData = {
        //    torqueBookId: this.torqueBookIdForAddingTorqueSheet,
        //    nameId: this.newTorqueSheetNameId
        //};
        //var tempId = this.torqueBookIdForAddingTorqueSheet;
        //var container = $(this.torqueBookElmForAddingTorqueSheet).closest("div.ui-treetable-row");
        this.torqueSheetDetails.contents = JSON.stringify(this.spreadInstance.toJSON());
        this.service.putTorqueSheet("", this.torqueSheetDetails).subscribe(function (res) {
            if (_this.landingFrom == "Project") {
                $("#torqueSheetSpreadContainer").html("");
                _this.router.navigate(["/project/detailsmain/", _this.identifierId]);
            }
            //this.onAddTorqueSheetCancel();
        });
    };
    DetailsComponent.prototype.onSubmitForApproval = function () {
        this.saveTorqueSheet("Submit");
    };
    DetailsComponent.prototype.onApprove = function () {
        this.saveTorqueSheet("Approve");
    };
    DetailsComponent.prototype.onReject = function () {
        this.saveTorqueSheet("Reject");
    };
    DetailsComponent.prototype.onCreateNewVersion = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to create new version?',
            accept: function () {
                _this.torqueSheetDetails.contents = JSON.stringify(_this.spreadInstance.toJSON());
                _this.service.createNewTorqueSheetVersion(_this.torqueSheetDetails).subscribe(function (res) {
                    if (res.isSuccess) {
                        _this.torqueSheetDetails = res.result;
                        _this.torqueSheetDetails.otherVersions = _this.torqueSheetDetails.otherVersions.$values;
                    }
                });
            }
        });
    };
    DetailsComponent.prototype.saveTorqueSheet = function (status) {
        var _this = this;
        this.torqueSheetDetails.contents = JSON.stringify(this.spreadInstance.toJSON());
        this.service.putTorqueSheet(status, this.torqueSheetDetails).subscribe(function (res) {
            if (res.isSuccess) {
                _this.torqueSheetDetails = res.result;
                _this.torqueSheetDetails.otherVersions = _this.torqueSheetDetails.otherVersions.$values;
            }
        });
    };
    DetailsComponent.prototype.onCancel = function () {
        if (this.landingFrom == "Project") {
            $("#torqueSheetSpreadContainer").html("");
            this.router.navigate(["/project/detailsmain/", this.identifierId]);
        }
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'details-torquesheet',
            templateUrl: 'app/body/TorqueSheet/Details/details.component.html',
            styles: ['.latestVersion { color:green; font-weight:bold; font-size: large; } .oldVersion {color:red; font-weight:bold; font-size: large;}']
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
