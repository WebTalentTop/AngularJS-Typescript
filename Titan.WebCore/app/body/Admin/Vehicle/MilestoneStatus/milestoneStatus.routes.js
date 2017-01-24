"use strict";
var milestoneStatus_component_1 = require('./milestoneStatus.component');
var router_1 = require("@angular/router");
var authGuard_1 = require("../../../../shared/services/auth/authGuard");
var routes = [
    { path: '/:page', component: milestoneStatus_component_1.MilestoneStatusComponent },
    { path: '', component: milestoneStatus_component_1.MilestoneStatusComponent },
    { path: 'add', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneStatus/Add/add.module' },
    { path: 'details/:id', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneStatus/Details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
