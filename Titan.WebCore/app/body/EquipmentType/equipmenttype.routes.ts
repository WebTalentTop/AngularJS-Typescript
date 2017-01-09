import { EquipmentTypeComponent } from "./equipmenttype.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: EquipmentTypeComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/EquipmentType/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/EquipmentType/Details/details.module'}
];

export default RouterModule.forChild(routes);
