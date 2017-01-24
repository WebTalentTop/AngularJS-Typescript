"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require("rxjs/add/operator/map");
var EditComponent = (function () {
    function EditComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.title = "Tenant Edit";
        route.params.subscribe(function (params) { return _this.id = params['id']; });
        console.log(this.id);
        service.getById(this.id).subscribe(function (res) { return _this.model = res; });
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent.prototype.onSubmit = function (formRef) {
        console.log(formRef);
        var formData = { id: this.id, name: '', description: '', locale: '' };
        formData.name = formRef.username;
        formData.description = formRef.description;
        formData.locale = "en-us";
        console.log(formData);
        //this.service.postUpdate(formData).subscribe(res => console.log(res));
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            templateUrl: 'app/body/Admin/Vehicle/Tenant/Edit/edit.component.html'
        })
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
