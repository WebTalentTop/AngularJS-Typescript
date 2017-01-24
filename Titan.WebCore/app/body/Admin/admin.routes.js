"use strict";
var admin_component_1 = require("./admin.component");
var router_1 = require("@angular/router");
var authGuard_1 = require("../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: admin_component_1.AdminComponent },
    { path: 'vehicle', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/vehicle.module' },
    { path: 'formBuilders', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/FormBuilder/formBuilder.module' },
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
