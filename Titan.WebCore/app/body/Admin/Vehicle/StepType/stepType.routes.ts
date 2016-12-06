import { StepTypeComponent } from './stepType.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: StepTypeComponent },
    { path: '', component: StepTypeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/StepType/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/StepType/Details/details.module'}
];

export default RouterModule.forChild(routes);