import { VehicleComponent} from './vehicle.component';
import { RouterModule } from "@angular/router";

const routes = [
    {   path: '', component: VehicleComponent },
    { path: 'buildLevel', loadChildren: 'app/body/Admin/Vehicle/BuildLevels/buildLevel.module' },
    { path: 'equipment', loadChildren: 'app/body/Admin/Vehicle/Equipment/equipment.module' },
    { path: 'equipmenttype', loadChildren: 'app/body/Admin/Vehicle/EquipmentType/equipmenttype.module' },
    { path: 'titanRole', loadChildren: 'app/body/Admin/Vehicle/TitanRole/titanRole.module' },
    { path: 'platform', loadChildren: 'app/body/Admin/Vehicle/Platform/platform.module' },
    { path: 'titanUser', loadChildren: 'app/body/Admin/Vehicle/TitanUser/titanUser.module' },
    { path: 'market', loadChildren: 'app/body/Admin/Vehicle/Market/market.module' },
    { path: 'project', loadChildren: 'app/body/Admin/Vehicle/Project/project.module' },
    { path: 'tenant', loadChildren: 'app/body/Admin/Vehicle/Tenant/tenant.module' },
    { path: 'testfacility', loadChildren: 'app/body/Admin/Vehicle/TestFacility/testfacility.module' },
    { path: 'testverificationMethod', loadChildren: 'app/body/Admin/Vehicle/VerificationMethod/testverificationMethod.module' },
    { path: 'testStatus', loadChildren: 'app/body/Admin/Vehicle/TestStatus/testStatus.module' },
    { path: 'milestoneEvent', loadChildren: 'app/body/Admin/Vehicle/MilestoneEvent/milestoneEvent.module' },
    { path: 'milestoneStatus', loadChildren: 'app/body/Admin/Vehicle/MilestoneStatus/milestoneStatus.module' },
    { path: 'permission', loadChildren: 'app/body/Admin/Vehicle/Permission/permission.module' },
    { path: 'projectStatus', loadChildren: 'app/body/Admin/Vehicle/ProjectStatus/projectStatus.module' },
    { path: 'projectRole', loadChildren: 'app/body/Admin/Vehicle/ProjectRole/projectRole.module' },
    { path: 'schedule', loadChildren: 'app/body/Admin/Vehicle/schedule/schedule.module' },
    { path: 'shift', loadChildren: 'app/body/Admin/Vehicle/Shift/shift.module' },
    { path: 'downTimeReason', loadChildren: 'app/body/Admin/Vehicle/DownTimeReason/downTimeReason.module' },
   { path: 'entityField', loadChildren: 'app/body/Admin/Vehicle/EntityField/entityField.module' },
  ];

export default RouterModule.forChild(routes);
