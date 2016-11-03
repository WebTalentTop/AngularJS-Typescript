"use strict";
var project_component_1 = require("./project.component");
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: project_component_1.ProjectComponent },
    { path: 'detailsmain', loadChildren: 'app/body/Project/DetailsMain/project-details-main.module' } //, component: ProjectDetailsMainComponent} 
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
// import { AdminComponent } from "./admin.component";
// import { RouterModule } from "@angular/router";
// const routes = [
//     {   path: '', component: AdminComponent },
//     { path: 'vehicle', loadChildren: 'app/body/Admin/Vehicle/vehicle.module' },
// ];
// export default RouterModule.forChild(routes); 
//# sourceMappingURL=project.routes.js.map