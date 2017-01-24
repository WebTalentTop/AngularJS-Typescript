"use strict";
var project_component_1 = require("./project.component");
var router_1 = require("@angular/router");
var authGuard_1 = require("../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: project_component_1.ProjectComponent },
    { path: 'detailsmain/:id', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Project/DetailsMain/project-details-main.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
