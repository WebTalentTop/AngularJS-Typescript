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
var data_services_1 = require('./../../shared/services/data.services');
var core_1 = require('@angular/core');
var CalendarComponent = (function () {
    function CalendarComponent(dataService) {
        this.dataService = dataService;
        this.title = "Calendar Grid";
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resData;
        this.dataService.postDepartmentGridData()
            .subscribe(function (res) {
            resData = res;
            console.log("Inside of Service Call in BodyComponent: ", resData);
            _this.gridData = res.Data;
            _this.cols = res.Configuration.Columns;
            //console.log("-------- Cols --------", this.cols);
            _this.confInfo = res.Configuration;
            //console.log("------- Configuration --------", this.confInfo);
        });
        console.log("The Whole MyValues After Service Call: ", this.gridData);
        console.log("The Whole configuration Info values: ", this.confInfo);
    };
    CalendarComponent.prototype.loadFreshDepartments = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log("----------insede settimeout: ", event);
            _this.getGridFilterValues(event);
            var js = JSON.stringify(_this.gridFilter);
            console.log("----------- GridFilter ---------", _this.gridFilter);
            console.log("-------- Grid Filter JS --------", JSON.parse(js));
            _this.dataService.postDepartmentGridDataFilter(JSON.parse(js))
                .subscribe(function (res) {
                console.log("------ ResData in postCustomersFilterSummary -----", res);
                var resData = res;
                _this.gridData = res.Data;
                _this.confInfo = res.Configuration;
                _this.cols = res.Configuration.Columns;
            });
        }, 250);
        console.log("---------- Event ---------", event);
    };
    CalendarComponent.prototype.getGridFilterValues = function (event) {
        var sortColumn = (typeof event.sortField === 'undefined') ? [] : [{ columnId: event.sortField, sortOrder: event.sortOrder }];
        var pageNumber = event.first === 0 ? 1 : (event.first / 5) + 1;
        var filters = [];
        var eFilters = event.filters;
        if (eFilters) {
            for (var key in eFilters) {
                var fil = eFilters[key].value;
                var matchMode = eFilters[key].matchMode;
                if (fil) {
                    filters.push({
                        columnId: key,
                        operator: matchMode,
                        value: fil
                    });
                }
                console.log("------- filters ----------", filters);
            }
        }
        this.gridFilter = {
            locale: "en-us",
            defaultLocale: "en-us", pageNumber: pageNumber, pageSize: 5
        };
    };
    CalendarComponent = __decorate([
        core_1.Component({
            selector: 'calendar',
            templateUrl: 'app/body/gridview.component.html'
        }), 
        __metadata('design:paramtypes', [data_services_1.DataService])
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map