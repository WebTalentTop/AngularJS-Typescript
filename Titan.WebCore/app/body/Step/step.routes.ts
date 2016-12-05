import { StepComponent } from "./step.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: StepComponent },
    { path: 'add', loadChildren: 'app/body/Step/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Step/Details/details.module'}
];

export default RouterModule.forChild(routes);