import { EntityFieldComponent } from './entityField.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: EntityFieldComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/EntityField/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/EntityField/Details/details.module'}
];

export default RouterModule.forChild(routes);