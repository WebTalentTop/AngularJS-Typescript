"use strict";
var details_component_1 = require("./details.component");
var router_1 = require("@angular/router");
var authGuard_1 = require("../../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: details_component_1.DetailsComponent },
    { path: 'add/:id/:taskId', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TestRequest/Sensor/add.module' },
    { path: 'details/:id/:entityId', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TestRequest/Sensor/Details/details.module' },
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
