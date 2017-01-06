import { EquipmentTypeComponent } from "./equipmenttype.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: EquipmentTypeComponent },
    { path: 'add', loadChildren: 'app/body/EquipmentType/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/EquipmentType/Details/details.module'}
];

export default RouterModule.forChild(routes);
