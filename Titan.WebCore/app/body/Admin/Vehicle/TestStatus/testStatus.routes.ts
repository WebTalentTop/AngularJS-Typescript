import { TestStatusComponent } from './testStatus.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TestStatusComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TestStatus/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/TestStatus/Edit/edit.module' }
];

export default RouterModule.forChild(routes);