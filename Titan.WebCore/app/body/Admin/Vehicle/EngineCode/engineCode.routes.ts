import { EngineCodeComponent } from './enginecode.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: EngineCodeComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/EngineCode/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/EngineCode/Edit/edit.module' }
];

export default RouterModule.forChild(routes);