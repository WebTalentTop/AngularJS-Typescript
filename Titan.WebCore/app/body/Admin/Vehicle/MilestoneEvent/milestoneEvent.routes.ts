import { MilestoneEventComponent } from './milestoneEvent.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: MilestoneEventComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/MilestoneEvent/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/MilestoneEvent/Edit/edit.module' }
];

export default RouterModule.forChild(routes);