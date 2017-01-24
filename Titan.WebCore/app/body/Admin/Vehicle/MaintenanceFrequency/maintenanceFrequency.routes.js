"use strict";
var maintenanceFrequency_component_1 = require('./maintenanceFrequency.component');
var router_1 = require("@angular/router");
var authGuard_1 = require("../../../../shared/services/auth/authGuard");
var routes = [
    { path: '/:page', component: maintenanceFrequency_component_1.MaintenanceFrequencyComponent },
    { path: '', component: maintenanceFrequency_component_1.MaintenanceFrequencyComponent },
    { path: 'add', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MaintenanceFrequency/Add/add.module' },
    { path: 'details/:id', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MaintenanceFrequency/Details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
