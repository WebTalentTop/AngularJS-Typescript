
import { RouterModule } from "@angular/router";


const routes = [
    { path: 'department', loadChildren: 'app/body/department/department.module' },
    { path: 'equipment', loadChildren: 'app/body/equipment/equipment.module' },
    { path: 'project', loadChildren: 'app/body/project/project.module' },
    { path: 'admin', loadChildren: 'app/body/admin/admin.module' },
    { path: 'calendar', loadChildren: 'app/body/calendar/calendar.module' },
    { path: 'lookup', loadChildren: 'app/body/lookup/lookup.module' },
    { path: 'problemtracking', loadChildren: 'app/body/ProblemTracking/problemtracking.module' },
    { path: 'workrequest', loadChildren: 'app/body/WorkRequest/workrequest.module' },
    { path: 'testcatalog', loadChildren: 'app/body/TestCatalog/testcatalog.module' },
    { path: 'testfacilities', loadChildren: 'app/body/TestFacilities/testfacilities.module' },
    { path: 'testrequest', loadChildren: 'app/body/TestRequest/testrequest.module' },
    { path: 'vehicle', loadChildren: 'app/body/Vehicle/vehicle.module' }
];

export default RouterModule.forChild(routes);