import { Component } from '@angular/core';
import { TitanUserProfileService } from '../shared/services/titanUserProfile.service';
import {IUserProfile} from "../shared/services/definitions/IUserProfile";
import {Router} from "@angular/router";

@Component({
    selector: 'titan-body',
    templateUrl: 'app/body/body.component.html'
})
export class BodyComponent {
    currentUser:IUserProfile;

    constructor(private router:Router){
        this.router.navigate(['login']);
    }
}
