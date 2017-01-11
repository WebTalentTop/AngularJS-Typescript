import { UserComponent } from "./user.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: UserComponent },
    //{ path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/User/user.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/User/Details/details.module' }
  //  { path: 'testrequest/details/:testRequestId/add/:testrequestId/:taskId', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/Sensor/add.module' },
    //{ path: 'details/:taskId', canActivate: [AuthGuard], loadChildren: 'app/body/Task/Details/details.module' }
   
];

export default RouterModule.forChild(routes);