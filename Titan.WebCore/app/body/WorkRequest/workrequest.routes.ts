import { WorkRequestComponent } from "./workrequest.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: WorkRequestComponent },
    { path: 'add', loadChildren: 'app/body/WorkRequest/Add/add.module' },
    { path: 'details/:id/:entityId', loadChildren: 'app/body/WorkRequest/Details/details.module' }
];

export default RouterModule.forChild(routes);