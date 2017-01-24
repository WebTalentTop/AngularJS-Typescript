"use strict";
var operatingHours_component_1 = require('./operatingHours.component');
var router_1 = require("@angular/router");
var authGuard_1 = require("../../../../shared/services/auth/authGuard");
var routes = [
    { path: '/:page', component: operatingHours_component_1.OperatingHoursComponent },
    { path: '', component: operatingHours_component_1.OperatingHoursComponent },
    { path: 'add', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/OperatingHours/Add/add.module' },
    { path: 'details/:id', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/OperatingHours/Details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
