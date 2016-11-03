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
var logger_service_1 = require('./../../shared/services/logger.service');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var ProjectComponent = (function () {
    function ProjectComponent(dataService, router, logger) {
        this.dataService = dataService;
        this.router = router;
        this.logger = logger;
        this.title = "Project Grid";
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
    }
    ProjectComponent.prototype.onProjectDetailsClick = function () {
        var projectId = '53FE9592-1A9B-07D0-85D7-006A30BCD348';
        console.log(projectId);
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        //this.router.navigate(['/hero', hero.id]);
        this.router.navigate(['/detailsmain', { projectId: projectId }]);
    };
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resData;
        this.dataService.postProjectGridData()
            .subscribe(function (res) {
            resData = res;
            _this.gridData = res.Data;
            _this.cols = res.Configuration.Columns;
            _this.confInfo = res.Configuration;
        });
    };
    ProjectComponent.prototype.loadFreshDepartments = function (event) {
        var _this = this;
        setTimeout(function () {
            //            this.logger.logConsole("----------insede settimeout: ", event);
            _this.getGridFilterValues(event);
            var js = JSON.stringify(_this.gridFilter);
            _this.dataService.postProjectGridDataFilter(JSON.parse(js))
                .subscribe(function (res) {
                _this.logger.logConsole("------ ResData in postCustomersFilterSummary -----", res);
                var resData = res;
                _this.gridData = res.Data;
                _this.confInfo = res.Configuration;
                _this.cols = res.Configuration.Columns;
            });
        }, 250);
        //  console.log("---------- Event ---------", event);
    };
    ProjectComponent.prototype.getGridFilterValues = function (event) {
        console.log("----- GridFilterValues Called -------");
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
                this.logger.logConsole("------- filters ----------", filters);
            }
        }
        //this.gridFilter = { sortColumns: sortColumn, pageNumber: pageNumber, pageSize: 5, whereConditions: filters };
        this.gridFilter = {
            isPaging: true,
            sortColumns: sortColumn,
            locale: "en-us",
            defaultLocale: "en-us", pageNumber: pageNumber, pageSize: 5 };
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'project',
            templateUrl: 'app/body/Project/project.component.html'
        }), 
        __metadata('design:paramtypes', [data_services_1.DataService, router_1.Router, logger_service_1.LoggerService])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map