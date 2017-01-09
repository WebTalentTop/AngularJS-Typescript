import { AddComponent } from "./add.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: AddComponent }
   // { path: 'add/:id/:taskId', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/Sensor/add.module' },
   // { path: 'details/:id/:entityId', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/Sensor/Details/details.module' },
];

export default RouterModule.forChild(routes);