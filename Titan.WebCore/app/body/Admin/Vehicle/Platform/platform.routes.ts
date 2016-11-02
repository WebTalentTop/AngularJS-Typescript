import { PlatformComponent } from './platform.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: PlatformComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Platform/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/Platform/Edit/edit.module' }
];

export default RouterModule.forChild(routes);