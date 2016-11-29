import { MarketComponent } from './market.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: MarketComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/Market/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/Market/Details/details.module'}
];

export default RouterModule.forChild(routes);