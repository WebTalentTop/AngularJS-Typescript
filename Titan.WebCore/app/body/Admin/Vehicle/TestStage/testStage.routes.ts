import { TestStageComponent } from './testStage.component';
import { RouterModule } from "@angular/router";

const routes = [
    { path: '/:page', component: TestStageComponent },
    { path: '', component: TestStageComponent },
    { path: 'add', loadChildren: 'app/body/Admin/Vehicle/TestStage/Add/add.module' },
    { path: 'details/:id', loadChildren: 'app/body/Admin/Vehicle/TestStage/Details/details.module'}
];

export default RouterModule.forChild(routes);