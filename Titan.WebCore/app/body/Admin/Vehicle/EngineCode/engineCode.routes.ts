import { EngineCodeComponent } from './engineCode.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: EngineCodeComponent },
    { path: '', component: EngineCodeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/EngineCode/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/EngineCode/Details/details.module'}
];

export default RouterModule.forChild(routes);