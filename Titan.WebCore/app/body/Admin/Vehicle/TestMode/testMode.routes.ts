import { TestModeComponent } from './testMode.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: TestModeComponent },
    { path: '', component: TestModeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TestMode/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/TestMode/Details/details.module'}
];

export default RouterModule.forChild(routes);