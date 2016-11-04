import { EditComponent } from "./edit.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: EditComponent }
];

export default RouterModule.forChild(routes);