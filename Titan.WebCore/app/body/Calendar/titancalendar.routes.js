"use strict";
var titancalendar_component_1 = require("./titancalendar.component");
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: titancalendar_component_1.TitanCalendarComponent }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
