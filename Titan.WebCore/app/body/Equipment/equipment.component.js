"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var EquipmentComponent = (function () {
    function EquipmentComponent(service, router) {
        this.service = service;
        this.router = router;
        // title = "Equipment";
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
        this.msgs = [];
    }
    EquipmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resData;
        this.service.postGridData()
            .subscribe(function (res) {
            resData = res;
            _this.gridData = res.Data;
            _this.cols = res.Configuration.Columns;
            _this.confInfo = res.Configuration;
        });
    };
    EquipmentComponent.prototype.navigateDetails = function (id) {
        this.router.navigate(['equipment/details', id]);
    };
    EquipmentComponent = __decorate([
        core_1.Component({
            selector: 'equipment',
            templateUrl: 'app/body/Equipment/equipment.component.html'
        })
    ], EquipmentComponent);
    return EquipmentComponent;
}());
exports.EquipmentComponent = EquipmentComponent;
