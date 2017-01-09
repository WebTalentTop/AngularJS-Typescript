import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    {   path: '', component: AdminComponent },
    {   path: 'vehicle', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/vehicle.module' },
    {   path: 'formBuilders', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/FormBuilder/formBuilder.module' },
];

export default RouterModule.forChild(routes);