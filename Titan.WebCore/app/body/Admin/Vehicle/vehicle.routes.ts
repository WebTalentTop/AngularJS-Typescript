import { VehicleComponent} from './vehicle.component';
import { RouterModule } from "@angular/router";

const routes = [
    {   path: '', component: VehicleComponent },
    { path: 'buildLevels', loadChildren: 'app/body/Admin/Vehicle/BuildLevels/buildLevels.module' },
    { path: 'enginecode', loadChildren: 'app/body/Admin/Vehicle/EngineCode/enginecode.module' },
    { path: 'equipment', loadChildren: 'app/body/Admin/Vehicle/Equipment/equipment.module' },
    { path: 'framenumber', loadChildren: 'app/body/Admin/Vehicle/FrameNumber/framenumber.module' },
    { path: 'grade', loadChildren: 'app/body/Admin/Vehicle/Grade/grade.module' },
    { path: 'platform', loadChildren: 'app/body/Admin/Vehicle/Platform/platform.module' },
  ];

export default RouterModule.forChild(routes);
