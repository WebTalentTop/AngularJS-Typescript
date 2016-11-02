import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";

const routes = [
    {   path: '', component: AdminComponent },
    { path: 'vehicle', loadChildren: 'app/body/Admin/Vehicle/vehicle.module' },
];

export default RouterModule.forChild(routes);