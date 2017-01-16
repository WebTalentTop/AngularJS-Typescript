import { TaskComponent } from "./task.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: TaskComponent },
    { path: 'testrequest/details/:testRequestId/sensor/:testrequestId/:taskId', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/Sensor/add.module' },
    { path: 'testrequest/details/:testRequestId/parts/:testrequestId/:taskId', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/Parts/add.module' },
    { path: 'details/:taskId', canActivate: [AuthGuard], loadChildren: 'app/body/Task/Details/details.module' }
   
];

export default RouterModule.forChild(routes);