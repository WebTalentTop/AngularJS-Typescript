/**
 * Created by ZeroInfinity on 1/6/2017.
 */


import {Component} from "@angular/core";
import {Router, Route, ActivatedRoute} from "@angular/router";
import {LoggerService} from "../../shared/services/logger/logger.service";
import {TitanUserService} from "../../shared/services/titanuser.service";
import {ITenantViewModel} from "../../shared/services/definitions/tenantDefinitions/ITenantViewModel";
import {IUserTenantDBViewModel} from "../../shared/services/definitions/titanUserDefinitions/IUserTenantDBViewModel";
import {DropdownModule, SelectItem} from 'primeng/primeng';

@Component({
    selector: 'auth-body',
    templateUrl: 'app/body/Auth/login.component.html'
})

export class LoginComponent {
    // user Information variables passed on
    id: string;
    url: string;
    email: string;

    //local variables to be used
    allowedTenantsList: ITenantViewModel[] = [];
    tenantListItems: SelectItem[] = [];
    selectedTenant: string;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private ls: LoggerService,
                private titanUserService: TitanUserService) {
    }

    ngOnInit() {
        this.activatedRoute
            .params
            .subscribe(params => this.id = params['id']);

        this.activatedRoute
            .queryParams
            .subscribe(params => {
                this.url = params['returnUrl'];
                this.email = params['email'];
            });

        this.titanUserService.getAllowedTenantsList(this.id)
            .subscribe(res => {
                this.allowedTenantsList = res.result;
                this.tenantListItems = this.allowedTenantsList
                    .map(tenant => {
                        return {label: tenant.name, value: tenant.id};
                    });
            });

        this.ls.logConsole("User Id passed on --------", this.id);
        this.ls.logConsole("Url came from ------------", this.url);
        this.ls.logConsole("Email of the user --------", this.email);
    }

    setDefaultTenantId(item) {
        let defaultTenantViewModel: IUserTenantDBViewModel = {
            id: this.id,
            defaultTenantId: item.value
        };

        this.ls.logConsole("DefaultTenantViewModel to save ----------", defaultTenantViewModel);
        // calling the service to set the default
        this.titanUserService.putSetDefaultTenantId(defaultTenantViewModel)
            .subscribe(res => {
                if (res.isSuccess) {
                    this.router.navigate([this.url]);
                }
            });
    }
}