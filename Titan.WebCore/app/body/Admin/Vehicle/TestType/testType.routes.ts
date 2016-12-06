import { TestTypeComponent } from './testType.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: TestTypeComponent },
    { path: '', component: TestTypeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TestType/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/TestType/Details/details.module'}
];

export default RouterModule.forChild(routes);