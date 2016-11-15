import { VerificationMethodComponent } from './verificationmethod.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: VerificationMethodComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/VerificationMethod/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/VerificationMethod/Edit/edit.module' }
];

export default RouterModule.forChild(routes);