"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var TestFacilityApiUrls_1 = require('./apiUrlConst/TestFacilityApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var TestFacilityService = (function () {
    function TestFacilityService(http) {
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.body = {
            "locale": "en-us",
            "defaultLocale": "en-us",
            "PageNumber": 1,
            "PageSize": 15,
            "IsPaging": true
        };
        /*this.headers.append('Access-Control-Allow-Origin', 'http://localhost:62603');
        this.headers.append('Access-Control-Allow-Methods', 'GE, PUT, POST, OPTIONS');
        this.headers.append('Content-Type', 'application/json');*/
        this.headers.append('Accept', 'application/json');
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    TestFacilityService.prototype.postReserve = function (viewmodel) {
        return this.http.post("" + TestFacilityApiUrls_1.TestFacilityApiUrl.postReserveUrl, viewmodel, { headers: this.headers })
            .map(this.getJson);
    };
    TestFacilityService.prototype.postFree = function (viewmodel) {
        return this.http.post("" + TestFacilityApiUrls_1.TestFacilityApiUrl.postFreeUrl, viewmodel, { headers: this.headers })
            .map(this.getJson);
    };
    TestFacilityService.prototype.postGridData = function () {
        return this.http.post("" + TestFacilityApiUrls_1.TestFacilityApiUrl.gridApiUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.postGridDataFilter = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestFacilityApiUrls_1.TestFacilityApiUrl.gridApiUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.postAdd = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestFacilityApiUrls_1.TestFacilityApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.moveEquipmenttoTestFacility = function (filterBody) {
        return this.http.post("" + TestFacilityApiUrls_1.TestFacilityApiUrl.PostMoveEquipmentToFacilityUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestFacilityService.prototype.postUpdate = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + TestFacilityApiUrls_1.TestFacilityApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestFacilityService.prototype.getById = function (id) {
        return this.http.get(TestFacilityApiUrls_1.TestFacilityApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.getEquipmentsByIdusing = function (id) {
        return this.http.get(TestFacilityApiUrls_1.TestFacilityApiUrl.getEquipmentDetailsByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log('---------getbyusing testdata---------', data);
            return data.$values;
        });
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.getTenants = function (id) {
        return this.http.get(TestFacilityApiUrls_1.TestFacilityApiUrl.getTenants + "/" + id, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log('---------getbyusing testdata---------', data);
            return data.$values;
        });
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.getLogComments = function (id) {
        return this.http.get(TestFacilityApiUrls_1.TestFacilityApiUrl.getLogComments + "/" + id, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log('---------getbyusing testdata---------', data);
            return data.$values;
        });
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.DeleteUserRoleMap = function (id) {
        return this.http.post(TestFacilityApiUrls_1.TestFacilityApiUrl.DeleteUserRoleMap + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.DeleteTestFacility = function (id) {
        return this.http.post(TestFacilityApiUrls_1.TestFacilityApiUrl.DeleteTestFacilityUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.DeleteEquipmentMap = function (id) {
        return this.http.post(TestFacilityApiUrls_1.TestFacilityApiUrl.DeleteEquipmentMap + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.DeleteTenantMap = function (id) {
        return this.http.post(TestFacilityApiUrls_1.TestFacilityApiUrl.DeleteTenantMap + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.getTestFacilities = function () {
        return this.http.get("" + TestFacilityApiUrls_1.TestFacilityApiUrl.getAllUrl, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.getAvailableTestFacilities = function (id) {
        return this.http.get(TestFacilityApiUrls_1.TestFacilityApiUrl.getAvailableAllUrl + "/" + id, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestFacilityService.prototype.getNotifications = function (id) {
        return this.http.get(TestFacilityApiUrls_1.TestFacilityApiUrl.getNotifications + "/" + id, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
    };
    TestFacilityService.prototype.getRoles = function () {
        return this.http.get("" + TestFacilityApiUrls_1.TestFacilityApiUrl.getRoles, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
    };
    TestFacilityService.prototype.getDepartments = function () {
        return this.http.get("" + TestFacilityApiUrls_1.TestFacilityApiUrl.getDepartments, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
    };
    TestFacilityService.prototype.getOperatingHours = function () {
        return this.http.get("" + TestFacilityApiUrls_1.TestFacilityApiUrl.getOperatingHours, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
    };
    TestFacilityService.prototype.getCategories = function () {
        return this.http.get("" + TestFacilityApiUrls_1.TestFacilityApiUrl.getCategories, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
    };
    TestFacilityService.prototype.getMaintenanceFrequencies = function () {
        return this.http.get("" + TestFacilityApiUrls_1.TestFacilityApiUrl.getMaintenanceFrequencies, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
    };
    TestFacilityService.prototype.getEquipments = function (id) {
        return this.http.get(TestFacilityApiUrls_1.TestFacilityApiUrl.getEquipments + "/" + id, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
    };
    TestFacilityService.prototype.getEquipmentsToAdd = function (id) {
        return this.http.get("" + TestFacilityApiUrls_1.TestFacilityApiUrl.getEquipmentToAddUrl + id, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
    };
    TestFacilityService.prototype.getFilteredEvents = function (teststatus, buildlevels, projectcodes, testroles, testfacilitys, testtypes, testmodes) {
        return this.http.get(TestFacilityApiUrls_1.TestFacilityApiUrl.getFilteredEvents + "/" + teststatus + "/" + buildlevels + "/" + projectcodes + "/" + testroles + "/" + testfacilitys + "/" + testtypes + "/" + testmodes + "/", { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
    };
    TestFacilityService.prototype.filterByUserNames = function (filterString) {
        return this.http.get(TestFacilityApiUrls_1.TestFacilityApiUrl.filterUserNames + "/" + filterString, { headers: this.headers })
            .map(this.getJson);
    };
    TestFacilityService.prototype.postAddUserNames = function (filterBody, testFacilityId, testFacilityRoleId) {
        return this.http.post(TestFacilityApiUrls_1.TestFacilityApiUrl.PostAddUserRolesUrl + "/" + testFacilityId + "/" + testFacilityRoleId, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestFacilityService.prototype.postAddDepartment = function (testFacilityId, selectedDepartmentId) {
        return this.http.post(TestFacilityApiUrls_1.TestFacilityApiUrl.PostAddDepartmentMapUrl + "/" + testFacilityId + "/" + selectedDepartmentId, null, { headers: this.headers })
            .map(this.getJson);
    };
    TestFacilityService.prototype.PostLogComments = function (testFacilityId, comment) {
        return this.http.post(TestFacilityApiUrls_1.TestFacilityApiUrl.PostLogCommentsUrl + "/" + testFacilityId, comment, { headers: this.headers })
            .map(this.getJson);
    };
    TestFacilityService.prototype.postAddEquipment = function (testFacilityId, selectedEquipmentId) {
        return this.http.post(TestFacilityApiUrls_1.TestFacilityApiUrl.PostAddEquipmentMapUrl + "/" + testFacilityId + "/" + selectedEquipmentId, null, { headers: this.headers })
            .map(this.getJson);
    };
    TestFacilityService.prototype.postMoveTest = function (formData) {
        return this.http.post("" + TestFacilityApiUrls_1.TestFacilityApiUrl.postMoveTestUrl, formData, { headers: this.headers })
            .map(this.getJson);
    };
    TestFacilityService.prototype.postSplitTestFacilityEvent = function (viewModel) {
        return this.http.post("" + TestFacilityApiUrls_1.TestFacilityApiUrl.postSplitTestFacilityEvent, viewModel, { headers: this.headers })
            .map(this.getJson);
    };
    TestFacilityService.prototype.getLocalizationInformationObservable = function (resourceSetName, cultureName) {
        return this.http.get("" + TestFacilityApiUrls_1.TestFacilityApiUrl.getDetailsTabLocJs + resourceSetName + "&cultureName=" + cultureName)
            .map(function (res) {
            console.log('data in getLoc ---------', res.json().Resources[0]);
            return res.json().Resources[0];
        });
        //.map(this.getJson);
    };
    TestFacilityService.prototype.getJson = function (response) {
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    };
    TestFacilityService.prototype.checkErrors = function (response) {
        if (response.status >= 200 && response.status <= 300) {
            return response;
        }
        else {
            var error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    };
    TestFacilityService = __decorate([
        core_1.Injectable()
    ], TestFacilityService);
    return TestFacilityService;
}());
exports.TestFacilityService = TestFacilityService;
