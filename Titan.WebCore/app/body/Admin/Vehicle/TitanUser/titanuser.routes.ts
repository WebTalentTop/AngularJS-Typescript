import { TitanUserComponent } from './titanuser.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TitanUserComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TitanUser/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/TitanUser/Edit/edit.module' }
];

export default RouterModule.forChild(routes);