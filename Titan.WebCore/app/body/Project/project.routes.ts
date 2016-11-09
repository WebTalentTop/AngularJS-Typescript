import { ProjectComponent } from "./project.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: ProjectComponent },
    { path: 'detailsmain/:id', loadChildren: 'app/body/Project/DetailsMain/project-details-main.module'}

];

export default RouterModule.forChild(routes);
