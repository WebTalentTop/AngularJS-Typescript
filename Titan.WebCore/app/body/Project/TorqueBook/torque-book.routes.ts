import { TorqueBookComponent } from "./torque-book.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TorqueBookComponent },
    //{ path: 'details', loadChildren: 'app/body/Project/Details/details.module'}
];

export default RouterModule.forChild(routes); 