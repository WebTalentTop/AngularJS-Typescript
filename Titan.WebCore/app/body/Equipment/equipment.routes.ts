import { EquipmentComponent } from "./equipment.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: EquipmentComponent },
    { path: 'add', loadChildren: 'app/body/Equipment/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Equipment/Details/details.module'}
];

export default RouterModule.forChild(routes);