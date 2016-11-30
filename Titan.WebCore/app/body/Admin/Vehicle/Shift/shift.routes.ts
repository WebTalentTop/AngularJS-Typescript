import { ShiftComponent } from './shift.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: ShiftComponent },
    { path: '', component: ShiftComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Shift/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Shift/Details/details.module'}
];

export default RouterModule.forChild(routes);