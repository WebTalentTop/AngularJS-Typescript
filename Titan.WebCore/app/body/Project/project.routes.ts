import { ProjectComponent } from "./project.component";
import { ProjectDetailsMainComponent } from "./DetailsMain/project-details-main.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: ProjectComponent },
    { path: 'detailsmain', loadChildren: 'app/body/Project/DetailsMain/project-details-main.module'}
];

export default RouterModule.forChild(routes);
