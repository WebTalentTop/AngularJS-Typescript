"use strict";
var framenumber_component_1 = require('./framenumber.component');
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: framenumber_component_1.FrameNumberComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/FrameNumber/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/FrameNumber/Edit/edit.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=framenumber.routes.js.map