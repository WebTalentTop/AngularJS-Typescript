"use strict";
var vehicle_component_1 = require('./vehicle.component');
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: vehicle_component_1.VehicleComponent },
    { path: 'buildLevels', loadChildren: 'app/body/Admin/Vehicle/BuildLevels/buildLevels.module' },
    { path: 'enginecode', loadChildren: 'app/body/Admin/Vehicle/EngineCode/enginecode.module' },
    { path: 'framenumber', loadChildren: 'app/body/Admin/Vehicle/FrameNumber/framenumber.module' },
    { path: 'grade', loadChildren: 'app/body/Admin/Vehicle/Grade/grade.module' },
    { path: 'platform', loadChildren: 'app/body/Admin/Vehicle/Platform/platform.module' },
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=vehicle.routes.js.map