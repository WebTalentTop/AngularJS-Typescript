import { EquipmentComponent } from './equipment.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: EquipmentComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Equipment/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/Equipment/Edit/edit.module' }
];

export default RouterModule.forChild(routes);