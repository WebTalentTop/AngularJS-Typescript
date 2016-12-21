import { TitanCalendarComponent } from "./titancalendar.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TitanCalendarComponent }
];

export default RouterModule.forChild(routes);