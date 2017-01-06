import { AddComponent } from "./add.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: AddComponent }
];

export default RouterModule.forChild(routes);
