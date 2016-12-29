import { TaskComponent } from "./task.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TaskComponent },
    { path: 'testrequest/details/:testRequestId/add/:testrequestId/:taskId', loadChildren: 'app/body/TestRequest/Sensor/add.module' },
    { path: 'details/:taskId', loadChildren: 'app/body/Task/Details/details.module' }
   
];

export default RouterModule.forChild(routes);