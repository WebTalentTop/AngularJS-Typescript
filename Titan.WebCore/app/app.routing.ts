// import { ModuleWithProviders }  from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// // export const routes: Routes = [
// //   { path: '', redirectTo: 'department', pathMatch: 'full'},
// //   { path: 'project', loadChildren: 'app/body/body.module#CrisisModule' },
// //   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
// // ];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

import {RouterModule, CanActivate, Routes} from '@angular/router';
import {AuthService} from "./shared/services/auth/auth.service";
import {AuthComponent} from "./Auth/auth.component";
import {FakePageComponent} from "./fakepage/fakepage.component";
import {AuthGuard} from "./shared/services/auth/authGuard";

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/project',
        pathMatch: 'full'
    },
    {
        path: 'project',
        loadChildren: 'app/body/body.module'
    },

];


export default appRoutes;