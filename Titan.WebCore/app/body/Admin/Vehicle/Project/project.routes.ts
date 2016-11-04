import { ProjectComponent } from './project.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: ProjectComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Project/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/Project/Edit/edit.module' }
];

export default RouterModule.forChild(routes);