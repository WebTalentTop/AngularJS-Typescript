import { DetailsComponent } from "./details.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: DetailsComponent },
    { path: 'details/:id',  loadChildren: 'app/body/TestRequest/Sensor/Details/details.module' }
];

export default RouterModule.forChild(routes);