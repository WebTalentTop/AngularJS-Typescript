import { CatalogComponent } from "./catalog.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: CatalogComponent }
];

export default RouterModule.forChild(routes);