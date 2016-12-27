import { StepComponent } from './step.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: StepComponent },
    { path: '', component: StepComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Step/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Step/Details/details.module'}
];

export default RouterModule.forChild(routes);