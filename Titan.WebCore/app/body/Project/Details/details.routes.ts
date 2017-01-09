import { DetailsComponent } from "./details.component";
import { RouterModule } from "@angular/router";

const routes = [
    //{ path: '', component: DetailsComponent },
    //{ path: 'details', canActivate: [AuthGuard], loadChildren: 'app/body/Project/Details/details.module'}
];

export default RouterModule.forChild(routes);