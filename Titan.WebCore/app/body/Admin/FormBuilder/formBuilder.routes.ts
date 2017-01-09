import { FormBuildersComponent } from "./formBuilder.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../../shared/services/auth/authGuard";

const routes = [
    {   path: '', component: FormBuildersComponent },
    {   path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/FormBuilder/add/add.module'},
    {   path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/FormBuilder/details/details.module'}
];

export default RouterModule.forChild(routes);
