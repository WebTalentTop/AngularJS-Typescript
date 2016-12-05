import { GradeComponent } from './grade.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: GradeComponent },
    { path: '', component: GradeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Grade/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Grade/Details/details.module'}
];

export default RouterModule.forChild(routes);