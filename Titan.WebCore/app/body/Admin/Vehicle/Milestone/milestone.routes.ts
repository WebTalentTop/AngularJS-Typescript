import { MilestoneComponent } from './milestone.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: MilestoneComponent },
    { path: '', component: MilestoneComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Milestone/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Milestone/Details/details.module'}
];

export default RouterModule.forChild(routes);