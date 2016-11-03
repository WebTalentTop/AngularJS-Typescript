"use strict";
var market_component_1 = require('./market.component');
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: market_component_1.MarketComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Market/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/Market/Edit/edit.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=market.routes.js.map