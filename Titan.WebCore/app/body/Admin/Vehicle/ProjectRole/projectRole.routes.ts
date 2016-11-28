import { ProjectRoleComponent } from './projectRole.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: ProjectRoleComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/ProjectRole/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/ProjectRole/Details/details.module'}
];

export default RouterModule.forChild(routes);