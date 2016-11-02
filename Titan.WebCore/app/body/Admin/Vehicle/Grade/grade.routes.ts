import { GradeComponent } from './grade.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: GradeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Grade/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/Grade/Edit/edit.module' }
];

export default RouterModule.forChild(routes);