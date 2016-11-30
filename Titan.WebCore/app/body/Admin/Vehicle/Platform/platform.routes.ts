import { PlatformComponent } from './platform.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: PlatformComponent },
    { path: '', component: PlatformComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Platform/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Platform/Details/details.module'}
];

export default RouterModule.forChild(routes);