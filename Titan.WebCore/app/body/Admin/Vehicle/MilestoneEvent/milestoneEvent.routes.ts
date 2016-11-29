import { MilestoneEventComponent } from './milestoneEvent.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: MilestoneEventComponent },
    { path: '', component: MilestoneEventComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/MilestoneEvent/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/MilestoneEvent/Details/details.module'}
];

export default RouterModule.forChild(routes);