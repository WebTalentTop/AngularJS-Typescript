import { TestFacilitiesComponent } from "./testFacilities.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: TestFacilitiesComponent },
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/TestFacilities/Add/add.module' },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/TestFacilities/Details/details.module'}
];

export default RouterModule.forChild(routes);