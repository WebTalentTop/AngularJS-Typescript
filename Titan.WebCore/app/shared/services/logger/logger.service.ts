import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoggerService{
    show:boolean = true;

    public logConsole(message, data) {
        if(this.show) {
            this.log(message, data);
        }
    }

    private log(message, data) {
        if(this.show) {
            console.log(message, data);
        }
    }

    public setShow(showing:boolean) {
        this.show = showing;
    }

    public error(message, data) {
        if(this.show) {
            console.error(message, data);
        }
    }

    public info(message, data) {
        if(this.show) {
            console.info(message, data);
        }
    }

    public warn(message, data) {
        if(this.show) {
            console.warn(message, data);
        }
    }
}