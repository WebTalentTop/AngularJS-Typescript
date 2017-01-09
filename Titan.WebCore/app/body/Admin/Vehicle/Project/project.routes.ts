import { ProjectComponent } from './project.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: ProjectComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Project/Add/add.module' },
    { path: 'edit/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Project/Edit/edit.module' }
];

export default RouterModule.forChild(routes);