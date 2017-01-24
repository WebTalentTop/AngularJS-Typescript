"use strict";
var procedure_component_1 = require("./procedure.component");
var router_1 = require("@angular/router");
var authGuard_1 = require("../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: procedure_component_1.ProcedureComponent },
    { path: 'details/:id', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Procedure/Details/details.module' },
    { path: 'add', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Procedure/Add/add.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
