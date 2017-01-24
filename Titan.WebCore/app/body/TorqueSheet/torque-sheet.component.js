"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TorqueSheetComponent = (function () {
    function TorqueSheetComponent(service, router) {
        this.service = service;
        this.router = router;
        // title = "Test Facilities";
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
    }
    TorqueSheetComponent.prototype.ngOnInit = function () {
        //let resData:any;
        //this.service.postGridData()
        //    .subscribe(res => {
        //        resData = res;
        //        this.gridData = res.Data;
        //        this.cols = res.Configuration.Columns;
        //        //console.log("-------- Cols --------", this.cols);
        //        this.confInfo = res.Configuration;
        //        //console.log("------- Configuration --------", this.confInfo);
        //    });
        //console.log("The Whole MyValues After Service Call: ", this.gridData);
        //console.log("The Whole configuration Info values: ", this.confInfo);
    };
    TorqueSheetComponent.prototype.navigateDetails = function (id) {
        this.router.navigate(['torquesheet/details', id]);
    };
    TorqueSheetComponent = __decorate([
        core_1.Component({
            selector: 'torque-sheet',
            templateUrl: 'app/body/TorqueSheet/torque-sheet.component.html'
        })
    ], TorqueSheetComponent);
    return TorqueSheetComponent;
}());
exports.TorqueSheetComponent = TorqueSheetComponent;
