"use strict";
var admin_component_1 = require("./admin.component");
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: admin_component_1.AdminComponent },
    { path: 'vehicle', loadChildren: 'app/body/Admin/Vehicle/vehicle.module' },
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=admin.routes.js.map