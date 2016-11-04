"use strict";
var equipment_component_1 = require('./equipment.component');
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: equipment_component_1.EquipmentComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Equipment/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/Equipment/Edit/edit.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=equipment.routes.js.map