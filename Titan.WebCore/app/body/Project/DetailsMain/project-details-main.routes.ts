import { ProjectDetailsMainComponent } from "./project-details-main.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: ProjectDetailsMainComponent },
    //{ path: 'details', loadChildren: 'app/body/Project/Details/details.module'}
];

export default RouterModule.forChild(routes);