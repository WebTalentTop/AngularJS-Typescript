import { TestRequestComponent } from "./testrequest.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TestRequestComponent }
];

export default RouterModule.forChild(routes);