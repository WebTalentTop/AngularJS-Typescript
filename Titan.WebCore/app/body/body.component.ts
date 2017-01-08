import { Component } from '@angular/core';
import { TitanUserProfileService } from '../shared/services/titanUserProfile.service';
import {IUserProfile} from "../shared/services/definitions/IUserProfile";
@Component({
    selector: 'titan-body',
    templateUrl: 'app/body/body.component.html'
})
export class BodyComponent {
    currentUser:IUserProfile;

    constructor(private titanUserProfileService:TitanUserProfileService){
        this.titanUserProfileService.getCurrentUserProfile()
            .subscribe(res => {
                this.currentUser = res.result;
            })
    }
}
