import { EquipmentTypeComponent } from './equipmenttype.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: EquipmentTypeComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/EquipmentType/Add/add.module' },
    { path: 'edit/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/EquipmentType/Edit/edit.module' }
];

export default RouterModule.forChild(routes);