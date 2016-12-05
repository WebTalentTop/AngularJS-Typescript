import { MilestoneCategoryComponent } from './milestoneCategory.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: MilestoneCategoryComponent },
    { path: '', component: MilestoneCategoryComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/MilestoneCategory/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/MilestoneCategory/Details/details.module'}
];

export default RouterModule.forChild(routes);