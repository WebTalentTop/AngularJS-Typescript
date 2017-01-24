"use strict";
var tenant_component_1 = require('./tenant.component');
var router_1 = require("@angular/router");
var authGuard_1 = require("../../../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: tenant_component_1.TenantComponent },
    { path: 'add', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Tenant/Add/add.module' },
    { path: 'edit/:id', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Tenant/Edit/edit.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
