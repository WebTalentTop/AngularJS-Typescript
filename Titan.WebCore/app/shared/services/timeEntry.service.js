"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var TimeEntryApiUrls_1 = require('./apiUrlConst/TimeEntryApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var TimeEntryService = (function () {
    function TimeEntryService(http) {
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
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    //postGridData(): Observable<any> {
    //    return this.http.post(`${TestRequestApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
    //        .map(this.getJson);
    //    //this.checkErrors)
    //    //.catch(err => Observable.throw(err))
    //    //.map(this.getJson);
    //}
    //postGridDataFilter(filterBody): Observable<any> {
    //    console.log("-------- Post Customers FilterBody --------", filterBody);
    //    return this.http.post(`${TestRequestApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
    //        .map(this.getJson);
    //    //this.checkErrors)
    //    //.catch(err => Observable.throw(err))
    //    //.map(this.getJson);
    //}
    TimeEntryService.prototype.postUpdate = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TimeEntryApiUrls_1.TimeEntryApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson).catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TimeEntryService.prototype.postAdd = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TimeEntryApiUrls_1.TimeEntryApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TimeEntryService.prototype.getTestStages = function () {
        return this.http.get("" + TimeEntryApiUrls_1.TimeEntryApiUrl.getTestStages, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
    };
    TimeEntryService.prototype.getHourEntryByEntityIdentifierId = function (id) {
        return this.http.get(TimeEntryApiUrls_1.TimeEntryApiUrl.getHourEntryByEntityIdentifierId + "/" + id, { headers: this.headers })
            .map(this.getJson)
            .map(function (data) {
            console.log("Notification data --------", data);
            return data.$values;
        });
    };
    TimeEntryService.prototype.getById = function (id) {
        return this.http.get(TimeEntryApiUrls_1.TimeEntryApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TimeEntryService.prototype.GetProjectId = function (id) {
        return this.http.get(TimeEntryApiUrls_1.TimeEntryApiUrl.GetProjectId + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TimeEntryService.prototype.GetTrackingListByEntityId = function (id) {
        return this.http.get(TimeEntryApiUrls_1.TimeEntryApiUrl.GetTrackingListByEntityId + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TimeEntryService.prototype.GetAllDownTimeReasons = function () {
        return this.http.get("" + TimeEntryApiUrls_1.TimeEntryApiUrl.GetAllDownTimeReasons, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    /*  getEquipmentsByIdusing(id): Observable<any> {
          return this.http.get(`${TestRequestApiUrl.getEquipmentDetailsByIdUrl}/${id}`, { headers: this.headers })
  
              //     .toPromise()
              //  .then(res => <ITestFacilityRole[]> res.json().data)
              // .then(data => { return data; });
              .map(this.getJson)
              .map(data => {
                  console.log('---------getbyusing testdata---------', data);
                  return data.$values
              });
          //.catch(err => Observable.throw(err))
          //.map(this.getJson);
      }
      getRoles(): Observable<any> {
          return this.http.get(`${TestRequestApiUrl.getRoles}`, { headers: this.headers })
              .map(this.getJson)
              .map(data => {
                  console.log("Notification data --------", data);
                  return data.$values
              });
      }
      getNotifications(id): Observable<any> {
          return this.http.get(`${TestRequestApiUrl.getNotifications}/${id}`, { headers: this.headers })
              .map(this.getJson)
              .map(data => {
                  console.log("Notification data --------", data);
                  return data.$values
              });
      }
      filterByUserNames(filterString): Observable<any> {
          return this.http.get(`${TestRequestApiUrl.filterUserNames}/${filterString}`, { headers: this.headers })
              .map(this.getJson);
      }
      postAddUserNames(filterBody, testFacilityId, testFacilityRoleId): Observable<any> {
          return this.http.post(`${TestRequestApiUrl.PostAddUserRolesUrl}/${testFacilityId}/${testFacilityRoleId}`, filterBody, { headers: this.headers })
              .map(this.getJson);
      }*/
    TimeEntryService.prototype.getJson = function (response) {
        return response.json();
    };
    TimeEntryService.prototype.checkErrors = function (response) {
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
    TimeEntryService = __decorate([
        core_1.Injectable()
    ], TimeEntryService);
    return TimeEntryService;
}());
exports.TimeEntryService = TimeEntryService;
