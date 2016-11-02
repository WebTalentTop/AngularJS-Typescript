import { ProjectComponent } from "./project.component";
import { ProjectDetailMainComponent } from "./DetailsMain/project-detail-main.component";
// import { NgModule }     from '@angular/core';
// import { RouterModule } from '@angular/router';

// @NgModule({
//   imports: [
//     RouterModule.forChild([
//       { path: 'details/:projectId', component: ProjectDetailComponent }
//     ])
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class ProjectRoutingModule { }


// import { DepartmentComponent } from "./department.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: ProjectComponent },
    { path: 'project/details', component: ProjectDetailMainComponent  }
];

export default RouterModule.forChild(routes);