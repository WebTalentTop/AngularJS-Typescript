import { ProjectComponent } from "./project.component";
import { ProjectDetailsMainComponent } from "./DetailsMain/project-details-main.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: ProjectComponent },
    { path: 'detailsmain', loadChildren: 'app/body/Project/DetailsMain/project-details-main.module'}//, component: ProjectDetailsMainComponent} 
    //{ path: 'vehicle', loadChildren: 'app/body/Admin/Vehicle/vehicle.module' },    
];

export default RouterModule.forChild(routes);

// import { AdminComponent } from "./admin.component";
// import { RouterModule } from "@angular/router";

// const routes = [
//     {   path: '', component: AdminComponent },
//     { path: 'vehicle', loadChildren: 'app/body/Admin/Vehicle/vehicle.module' },
// ];

// export default RouterModule.forChild(routes);