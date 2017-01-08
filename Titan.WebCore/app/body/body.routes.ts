
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../shared/services/auth/authGuard";
import {LoginComponent} from "./Auth/login.component";


const routes = [
    { path: 'department', loadChildren: 'app/body/department/department.module' },
    { path: 'equipment', loadChildren: 'app/body/equipment/equipment.module' },
    { path: 'equipmenttype', loadChildren: 'app/body/equipmenttype/equipmenttype.module' },

    { path: 'project', canActivate:[AuthGuard], loadChildren: 'app/body/project/project.module' },
    { path: 'admin', loadChildren: 'app/body/admin/admin.module' },
    { path: 'calendar', loadChildren: 'app/body/calendar/titancalendar.module' },
    { path: 'lookup', loadChildren: 'app/body/lookup/lookup.module' },
    { path: 'problemtracking', loadChildren: 'app/body/ProblemTracking/problemtracking.module' },
    { path: 'workrequest', loadChildren: 'app/body/WorkRequest/workrequest.module' },
    //{ path: 'testcatalog', loadChildren: 'app/body/TestCatalog/testcatalog.module' },
    { path: 'testtempalte', loadChildren: 'app/body/TestTemplate/testtemplate.module' },
    { path: 'testFacilities', loadChildren: 'app/body/TestFacilities/testFacilities.module' },
    { path: 'step', loadChildren: 'app/body/Step/step.module' },
    { path: 'procedure', loadChildren: 'app/body/Procedure/procedure.module' },
    { path: 'testrequest', loadChildren: 'app/body/TestRequest/testrequest.module' },
    { path: 'task', loadChildren: 'app/body/Task/task.module' },
    { path: 'vehicle', loadChildren: 'app/body/Vehicle/vehicle.module' },
    { path: 'torquesheet', loadChildren: 'app/body/TorqueSheet/torque-sheet.module' },
    { path: 'testtemplate', loadChildren: 'app/body/TestTemplate/testtemplate.module' },
    { path: 'login', component: LoginComponent},
    //, canActivate:[AuthGuard], },
];

export default RouterModule.forChild(routes);