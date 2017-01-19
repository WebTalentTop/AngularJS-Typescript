"use strict";
/**
 * Created by ZeroInfinity on 12/26/2016.
 */
var add_component_1 = require("./add.component");
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: add_component_1.AddFormComponent },
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
