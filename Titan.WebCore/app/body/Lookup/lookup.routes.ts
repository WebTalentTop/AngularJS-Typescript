import { LookupComponent } from "./lookup.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: LookupComponent }
];

export default RouterModule.forChild(routes);