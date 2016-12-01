import { TestVerificationMethodComponent } from './testVerificationMethod.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: TestVerificationMethodComponent },
    { path: '', component: TestVerificationMethodComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TestVerificationMethod/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/TestVerificationMethod/Details/details.module'}
];

export default RouterModule.forChild(routes);