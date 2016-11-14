import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import adminRoutes from "./admin.routes";

@NgModule({
    imports: [CommonModule, adminRoutes],
    declarations: [AdminComponent]
})

export default class AdminModule{}