import { EquipmentComponent } from './equipment.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: EquipmentComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Equipment/Add/add.module' },
    { path: 'edit/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Equipment/Edit/edit.module' }
];

export default RouterModule.forChild(routes);