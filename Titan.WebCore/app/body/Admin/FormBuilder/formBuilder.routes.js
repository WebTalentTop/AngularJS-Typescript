"use strict";
var formBuilder_component_1 = require("./formBuilder.component");
var router_1 = require("@angular/router");
var authGuard_1 = require("../../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: formBuilder_component_1.FormBuildersComponent },
    { path: 'add', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/FormBuilder/add/add.module' },
    { path: 'details/:id', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/FormBuilder/details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
