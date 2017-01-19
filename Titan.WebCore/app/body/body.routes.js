"use strict";
var router_1 = require("@angular/router");
var authGuard_1 = require("../shared/services/auth/authGuard");
var login_component_1 = require("./Auth/login.component");
var routes = [
    { path: 'department', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/department/department.module' },
    { path: 'equipment', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/equipment/equipment.module' },
    { path: 'equipmenttype', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/equipmenttype/equipmenttype.module' },
    { path: 'project', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/project/project.module' },
    { path: 'admin', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/admin/admin.module' },
    { path: 'calendar', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/calendar/titancalendar.module' },
    { path: 'lookup', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/lookup/lookup.module' },
    { path: 'problemtracking', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/ProblemTracking/problemtracking.module' },
    { path: 'workrequest', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/WorkRequest/workrequest.module' },
    //{ path: 'testcatalog', canActivate: [AuthGuard], loadChildren: 'app/body/TestCatalog/testcatalog.module' },
    { path: 'testtempalte', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TestTemplate/testtemplate.module' },
    { path: 'testFacilities', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TestFacilities/testFacilities.module' },
    { path: 'step', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Step/step.module' },
    { path: 'procedure', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Procedure/procedure.module' },
    { path: 'testrequest', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TestRequest/testrequest.module' },
    { path: 'task', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Task/task.module' },
    { path: 'vehicle', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Vehicle/vehicle.module' },
    { path: 'torquesheet', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TorqueSheet/torque-sheet.module' },
    { path: 'testtemplate', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/TestTemplate/testtemplate.module' },
    { path: 'login/:id', component: login_component_1.LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
