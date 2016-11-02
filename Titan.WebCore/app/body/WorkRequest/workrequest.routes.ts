import { WorkRequestComponent } from "./workrequest.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: WorkRequestComponent }
];

export default RouterModule.forChild(routes);