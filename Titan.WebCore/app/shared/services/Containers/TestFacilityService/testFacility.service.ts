import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TestFacilityApiUrl } from '../../apiUrlConst/TestFacility/testFacilityApiUrls';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "../../userProfile.service";
import {IUserProfile} from "../../definitions/IUserProfile";

@Injectable()
export class TestFacilityService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
       // 'Access-Control-Allow-Origin': '*'
    });

    body = {
        "locale": "en-us",
        "defaultLocale": "en-us",
        "PageNumber": 1,
        "PageSize": 15,
        "IsPaging": true
    };

    currentUser: IUserProfile;

    constructor(private http, private userProfileService: UserProfileService) {
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
    }

    postReserve(viewmodel): Observable<any> {
        return this.http.post(`${TestFacilityApiUrl.postReserveUrl}`, viewmodel, { headers: this.headers })
            .map(this.getJson);
    }
    postFree(viewmodel): Observable<any> {
        return this.http.post(`${TestFacilityApiUrl.postFreeUrl}`, viewmodel, { headers: this.headers })
            .map(this.getJson);
    }
    postGridData(): Observable<any> {
        return this.http.post(`${TestFacilityApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestFacilityApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestFacilityApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
           // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    moveEquipmenttoTestFacility(filterBody)
    {
        return this.http.post(`${TestFacilityApiUrl.PostMoveEquipmentToFacilityUrl}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

    }
    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${TestFacilityApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    getById(id): Observable<any> {
        return this.http.get(`${TestFacilityApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            .catch(err => {
                return Observable.throw({isSuccess: false, result: null, error: err});
            })
            .map(res => res);
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

 	getEquipmentsByIdusing(id): Observable<any> {
        return this.http.get(`${TestFacilityApiUrl.getEquipmentDetailsByIdUrl}/${id}`, { headers: this.headers })

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
      getTenants(id): Observable<any> {
          return this.http.get(`${TestFacilityApiUrl.getTenants}/${id}`, { headers: this.headers })

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
      getLogComments(id): Observable<any> {
          return this.http.get(`${TestFacilityApiUrl.getLogComments}/${id}`, { headers: this.headers })

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
      DeleteUserRoleMap(id): Observable<any> {
          return this.http.post(`${TestFacilityApiUrl.DeleteUserRoleMap}/${id}`, { headers: this.headers })

              //     .toPromise()
              //  .then(res => <ITestFacilityRole[]> res.json().data)
              // .then(data => { return data; });
              .map(this.getJson)
              //.map(data => {
              //    console.log('---------getbyusing testdata---------', data);
              //    return data.$values
              //});
              ;
          //.catch(err => Observable.throw(err))
          //.map(this.getJson);
      }
      DeleteTestFacility(id): Observable<any> {
          return this.http.post(`${TestFacilityApiUrl.DeleteTestFacilityUrl}/${id}`, { headers: this.headers })

              //     .toPromise()
              //  .then(res => <ITestFacilityRole[]> res.json().data)
              // .then(data => { return data; });
              .map(this.getJson)
              //.map(data => {
              //    console.log('---------getbyusing testdata---------', data);
              //    return data.$values
              //});
              ;
          //.catch(err => Observable.throw(err))
          //.map(this.getJson);
      }
      DeleteEquipmentMap(id): Observable<any> {
          return this.http.post(`${TestFacilityApiUrl.DeleteEquipmentMap}/${id}`, { headers: this.headers })

              //     .toPromise()
              //  .then(res => <ITestFacilityRole[]> res.json().data)
              // .then(data => { return data; });
              .map(this.getJson)
              //.map(data => {
              //    console.log('---------getbyusing testdata---------', data);
              //    return data.$values
              //});
              ;
          //.catch(err => Observable.throw(err))
          //.map(this.getJson);
      }
      DeleteTenantMap(id): Observable<any> {
          return this.http.post(`${TestFacilityApiUrl.DeleteTenantMap}/${id}`, { headers: this.headers })

              //     .toPromise()
              //  .then(res => <ITestFacilityRole[]> res.json().data)
              // .then(data => { return data; });
              .map(this.getJson)
              //.map(data => {
              //    console.log('---------getbyusing testdata---------', data);
              //    return data.$values
              //});
              ;
          //.catch(err => Observable.throw(err))
          //.map(this.getJson);
      }

 getTestFacilities(): Observable<any> {
     return this.http.get(`${TestFacilityApiUrl.getAllUrl}`, { headers: this.headers })
         .map(this.getJson)
         .map(data => {
             console.log("Notification data --------", data);
             return data.$values
         });
     //.catch(err => Observable.throw(err))
     //.map(this.getJson);
 }
 getAvailableTestFacilities(id): Observable<any> {
     return this.http.get(`${TestFacilityApiUrl.getAvailableAllUrl}/${id}`, { headers: this.headers })
         .map(this.getJson)
         .map(data => {
             console.log("Notification data --------", data);
             return data.$values
         });
     //.catch(err => Observable.throw(err))
     //.map(this.getJson);
 }
    getNotifications(id): Observable<any> {
        return this.http.get(`${TestFacilityApiUrl.getNotifications}/${id}`, {headers: this.headers})
            .map(this.getJson)
            .map(data => {
                console.log("Notification data --------", data);
                return data.$values
            });
    }

    getRoles(): Observable<any> {

     return this.http.get(`${TestFacilityApiUrl.getRoles}`, { headers: this.headers })
         .map(this.getJson)
         .map(data => {
             console.log("Notification data --------", data);
             return data.$values
         });
    }

    getDepartments(): Observable<any> {

        return this.http.get(`${TestFacilityApiUrl.getDepartments}`, { headers: this.headers })
            .map(this.getJson)
            .map(data => {
                console.log("Notification data --------", data);
                return data.$values
            });
    }
    getOperatingHours(): Observable<any> {

        return this.http.get(`${TestFacilityApiUrl.getOperatingHours}`, { headers: this.headers })
            .map(this.getJson)
            .map(data => {
                console.log("Notification data --------", data);
                return data.$values
            });
    }
    getCategories(): Observable<any> {

        return this.http.get(`${TestFacilityApiUrl.getCategories}`, { headers: this.headers })
            .map(this.getJson)
            .map(data => {
                console.log("Notification data --------", data);
                return data.$values
            });
    }
    getMaintenanceFrequencies(): Observable<any> {

        return this.http.get(`${TestFacilityApiUrl.getMaintenanceFrequencies}`, { headers: this.headers })
            .map(this.getJson)
            .map(data => {
                console.log("Notification data --------", data);
                return data.$values
            });
    }
    getEquipments(id): Observable<any> {

        return this.http.get(`${TestFacilityApiUrl.getEquipments}/${id}`, { headers: this.headers })
            .map(this.getJson)
            .map(data => {
                console.log("Notification data --------", data);
                return data.$values
            });
    }
    getEquipmentsToAdd(id): Observable<any> {

        return this.http.get(`${TestFacilityApiUrl.getEquipmentToAddUrl}${id}`, { headers: this.headers })
            .map(this.getJson)
            .map(data => {
                console.log("Notification data --------", data);
                return data.$values
            });
    }
 getFilteredEvents(teststatus, buildlevels, projectcodes, testroles, testfacilitys, testtypes, testmodes): Observable < any > {
     return this.http.get(`${TestFacilityApiUrl.getFilteredEvents}/${teststatus}/${buildlevels}/${projectcodes}/${testroles}/${testfacilitys}/${testtypes}/${testmodes}/`, { headers: this.headers })
         .map(this.getJson)
         .map(data => {
             console.log("Notification data --------", data);
             return data.$values
         });
 }

    filterByUserNames(filterString): Observable<any> {
        return this.http.get(`${TestFacilityApiUrl.filterUserNames}/${filterString}`, { headers: this.headers })
            .map(this.getJson);
}
    postAddUserNames(filterBody, testFacilityId,testFacilityRoleId): Observable<any> {
        return this.http.post(`${TestFacilityApiUrl.PostAddUserRolesUrl}/${testFacilityId}/${testFacilityRoleId}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    postAddDepartment(testFacilityId, selectedDepartmentId): Observable<any> {
        return this.http.post(`${TestFacilityApiUrl.PostAddDepartmentMapUrl}/${testFacilityId}/${selectedDepartmentId}`, null, { headers: this.headers })
            .map(this.getJson);
    }
    PostLogComments(testFacilityId, comment): Observable<any> {

        return this.http.post(`${TestFacilityApiUrl.PostLogCommentsUrl}/${testFacilityId}`, comment, { headers: this.headers })

            .map(this.getJson);
    }
    postAddEquipment(testFacilityId, selectedEquipmentId): Observable<any> {
        return this.http.post(`${TestFacilityApiUrl.PostAddEquipmentMapUrl}/${testFacilityId}/${selectedEquipmentId}`, null, { headers: this.headers })
            .map(this.getJson);
    }
    postMoveTest(formData){
        return this.http.post(`${TestFacilityApiUrl.postMoveTestUrl}`, formData, { headers: this.headers })
            .map(this.getJson);
    }
    postSplitTestFacilityEvent(viewModel): Observable<any> {
        return this.http.post(`${TestFacilityApiUrl.postSplitTestFacilityEvent}`, viewModel, { headers: this.headers })
            .map(this.getJson);
    }
	getLocalizationInformationObservable(resourceSetName,cultureName):Observable<any> {
        return this.http.get(`${TestFacilityApiUrl.getDetailsTabLocJs}${resourceSetName}&cultureName=${cultureName}`)
            .map(res =>{
                console.log('data in getLoc ---------', res.json().Resources[0]);
                return res.json().Resources[0];
            });
        //.map(this.getJson);
    }
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
