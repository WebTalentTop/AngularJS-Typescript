"use strict";
var buildlevels_component_1 = require('./buildlevels.component');
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: buildlevels_component_1.BuildLevelsComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/BuildLevels/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/BuildLevels/Edit/edit.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=buildlevels.routes.js.map