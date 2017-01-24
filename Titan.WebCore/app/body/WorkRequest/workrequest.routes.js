"use strict";
var workrequest_component_1 = require("./workrequest.component");
var router_1 = require("@angular/router");
var authGuard_1 = require("../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: workrequest_component_1.WorkRequestComponent },
    { path: 'add', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/WorkRequest/Add/add.module' },
    { path: 'details/:id/:entityId', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/WorkRequest/Details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
