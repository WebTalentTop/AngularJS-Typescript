import { TestTemplateComponent } from "./testtemplate.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TestTemplateComponent },
    { path: 'details/:id', loadChildren: 'app/body/TestTemplate/Details/details.module'}
];

export default RouterModule.forChild(routes);