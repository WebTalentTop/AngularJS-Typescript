import { DetailsComponent } from "./details.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: DetailsComponent },
    { path: 'testrequest/details/:id',  loadChildren: 'app/body/TestRequest/Details/details.module' }
];

export default RouterModule.forChild(routes);