﻿import { TestFacilitiesComponent } from "./testfacilities.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TestFacilitiesComponent },
    { path: 'details/:id', loadChildren: 'app/body/TestFacilities/Details/details.module'}
];

export default RouterModule.forChild(routes);