"use strict";
var equipment_component_1 = require("./equipment.component");
var router_1 = require("@angular/router");
var authGuard_1 = require("../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: equipment_component_1.EquipmentComponent },
    { path: 'add', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Equipment/Add/add.module' },
    { path: 'details/:id', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Equipment/Details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
