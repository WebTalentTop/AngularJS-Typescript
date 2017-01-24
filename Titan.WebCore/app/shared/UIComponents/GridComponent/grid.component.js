"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GridComponent = (function () {
    function GridComponent() {
        this.navigateToDetails = new core_1.EventEmitter();
        this.lazyLoadingData = false;
        this.gridFilter = {};
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent.prototype.navigateTo = function (item) {
        var idField = this.cols.filter(function (filter) { return filter.Header === "Id"; })[0].Field;
        this.navigateToDetails.emit(item[idField]);
    };
    GridComponent.prototype.loadFresh = function (event) {
        var _this = this;
        console.log("Load Fresh Called at Grid Component ----");
        console.log("data service ---------", this.dataService);
        setTimeout(function () {
            console.log("----------insede settimeout: ", event);
            _this.getGridFilterValues(event);
            var js = JSON.stringify(_this.gridFilter);
            console.log("----------- GridFilter ---------", _this.gridFilter);
            console.log("-------- Grid Filter JS --------", JSON.parse(js));
            _this.dataService.postGridDataFilter(JSON.parse(js))
                .subscribe(function (res) {
                console.log("------ ResData in postCustomersFilterSummary -----", res);
                var resData = res;
                _this.gridData = res.Data;
                _this.confInfo = res.Configuration;
                _this.cols = res.Configuration.Columns;
                _this.lazyLoadingData = true;
                _this.cols.filter(function (x) { if (x.Header === "Id") {
                    _this.idField = x.Field;
                } return x; });
                _this.cols.filter(function (x) { if (x.Header === "Name") {
                    _this.linkFieldId = x.Field;
                } return x; });
            });
        }, 250);
        console.log("---------- Event ---------", event);
    };
    GridComponent.prototype.getGridFilterValues = function (event) {
        var sortColumn = (typeof event.sortField === 'undefined') ? [] : [{ columnId: event.sortField, sortOrder: event.sortOrder }];
        var pageNumber = event.first === 0 ? 1 : (event.first / this.confInfo.PageSize) + 1;
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
            isPaging: true,
            sortColumns: sortColumn,
            locale: "en-us",
            defaultLocale: "en-us", pageNumber: pageNumber, pageSize: this.confInfo.PageSize, whereConditions: filters
        };
    };
    GridComponent = __decorate([
        core_1.Component({
            selector: 'grid-data',
            templateUrl: 'app/shared/UIComponents/GridComponent/grid.component.html',
            inputs: ['title', 'dataService', 'confInfo', "gridData", "cols"],
            outputs: ['navigateToDetails']
        })
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
