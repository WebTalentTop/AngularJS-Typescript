import { MilestoneStatusComponent } from './milestoneStatus.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: MilestoneStatusComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/MilestoneStatus/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/MilestoneStatus/Details/details.module'}
];

export default RouterModule.forChild(routes);
