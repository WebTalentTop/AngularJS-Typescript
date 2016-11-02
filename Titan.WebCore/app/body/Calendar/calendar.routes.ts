import { CalendarComponent } from "./calendar.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: CalendarComponent }
];

export default RouterModule.forChild(routes);