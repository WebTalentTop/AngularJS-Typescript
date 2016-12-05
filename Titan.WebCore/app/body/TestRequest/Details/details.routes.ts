import { DetailsComponent } from "./details.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: DetailsComponent }
];

export default RouterModule.forChild(routes);