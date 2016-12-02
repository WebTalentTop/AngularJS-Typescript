import { TestRequestComponent } from "./testrequest.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TestRequestComponent },
    //{ path: 'add', loadChildren: 'app/body/TestRequest/Details/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/TestRequest/Details/details.module' }
];

export default RouterModule.forChild(routes);