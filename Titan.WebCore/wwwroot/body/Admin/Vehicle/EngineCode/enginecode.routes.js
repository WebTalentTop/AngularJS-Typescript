"use strict";
var enginecode_component_1 = require('./enginecode.component');
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: enginecode_component_1.EngineCodeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/EngineCode/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/EngineCode/Edit/edit.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=enginecode.routes.js.map