/**
 * Created by ZeroInfinity on 12/27/2016.
 */
import { DetailsComponent } from './details.component';
import {RouterModule} from "@angular/router";

const route = [
    {   path:'', component: DetailsComponent}
];

export default RouterModule.forChild(route);