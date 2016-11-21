import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EquipmentTypeApiUrl} from './apiUrlConst/equipmenttypeApiUrls';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class EquipmentTypeService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    body = {
        "locale": "en-us",
        "defaultLocale": "en-us",
        "PageNumber": 1,
        "PageSize": 5,
        "IsPaging": true
    };

    constructor(private http: Http) {
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }

    postGridData(): Observable<any> {
        return this.http.post(`${EquipmentTypeApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${EquipmentTypeApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
   DeleteEquipmentsById(id): any
   {
       return this.http.post(`${EquipmentTypeApiUrl.postdeleteUrl}/${id}`, { headers: this.headers })
       .map(this.getJson);
     
    }
    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${EquipmentTypeApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
          //  .map(this.getJson).catch(err => Observable.throw(err))
          //  .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${EquipmentTypeApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            //.map(this.getJson)
            //.map(this.checkErrors)
            //.catch(err => Observable.throw(err))
           // .map(this.getJson);
    }

    getById(id): Observable<any> {
        return this.http.get(`${EquipmentTypeApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

     getSubTypesById(id): Observable<any> {
        return this.http.get(`${EquipmentTypeApiUrl.getSubTypesByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
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
