"use strict";
var testrequest_component_1 = require("./testrequest.component");
var router_1 = require("@angular/router");
var authGuard_1 = require("../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: testrequest_component_1.TestRequestComponent },
    { path: 'add', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TestRequest/Add/add.module' },
    { path: 'details/:id', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TestRequest/Details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
