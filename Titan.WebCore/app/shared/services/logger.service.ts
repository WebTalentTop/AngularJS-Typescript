import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {GridApiUrl} from './apiUrlConst/gridApiUrl';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoggerService{
    public logConsole(message, data) {
        this.log(message, data);
    }

    private log(message, data) {
        console.log(message, data);
    }
}