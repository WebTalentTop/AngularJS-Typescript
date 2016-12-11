import { ProcedureComponent } from "./procedure.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: ProcedureComponent },
    { path: 'details/:id', loadChildren: 'app/body/Procedure/Details/details.module'},
    { path: 'add', loadChildren: 'app/body/Procedure/Add/add.module'}
];

export default RouterModule.forChild(routes);
