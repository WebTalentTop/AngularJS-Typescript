import { EquipmentTypeComponent } from './equipmenttype.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: EquipmentTypeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/EquipmentType/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/EquipmentType/Edit/edit.module' }
];

export default RouterModule.forChild(routes);