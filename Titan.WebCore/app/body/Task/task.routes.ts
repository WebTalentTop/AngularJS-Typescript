import { TaskComponent } from "./task.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TaskComponent },
    { path: 'testrequest/details/:testRequestId/add/:testRequestId', loadChildren: 'app/body/TestRequest/Sensor/add.module' }
   
];

export default RouterModule.forChild(routes);