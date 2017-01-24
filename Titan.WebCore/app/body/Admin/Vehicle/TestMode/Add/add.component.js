"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';
var AddComponent = (function () {
    function AddComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.selectedTestTypeIdList = [];
        this.selectedTestTypeIds = { Id: '' };
        this.msgs = [];
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedTestTypes = [];
        this.service.getAllTestTypes().subscribe(function (TestTypesList) {
            _this.testTypeDetails = TestTypesList.result;
            _this.allTestTypes = _this.testTypeDetails;
            //  this.selectedTestTypes = this.testTypeDetails.selectedTestTypeIdList.$values;
            //if (TestTypesList != null) {
            //    var resultMap = new Array();
            //    this.testTypeDetails = TestTypesList.$values;
            //    for (let template of TestTypesList.$values) {
            //        var temp = {
            //            label: template.name,
            //            value: template.id
            //        }
            //        resultMap.push(temp);
            //    }
            //    this.testTypeDetails = resultMap;
            //}
        });
    };
    AddComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        if (formRef.description == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please enter description', detail: '' });
        }
        else if (this.selectedTestTypes.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'select atleast one TestType', detail: '' });
        }
        else {
            this.selectedTestTypes.forEach(function (testtype, index) {
                _this.selectedTestTypeIds.Id = testtype.value;
                _this.selectedTestTypeIdList.push(testtype.value);
            });
            var formData = { name: '', description: '', locale: '', isDeleted: false, TestTypeIdList: this.selectedTestTypeIdList };
            formData.name = formRef.name;
            formData.description = formRef.description;
            formData.locale = "en-us";
            var added = "true";
            console.log(formData);
            this.service.postAdd(formData).subscribe(function (res) {
                console.log('--------------res result------------', +res);
                // this.router.navigate(["/vehicle/projectStatus/", res]);
                if (res.isSuccess) {
                    //this.router.navigate([], {q})
                    _this.router.navigate(["/admin/vehicle/testMode"], { queryParams: { page: 1 } });
                }
            });
        }
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-testMode',
            templateUrl: 'app/body/Admin/Vehicle/TestMode/Add/add.component.html'
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
