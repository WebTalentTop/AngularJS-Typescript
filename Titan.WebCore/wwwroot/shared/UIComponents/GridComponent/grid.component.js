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
var GridComponent = (function () {
    function GridComponent() {
        this.lazyLoad = new core_1.EventEmitter();
        this.navigateData = new core_1.EventEmitter();
    }
    GridComponent.prototype.ngOnInit = function () { };
    GridComponent.prototype.onRowSelect = function (event) {
        var id = this.colsData.filter(function (x) { return x.Header === "Id"; });
        var data = this.selectedItem[id[0].Field];
        this.navigateData.emit(data);
    };
    GridComponent.prototype.lazyLoadUpdate = function (event) {
        this.lazyLoad.emit(event);
    };
    GridComponent = __decorate([
        core_1.Component({
            selector: 'grid-data',
            templateUrl: 'app/shared/UIComponents/GridComponent/grid.component.html',
            inputs: ['title', 'gridValues', 'colsData', 'confInfos'],
            outputs: ['lazyLoad', 'navigateData']
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map