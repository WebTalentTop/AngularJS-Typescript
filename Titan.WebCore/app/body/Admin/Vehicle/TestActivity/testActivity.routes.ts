import { TestActivityComponent } from './testActivity.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: TestActivityComponent },
    { path: '', component: TestActivityComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TestActivity/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/TestActivity/Details/details.module'}
];

export default RouterModule.forChild(routes);