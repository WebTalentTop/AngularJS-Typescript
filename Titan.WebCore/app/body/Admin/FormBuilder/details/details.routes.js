"use strict";
/**
 * Created by ZeroInfinity on 12/27/2016.
 */
var details_component_1 = require('./details.component');
var router_1 = require("@angular/router");
var route = [
    { path: '', component: details_component_1.DetailsComponent }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(route);
