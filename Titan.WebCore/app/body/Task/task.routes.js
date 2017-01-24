"use strict";
var task_component_1 = require("./task.component");
var router_1 = require("@angular/router");
var authGuard_1 = require("../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: task_component_1.TaskComponent },
    { path: 'testrequest/details/:testRequestId/add/:testrequestId/:taskId', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TestRequest/Sensor/add.module' },
    { path: 'details/:taskId', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Task/Details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
