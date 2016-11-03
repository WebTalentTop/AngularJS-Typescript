"use strict";
var grade_component_1 = require('./grade.component');
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: grade_component_1.GradeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Grade/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/Grade/Edit/edit.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=grade.routes.js.map