import { FormBuildersComponent } from "./formBuilder.component";
import { RouterModule } from "@angular/router";

const routes = [
    {   path: '', component: FormBuildersComponent },
    {   path: 'add', loadChildren: 'app/body/Admin/FormBuilder/add/add.module'},
    {   path: 'details/:id', loadChildren: 'app/body/Admin/FormBuilder/details/details.module'}
];

export default RouterModule.forChild(routes);
