import { BuildLevelsComponent } from './buildlevels.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: BuildLevelsComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/BuildLevels/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/BuildLevels/Edit/edit.module' }
];

export default RouterModule.forChild(routes);