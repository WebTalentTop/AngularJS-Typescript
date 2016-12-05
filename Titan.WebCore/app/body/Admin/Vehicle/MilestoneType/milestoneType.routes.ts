import { MilestoneTypeComponent } from './milestoneType.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: MilestoneTypeComponent },
    { path: '', component: MilestoneTypeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/MilestoneType/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/MilestoneType/Details/details.module'}
];

export default RouterModule.forChild(routes);