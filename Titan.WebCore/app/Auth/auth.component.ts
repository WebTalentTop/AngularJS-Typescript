/**
 * Created by ZeroInfinity on 1/6/2017.
 */


import {Component} from "@angular/core";

@Component({
    selector: 'auth-body',
    template: `
    <div class="auth-login">
    <h1>You need to login</h1>
    <router-outlet></router-outlet>
</div>    
`
})

export class AuthComponent {

}