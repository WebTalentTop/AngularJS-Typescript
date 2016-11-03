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
var platform_services_1 = require('../../../../../shared/services/platform.services');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
require("rxjs/add/operator/map");
var EditComponent = (function () {
    function EditComponent(route, platformService) {
        var _this = this;
        this.route = route;
        this.platformService = platformService;
        this.title = "FrameNumber Edit";
        route.params.subscribe(function (params) { return _this.id = params['id']; });
        console.log(this.id);
        platformService.getPlatformById(this.id).subscribe(function (res) { return _this.model = res; });
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent.prototype.onSubmit = function (formRef) {
        console.log(formRef);
        var platformData = { id: this.id, name: '', description: '', locale: '' };
        platformData.name = formRef.username;
        platformData.description = formRef.description;
        platformData.locale = "en-us";
        console.log(platformData);
        //this.platformService.postUpdatePlatform(platformData).subscribe(res => console.log(res));
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            templateUrl: 'app/body/Admin/Vehicle/FrameNumber/Edit/edit.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, platform_services_1.PlatformService])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map