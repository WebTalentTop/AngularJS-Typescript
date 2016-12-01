import { TestStatusComponent } from './testStatus.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: TestStatusComponent },
    { path: '', component: TestStatusComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TestStatus/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/TestStatus/Details/details.module'}
];

export default RouterModule.forChild(routes);