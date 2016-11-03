"use strict";
var testfacilities_component_1 = require("./testfacilities.component");
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: testfacilities_component_1.TestFacilitiesComponent },
    { path: 'details', loadChildren: 'app/body/TestFacilities/Details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=testfacilities.routes.js.map