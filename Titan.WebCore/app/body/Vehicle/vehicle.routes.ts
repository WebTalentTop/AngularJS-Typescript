import { VehicleComponent } from "./vehicle.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: VehicleComponent }
];

export default RouterModule.forChild(routes);