import { TestRequestComponent } from "./testrequest.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TestRequestComponent },
   // { path: 'add', loadChildren: 'app/body/TestRequest/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/TestRequest/Details/details.module' }
   // { path: 'sensor/:id', loadChildren: 'app/body/TestRequest/Sensor/Details/details.module' }
];

export default RouterModule.forChild(routes);