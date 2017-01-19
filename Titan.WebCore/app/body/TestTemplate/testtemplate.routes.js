"use strict";
var testtemplate_component_1 = require("./testtemplate.component");
var router_1 = require("@angular/router");
var authGuard_1 = require("../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: testtemplate_component_1.TestTemplateComponent },
    { path: 'details/:id', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TestTemplate/Details/details.module' },
    { path: 'add', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TestTemplate/Add/add.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
