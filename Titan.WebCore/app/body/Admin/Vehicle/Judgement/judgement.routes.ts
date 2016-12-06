import { JudgementComponent } from './judgement.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: JudgementComponent },
    { path: '', component: JudgementComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Judgement/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Judgement/Details/details.module'}
];

export default RouterModule.forChild(routes);