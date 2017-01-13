import { ProjectComponent } from "./project.component";
import { ProjectDetailsMainComponent } from "./DetailsMain/project-details-main.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: ProjectComponent },
    { path: 'detailsmain/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Project/DetailsMain/project-details-main.module'}
    //{ path: 'detailsmain/:id', component: ProjectDetailsMainComponent }
];

export default RouterModule.forChild(routes);
