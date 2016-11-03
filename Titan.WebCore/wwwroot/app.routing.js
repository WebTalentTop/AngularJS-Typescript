// import { ModuleWithProviders }  from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
"use strict";
// // export const routes: Routes = [
// //   { path: '', redirectTo: 'department', pathMatch: 'full'},
// //   { path: 'project', loadChildren: 'app/body/body.module#CrisisModule' },
// //   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
// // ];
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
var router_1 = require('@angular/router');
var appRoutes = [
    {
        path: '',
        loadChildren: 'app/body/body.module'
    },
    //  ,
    //{
    //    path: 'equipment',
    //    loadChildren: 'app/body/equipment/equipment.module'
    //},
    //{
    //  path: 'project',
    //  loadChildren: "app/body/project/project.module"
    //},
    {
        path: '',
        redirectTo: '/project',
        pathMatch: 'full'
    }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map