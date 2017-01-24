/**
 * Created by ZeroInfinity on 1/24/2017.
 */

import {Component} from "@angular/core";
import {LoggerService} from "../../shared/services/logger/logger.service";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
    selector: 'error-display',
    templateUrl: 'app/body/Error/error.component.html'
})
export class ErrorComponent {
    statusCode:number;

    constructor(private ls: LoggerService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
        this.ls.setShow(true);
    }

    ngOnInit() {
        this.activatedRoute
            .params
            .subscribe(params => this.statusCode = params['statusCode']);
    }
}