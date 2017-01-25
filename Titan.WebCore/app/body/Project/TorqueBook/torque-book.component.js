"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TorqueBookComponent = (function () {
    function TorqueBookComponent(route, router, service, torqueSheetService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.torqueSheetService = torqueSheetService;
    }
    TorqueBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.projectId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];
            _this.service.getBuildLevels(_this.projectId).subscribe(function (a) {
                _this.BuildLevels = a.$values;
            });
        });
    };
    TorqueBookComponent.prototype.canAdd = function (rowType) {
        if (rowType == "BuildLevel" || rowType == "TorqueBook")
            return true;
        return false;
    };
    TorqueBookComponent.prototype.canSelectTemplate = function (data) {
        if ((data.rowType == "BuildLevel" || data.rowType == "TorqueBook") || data.contents != null)
            return false;
        return true;
    };
    TorqueBookComponent.prototype.canEditTorqueSheet = function (data) {
        if ((data.rowType == "BuildLevel" || data.rowType == "TorqueBook"))
            return false;
        return true;
    };
    TorqueBookComponent.prototype.canEditTemplate = function (data) {
        if ((data.rowType == "BuildLevel" || data.rowType == "TorqueBook"))
            return false;
        if (data.contents == null)
            return false;
        return true;
    };
    TorqueBookComponent.prototype.getLabel = function (rowType) {
        if (rowType == "BuildLevel")
            return "Add Torque Book";
        else if (rowType == "TorqueBook")
            return "Add Torque Sheet";
    };
    TorqueBookComponent.prototype.onAdd = function (rowType, id, event) {
        if (rowType == "BuildLevel")
            this.onAddTorqueBook(id, event);
        else if (rowType == "TorqueBook")
            this.onAddTorqueSheet(id, event);
    };
    TorqueBookComponent.prototype.onAddTemplate = function (data, event, displayTorqueSheetTemplateSelection) {
        var _this = this;
        this.modifyingTorqueSheet = data;
        this.displayTorqueSheetTemplateSelection = displayTorqueSheetTemplateSelection;
        this.displaySelectTemplate = true;
        if (displayTorqueSheetTemplateSelection) {
            this.torqueSheetService.getAllTorqueSheetTemplates().subscribe(function (templates) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Template",
                    value: null
                });
                for (var _i = 0, _a = templates.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template
                    };
                    resultMap.push(temp);
                }
                _this.torquesheetTemplates = resultMap;
            });
        }
        else {
            this.torqueSheetService.getTorqueSheet(data.id, "LatestVersion").subscribe(function (res) {
                _this.initializeTemplate(res.contents);
            });
        }
    };
    TorqueBookComponent.prototype.onEditTorqueSheet = function (data, event) {
        this.router.navigate(["/torquesheet/details/", data.id, data.torqueBookId, "Project", this.projectId, "LatestVersion"]);
    };
    TorqueBookComponent.prototype.onAddTorqueSheetTemplateConfirmation = function () {
        var _this = this;
        var data = {
            id: this.modifyingTorqueSheet.id,
            contents: JSON.stringify(this.spreadInstance.toJSON())
        };
        this.torqueSheetService.putTorqueSheetTemplate(data).subscribe(function (res) {
            _this.closeTemplateWindow();
        });
    };
    TorqueBookComponent.prototype.onAddTorqueSheetTemplateCancel = function () {
        this.closeTemplateWindow();
    };
    TorqueBookComponent.prototype.closeTemplateWindow = function () {
        $("#torqueSheetSpreadContainer").html("");
        this.displayTorqueSheetTemplate = false;
        this.displaySelectTemplate = false;
        this.modifyingTorqueSheet = null;
        //this.spreadInstance = null;
    };
    TorqueBookComponent.prototype.onTemplateChange = function (event, value) {
        this.initializeTemplate(this.selectedTemplate.contents);
    };
    TorqueBookComponent.prototype.initializeTemplate = function (contents) {
        $("#torqueSheetSpreadContainer").html("");
        this.displayTorqueSheetTemplate = true;
        var obj = this;
        setTimeout(function () {
            obj.spreadInstance = new GC.Spread.Sheets.Workbook($("#torqueSheetSpreadContainer").get(0));
            obj.spreadInstance.isPaintSuspended(true);
            obj.spreadInstance.fromJSON(JSON.parse(contents));
            obj.spreadInstance.isPaintSuspended(false);
        }, 200);
    };
    TorqueBookComponent.prototype.onAddTorqueBook = function (buildLevelId, event) {
        this.buildLevelIdForAddingTorqueBook = buildLevelId;
        this.buildLevelElmForAddingTorqueBook = event.srcElement;
        this.displayAddTorqueBook = true;
    };
    TorqueBookComponent.prototype.onAddTorqueSheet = function (torqueBookId, event) {
        this.torqueBookIdForAddingTorqueSheet = torqueBookId;
        this.router.navigate(["/torquesheet/add/", this.torqueBookIdForAddingTorqueSheet, "Project", this.projectId]);
        //this.torqueBookElmForAddingTorqueSheet = event.srcElement;
        //this.getTorqueBooksTorqueSheetNames(torqueBookId);
        //this.displayAddTorqueSheet = true;
    };
    TorqueBookComponent.prototype.getTorqueBooksTorqueSheetNames = function (torqueBookId) {
        var _this = this;
        this.torqueSheetService.getTorqueBooksTorqueSheetNames(torqueBookId).subscribe(function (a) {
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
    TorqueBookComponent.prototype.onAddTorqueBookConfirmation = function () {
        var _this = this;
        //if(this.torqueBookForm.valid){
        var postData = { projectId: this.projectId, buildLevelId: this.buildLevelIdForAddingTorqueBook,
            name: this.newTorqueBookName };
        var tempId = this.buildLevelIdForAddingTorqueBook;
        this.service.postTorqueBook(postData).subscribe(function (res) {
            var container = $(_this.buildLevelElmForAddingTorqueBook).closest("div.ui-treetable-row");
            var expandImg = $("span.ui-treetable-toggler.fa-caret-right", container);
            if (expandImg != null && expandImg.length > 0)
                expandImg.trigger("click");
            else {
                _this.service.getTorqueBooks(_this.projectId, _this.buildLevelIdForAddingTorqueBook).subscribe(function (a) {
                    for (var _i = 0, _a = _this.BuildLevels; _i < _a.length; _i++) {
                        var buildLevel = _a[_i];
                        if (buildLevel.data.id == tempId) {
                            buildLevel.children = a.$values;
                        }
                    }
                });
            }
            _this.onAddTorqueBookCancel();
        });
        //}
    };
    TorqueBookComponent.prototype.onAddTorqueSheetConfirmation = function () {
        var _this = this;
        //if(this.torqueSheetForm.valid){
        var postData = { torqueBookId: this.torqueBookIdForAddingTorqueSheet,
            nameId: this.newTorqueSheetNameId };
        var tempId = this.torqueBookIdForAddingTorqueSheet;
        var container = $(this.torqueBookElmForAddingTorqueSheet).closest("div.ui-treetable-row");
        this.torqueSheetService.postTorqueSheet(postData).subscribe(function (res) {
            var expandImg = $("span.ui-treetable-toggler.fa-caret-right", container);
            if (expandImg != null && expandImg.length > 0)
                expandImg.trigger("click");
            else {
                _this.torqueSheetService.getTorqueSheets(_this.torqueBookIdForAddingTorqueSheet).subscribe(function (a) {
                    for (var _i = 0, _a = _this.BuildLevels; _i < _a.length; _i++) {
                        var buildLevel = _a[_i];
                        if (buildLevel.children != null) {
                            for (var _b = 0, _c = buildLevel.children; _b < _c.length; _b++) {
                                var torqueBook = _c[_b];
                                if (torqueBook.data.id == tempId) {
                                    torqueBook.children = a.$values;
                                }
                            }
                        }
                    }
                });
            }
            _this.onAddTorqueSheetCancel();
        });
        //}
    };
    TorqueBookComponent.prototype.onAddTorqueBookCancel = function () {
        this.buildLevelIdForAddingTorqueBook = "";
        this.displayAddTorqueBook = false;
        this.buildLevelElmForAddingTorqueBook = null;
    };
    TorqueBookComponent.prototype.onAddTorqueSheetCancel = function () {
        this.torqueBookIdForAddingTorqueSheet = "";
        this.displayAddTorqueSheet = false;
        this.torqueBookElmForAddingTorqueSheet = null;
    };
    TorqueBookComponent.prototype.nodeExpand = function (event) {
        if (event.node) {
            if (event.node.data.rowType == "BuildLevel") {
                this.service.getTorqueBooks(this.projectId, event.node.data.id).subscribe(function (a) {
                    event.node.children = a.$values;
                });
            }
            else if (event.node.data.rowType == "TorqueBook") {
                this.torqueSheetService.getTorqueSheets(event.node.data.id).subscribe(function (a) {
                    event.node.children = a.$values;
                });
            }
        }
    };
    __decorate([
        core_1.ViewChild('torqueBookForm')
    ], TorqueBookComponent.prototype, "torqueBookForm", void 0);
    __decorate([
        core_1.ViewChild('torqueSheetForm')
    ], TorqueBookComponent.prototype, "torqueSheetForm", void 0);
    TorqueBookComponent = __decorate([
        core_1.Component({
            selector: 'torque-book',
            templateUrl: 'app/body/Project/TorqueBook/torque-book.component.html'
        })
    ], TorqueBookComponent);
    return TorqueBookComponent;
}());
exports.TorqueBookComponent = TorqueBookComponent;
