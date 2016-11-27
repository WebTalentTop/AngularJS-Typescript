import { ProjectStatusComponent } from './projectStatus.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: ProjectStatusComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/ProjectStatus/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/ProjectStatus/Details/details.module'}
];

export default RouterModule.forChild(routes);