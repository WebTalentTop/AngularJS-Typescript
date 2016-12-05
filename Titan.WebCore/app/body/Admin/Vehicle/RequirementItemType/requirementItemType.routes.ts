import { RequirementItemTypeComponent } from './requirementItemType.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: RequirementItemTypeComponent },
    { path: '', component: RequirementItemTypeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/RequirementItemType/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/RequirementItemType/Details/details.module'}
];

export default RouterModule.forChild(routes);