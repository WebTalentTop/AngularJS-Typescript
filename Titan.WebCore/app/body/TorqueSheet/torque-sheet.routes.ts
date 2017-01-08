import { TorqueSheetComponent } from "./torque-sheet.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TorqueSheetComponent },
    { path: 'add/:torqueBookId/:landingFrom/:identifierId', loadChildren: 'app/body/TorqueSheet/Add/add.module' },
    { path: 'details/:id/:torqueBookId/:landingFrom/:identifierId/:getCurrentVersionOrLatestVersion', loadChildren: 'app/body/TorqueSheet/Details/details.module'}
];

export default RouterModule.forChild(routes);