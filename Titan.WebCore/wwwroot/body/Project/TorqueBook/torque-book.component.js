"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var project_service_1 = require('../project.service');
var TorqueBookComponent = (function () {
    function TorqueBookComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    TorqueBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.projectId = params['projectId']; // (+) converts string 'id' to a number
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
    TorqueBookComponent.prototype.onAddTorqueBook = function (buildLevelId, event) {
        this.buildLevelIdForAddingTorqueBook = buildLevelId;
        this.buildLevelElmForAddingTorqueBook = event.srcElement;
        this.displayAddTorqueBook = true;
    };
    TorqueBookComponent.prototype.onAddTorqueSheet = function (torqueBookId, event) {
        this.torqueBookIdForAddingTorqueSheet = torqueBookId;
        this.torqueBookElmForAddingTorqueSheet = event.srcElement;
        this.displayAddTorqueSheet = true;
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
            name: this.newTorqueSheetName };
        var tempId = this.torqueBookIdForAddingTorqueSheet;
        var container = $(this.torqueBookElmForAddingTorqueSheet).closest("div.ui-treetable-row");
        this.service.postTorqueSheet(postData).subscribe(function (res) {
            var expandImg = $("span.ui-treetable-toggler.fa-caret-right", container);
            if (expandImg != null && expandImg.length > 0)
                expandImg.trigger("click");
            else {
                _this.service.getTorqueSheets(_this.torqueBookIdForAddingTorqueSheet).subscribe(function (a) {
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
                this.service.getTorqueSheets(event.node.data.id).subscribe(function (a) {
                    event.node.children = a.$values;
                });
            }
        }
    };
    __decorate([
        core_1.ViewChild('torqueBookForm'), 
        __metadata('design:type', Object)
    ], TorqueBookComponent.prototype, "torqueBookForm", void 0);
    __decorate([
        core_1.ViewChild('torqueSheetForm'), 
        __metadata('design:type', Object)
    ], TorqueBookComponent.prototype, "torqueSheetForm", void 0);
    TorqueBookComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'torque-book',
            templateUrl: 'torque-book.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, project_service_1.ProjectService])
    ], TorqueBookComponent);
    return TorqueBookComponent;
}());
exports.TorqueBookComponent = TorqueBookComponent;
//# sourceMappingURL=torque-book.component.js.map