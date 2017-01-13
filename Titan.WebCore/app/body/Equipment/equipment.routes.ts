import { EquipmentComponent } from "./equipment.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: EquipmentComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Equipment/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Equipment/Details/details.module'}
];

export default RouterModule.forChild(routes);