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
var TestRequestSensorApiUrls_1 = require('./apiUrlConst/TestRequestSensorApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var TestRequestSensorService = (function () {
    function TestRequestSensorService(http) {
        //this.progress$ = Observable.create(observer => {
        //    this.progressObserver = observer
        //}).share();
        //  this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        this.body = {
            "locale": "en-us",
            "defaultLocale": "en-us",
            "PageNumber": 1,
            "PageSize": 15,
            "IsPaging": true
        };
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
    TestRequestSensorService.prototype.postUpdate = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson).catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestRequestSensorService.prototype.postCommentUpdate = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.postCommentUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson).catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestRequestSensorService.prototype.postAdd = function (filterBody, comment) {
        return this.http.post(TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.postCreatedUrl + "/" + comment, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestSensorService.prototype.postTestRequestAdd = function (filterBody) {
        //let   multipartheaders: Headers = new Headers({
        //       //  'Content-Type': 'application/json',
        //        'Content-Type': 'multipart/form-data',
        //       // 'Access-Control-Allow-Origin': '*'
        //   });
        //  this.headers.append("content-Type", "multipart/form-data");
        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.postTestRequestCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestSensorService.prototype.postWorkRequestAdd = function (filterBody) {
        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.postWorkRequestCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestSensorService.prototype.postCreateWorkRequest = function (filterBody) {
        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.postWorkRequestUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestSensorService.prototype.postTestRequestExternalDepartmentsAdd = function (filterBody) {
        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.postTestRequestExternalDepartmentsAddUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestSensorService.prototype.postTasksAdd = function (filterBody) {
        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.postTasksAddUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestSensorService.prototype.postTasksComplete = function (id) {
        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.postTasksCompleteUrl + "/" + id, null, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestSensorService.prototype.postEmailAllUserDepartments = function (filterBody) {
        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.postEmailAllUserDepartmentsUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestSensorService.prototype.makeFileRequest = function (url, params, files, testRequestId) {
        return Observable_1.Observable.create(function (observer) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            formData.append("TestRequestId", testRequestId);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            //xhr.upload.onprogress = (event) => {
            //    this.progress = Math.round(event.loaded / event.total * 100);
            //    this.progressObserver.next(this.progress);
            //};
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    };
    TestRequestSensorService.prototype.postCommentAdd = function (filterBody) {
        // let multipartheaders: Headers = new Headers({
        //  'Content-Type': 'application/json',
        //   'Content-Type': 'multipart/form-data;boundary=---------------------------99614912995'
        // 'Access-Control-Allow-Origin': '*'
        //   });
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.postCommentCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
    };
    TestRequestSensorService.prototype.GetAllTestRequestSensors = function (id, departmentId) {
        return this.http.get(TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.GetAllTestRequestSensors + "/" + id + "/" + departmentId, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestRequestSensorService.prototype.getById = function (id) {
        return this.http.get(TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestRequestSensorService.prototype.getTestRequestById = function (id) {
        return this.http.get(TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.getTestRequestByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestRequestSensorService.prototype.getTaskDetailsById = function (id) {
        return this.http.get(TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.getTaskDetailsByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestRequestSensorService.prototype.getSensorCommentIdByTestRequestSensorId = function (id) {
        return this.http.get(TestRequestSensorApiUrls_1.TestReqestSensorApiUrl.getSensorCommentIdByTestRequestSensorIdUrl + "/" + id, { headers: this.headers })
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
    TestRequestSensorService.prototype.getJson = function (response) {
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    };
    TestRequestSensorService.prototype.checkErrors = function (response) {
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
    TestRequestSensorService = __decorate([
        core_1.Injectable()
    ], TestRequestSensorService);
    return TestRequestSensorService;
}());
exports.TestRequestSensorService = TestRequestSensorService;
