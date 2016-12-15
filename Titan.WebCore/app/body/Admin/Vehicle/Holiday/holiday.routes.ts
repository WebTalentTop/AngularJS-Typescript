import { HolidayComponent } from './holiday.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: HolidayComponent },
    { path: '', component: HolidayComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Holiday/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Holiday/Details/details.module'}
];

export default RouterModule.forChild(routes);