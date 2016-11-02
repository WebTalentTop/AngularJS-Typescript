import { ProjectDetailMainComponent } from "./project-detail-main.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: ProjectDetailMainComponent },
    { path: 'details', loadChildren: 'app/body/Project/Details/details.module'}
];

export default RouterModule.forChild(routes);