import { ContactComponent } from './contact.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: ContactComponent },
    { path: '', component: ContactComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Contact/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Contact/Details/details.module'}
];

export default RouterModule.forChild(routes);