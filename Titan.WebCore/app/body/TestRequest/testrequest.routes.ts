import { TestRequestComponent } from "./testRequest.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: TestRequestComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/Details/details.module' }
   // { path: 'sensor/:id', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/Sensor/Details/details.module' }
];

export default RouterModule.forChild(routes);