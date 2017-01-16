import { DetailsComponent } from "./details.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: DetailsComponent },
    { path: 'sensor/:id/:taskId', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/Sensor/add.module' },
    { path: 'parts/:id/:taskId', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/Parts/add.module' },
    { path: 'details/:id/:entityId', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/Sensor/Details/details.module' },
];

export default RouterModule.forChild(routes);