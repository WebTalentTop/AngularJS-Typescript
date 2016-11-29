import { BuildLevelComponent } from './buildLevel.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: BuildLevelComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/BuildLevels/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/BuildLevels/Details/details.module'}
];

export default RouterModule.forChild(routes);