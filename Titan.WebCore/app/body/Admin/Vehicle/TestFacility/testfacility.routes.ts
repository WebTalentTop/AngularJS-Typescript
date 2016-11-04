import { TestFacilityComponent } from './testfacility.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TestFacilityComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TestFacility/Add/add.module' },
    { path: 'edit/:id', loadChildren: 'app/body/Admin/Vehicle/TestFacility/Edit/edit.module' }
];

export default RouterModule.forChild(routes);