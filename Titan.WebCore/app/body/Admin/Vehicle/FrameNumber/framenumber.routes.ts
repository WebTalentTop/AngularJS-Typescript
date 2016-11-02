import { FrameNumberComponent } from './framenumber.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: FrameNumberComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/FrameNumber/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/FrameNumber/Edit/edit.module' }
];

export default RouterModule.forChild(routes);