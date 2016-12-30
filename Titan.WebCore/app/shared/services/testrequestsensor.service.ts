import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TestReqestSensorApiUrl } from './apiUrlConst/TestRequestSensorApiUrls';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class TestRequestSensorService {
    headers: Headers = new Headers({
      'Content-Type': 'application/json',
      //  'Content-Type': 'multipart/form-data',
        // 'Access-Control-Allow-Origin': '*'
    });

    body = {
        "locale": "en-us",
        "defaultLocale": "en-us",
        "PageNumber": 1,
        "PageSize": 15,
        "IsPaging": true
    };

    constructor(private http: Http) {
        //this.progress$ = Observable.create(observer => {
        //    this.progressObserver = observer
        //}).share();
    //  this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
       

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

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${TestReqestSensorApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postCommentUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${TestReqestSensorApiUrl.postCommentUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAdd(filterBody,comment): Observable<any> {
        return this.http.post(`${TestReqestSensorApiUrl.postCreatedUrl}/${comment}`, filterBody, { headers: this.headers })
            //.map(this.getJson)
            //.map(this.checkErrors)
            //.catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    postTestRequestAdd(filterBody): Observable<any> {
        //let   multipartheaders: Headers = new Headers({
        //       //  'Content-Type': 'application/json',
        //        'Content-Type': 'multipart/form-data',
        //       // 'Access-Control-Allow-Origin': '*'
        //   });
        //  this.headers.append("content-Type", "multipart/form-data");
        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestReqestSensorApiUrl.postTestRequestCreatedUrl}`, filterBody, { headers: this.headers })
            //.map(this.getJson)
            //.map(this.checkErrors)
            //.catch(err => Observable.throw(err))
            .map(this.getJson);
    }
    postWorkRequestAdd(filterBody): Observable<any> {
       
        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestReqestSensorApiUrl.postWorkRequestCreatedUrl}`, filterBody, { headers: this.headers })
            //.map(this.getJson)
            //.map(this.checkErrors)
            //.catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    postTestRequestExternalDepartmentsAdd(filterBody): Observable<any> {

        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestReqestSensorApiUrl.postTestRequestExternalDepartmentsAddUrl}`, filterBody, { headers: this.headers })
            //.map(this.getJson)
            //.map(this.checkErrors)
            //.catch(err => Observable.throw(err))
            .map(this.getJson);
    }
    postTasksAdd(filterBody): Observable<any> {

        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestReqestSensorApiUrl.postTasksAddUrl}`, filterBody, { headers: this.headers })
            //.map(this.getJson)
            //.map(this.checkErrors)
            //.catch(err => Observable.throw(err))
            .map(this.getJson);
    }
    postTasksComplete(id): Observable<any> {

        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${TestReqestSensorApiUrl.postTasksCompleteUrl}/${id}`, null, { headers: this.headers })
            //.map(this.getJson)
            //.map(this.checkErrors)
            //.catch(err => Observable.throw(err))
            .map(this.getJson);
    }
    postEmailAllUserDepartments(filterBody): Observable<any> {

        // console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestReqestSensorApiUrl.postEmailAllUserDepartmentsUrl}`, filterBody, { headers: this.headers })
            //.map(this.getJson)
            //.map(this.checkErrors)
            //.catch(err => Observable.throw(err))
            .map(this.getJson);
    }
    makeFileRequest(url: string, params: string[], files: File[], testRequestId: any): Observable<any> {
        return Observable.create(observer => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            formData.append("TestRequestId", testRequestId);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
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
    }
    postCommentAdd(filterBody): Observable<any> {
       // let multipartheaders: Headers = new Headers({
            //  'Content-Type': 'application/json',
         //   'Content-Type': 'multipart/form-data;boundary=---------------------------99614912995'
            // 'Access-Control-Allow-Origin': '*'
     //   });
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestReqestSensorApiUrl.postCommentCreatedUrl}`, filterBody, { headers: this.headers })
            //.map(this.getJson)
            //.map(this.checkErrors)
            //.catch(err => Observable.throw(err))
            .map(this.getJson);
    }
    GetAllTestRequestSensors(id,departmentId): Observable<any> {
        return this.http.get(`${TestReqestSensorApiUrl.GetAllTestRequestSensors}/${id}/${departmentId}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getById(id): Observable<any> {
        return this.http.get(`${TestReqestSensorApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getTestRequestById(id): Observable<any> {
        return this.http.get(`${TestReqestSensorApiUrl.getTestRequestByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getTaskDetailsById(id): Observable<any> {
        return this.http.get(`${TestReqestSensorApiUrl.getTaskDetailsByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getSensorCommentIdByTestRequestSensorId(id): Observable<any> {
        return this.http.get(`${TestReqestSensorApiUrl.getSensorCommentIdByTestRequestSensorIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
   
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
    private getJson(response: Response) {
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    }

    private checkErrors(response: Response): Response {
        if (response.status >= 200 && response.status <= 300) {
            return response;
        }
        else {
            var error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    }
}
