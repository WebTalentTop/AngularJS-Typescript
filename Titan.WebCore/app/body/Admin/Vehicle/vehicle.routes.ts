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
    //{ path: 'framenumber', loadChildren: 'app/body/Admin/Vehicle/FrameNumber/framenumber.module' },
    //{ path: 'grade', loadChildren: 'app/body/Admin/Vehicle/Grade/grade.module' },
    //{ path: 'enginecode', loadChildren: 'app/body/Admin/Vehicle/EngineCode/enginecode.module' },

  ];

export default RouterModule.forChild(routes);
