import { EquipmentComponent } from "./equipment.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: EquipmentComponent },
      { path: 'details/:id', loadChildren: 'app/body/Equipment/Details/details.module'}
];

export default RouterModule.forChild(routes);