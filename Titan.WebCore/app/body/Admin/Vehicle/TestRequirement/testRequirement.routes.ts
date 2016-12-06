import { TestRequirementComponent } from './testRequirement.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: TestRequirementComponent },
    { path: '', component: TestRequirementComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TestRequirement/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/TestRequirement/Details/details.module'}
];

export default RouterModule.forChild(routes);