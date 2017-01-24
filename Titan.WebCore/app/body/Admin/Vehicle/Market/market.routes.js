"use strict";
var market_component_1 = require('./market.component');
var router_1 = require("@angular/router");
var authGuard_1 = require("../../../../shared/services/auth/authGuard");
var routes = [
    { path: '/:page', component: market_component_1.MarketComponent },
    { path: '', component: market_component_1.MarketComponent },
    { path: 'add', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Market/Add/add.module' },
    { path: 'details/:id', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Market/Details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
