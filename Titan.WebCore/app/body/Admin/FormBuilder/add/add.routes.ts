/**
 * Created by ZeroInfinity on 12/26/2016.
 */
import { AddFormComponent } from "./add.component";
import { RouterModule } from "@angular/router";

const routes = [
    {   path: '', component: AddFormComponent },
];

export default RouterModule.forChild(routes);
