"use strict";
var details_component_1 = require("./details.component");
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: details_component_1.DetailsComponent },
    { path: 'details/:id', loadChildren: 'app/body/TestRequest/Sensor/Details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
