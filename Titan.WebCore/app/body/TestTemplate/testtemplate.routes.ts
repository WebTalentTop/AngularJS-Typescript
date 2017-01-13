import { TestTemplateComponent } from "./testtemplate.component";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    { path: '', component: TestTemplateComponent },
    { path: 'details/:id', canActivate: [AuthGuard], loadChildren: 'app/body/TestTemplate/Details/details.module'},
    { path: 'add', canActivate: [AuthGuard], loadChildren: 'app/body/TestTemplate/Add/add.module'}
];

export default RouterModule.forChild(routes);
