import { TestCatalogComponent } from "./testcatalog.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: TestCatalogComponent }
];

export default RouterModule.forChild(routes);