import { DetailsComponent } from "./details.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: DetailsComponent },
    { path: 'add', loadChildren: 'app/body/TestRequest/Sensor/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/TestRequest/Sensor/Details/detail.module' },
];

export default RouterModule.forChild(routes);