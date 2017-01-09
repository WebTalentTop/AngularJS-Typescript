import { MarketComponent } from './market.component';
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../../shared/services/auth/authGuard";

const routes = [
    { path: '/:page', component: MarketComponent },
    { path: '', component: MarketComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Market/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Market/Details/details.module'}
];

export default RouterModule.forChild(routes);