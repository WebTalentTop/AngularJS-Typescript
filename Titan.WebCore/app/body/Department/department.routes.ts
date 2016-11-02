import { DepartmentComponent } from "./department.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: DepartmentComponent }
];

export default RouterModule.forChild(routes);