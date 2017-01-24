"use strict";
var testcatalog_component_1 = require("./testcatalog.component");
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: testcatalog_component_1.TestCatalogComponent }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
