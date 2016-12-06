import { StepFrequencyComponent } from './stepFrequency.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: StepFrequencyComponent },
    { path: '', component: StepFrequencyComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/StepFrequency/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/StepFrequency/Details/details.module'}
];

export default RouterModule.forChild(routes);