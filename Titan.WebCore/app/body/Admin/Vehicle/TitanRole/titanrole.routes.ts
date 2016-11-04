import { TitanRoleComponent } from './titanrole.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TitanRoleComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TitanRole/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/TitanRole/Edit/edit.module' }
];

export default RouterModule.forChild(routes);