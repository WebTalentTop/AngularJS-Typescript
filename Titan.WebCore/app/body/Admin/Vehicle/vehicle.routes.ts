import { VehicleComponent} from './vehicle.component';
import { RouterModule } from "@angular/router";

const routes = [
    {   path: '', component: VehicleComponent },
    { path: 'buildLevels', loadChildren: 'app/body/Admin/Vehicle/BuildLevels/buildLevels.module' },
    { path: 'equipment', loadChildren: 'app/body/Admin/Vehicle/Equipment/equipment.module' },
    { path: 'equipmenttype', loadChildren: 'app/body/Admin/Vehicle/EquipmentType/equipmenttype.module' },
    { path: 'titanrole', loadChildren: 'app/body/Admin/Vehicle/TitanRole/titanrole.module' },
    { path: 'platform', loadChildren: 'app/body/Admin/Vehicle/Platform/platform.module' },
    { path: 'titanuser', loadChildren: 'app/body/Admin/Vehicle/TitanUser/titanuser.module' },
    { path: 'market', loadChildren: 'app/body/Admin/Vehicle/Market/market.module' },
    { path: 'project', loadChildren: 'app/body/Admin/Vehicle/Project/project.module' },
    { path: 'tenant', loadChildren: 'app/body/Admin/Vehicle/Tenant/tenant.module' },
    { path: 'testfacility', loadChildren: 'app/body/Admin/Vehicle/TestFacility/testfacility.module' },
    { path: 'testverificationMethod', loadChildren: 'app/body/Admin/Vehicle/VerificationMethod/testverificationMethod.module' },
    { path: 'testStatus', loadChildren: 'app/body/Admin/Vehicle/TestStatus/testStatus.module' },
  ];

export default RouterModule.forChild(routes);
