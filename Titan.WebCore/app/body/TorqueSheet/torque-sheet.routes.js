"use strict";
var torque_sheet_component_1 = require("./torque-sheet.component");
var router_1 = require("@angular/router");
var authGuard_1 = require("../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: torque_sheet_component_1.TorqueSheetComponent },
    { path: 'add/:torqueBookId/:landingFrom/:identifierId', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TorqueSheet/Add/add.module' },
    { path: 'details/:id/:torqueBookId/:landingFrom/:identifierId/:getCurrentVersionOrLatestVersion', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TorqueSheet/Details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
