"use strict";
var platform_component_1 = require('./platform.component');
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: platform_component_1.PlatformComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Platform/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/Platform/Edit/edit.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=platform.routes.js.map