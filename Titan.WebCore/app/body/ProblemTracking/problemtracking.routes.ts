import { ProblemTrackingComponent } from "./problemtracking.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: ProblemTrackingComponent }
];

export default RouterModule.forChild(routes);