import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestFacilitiesComponent } from "./testFacilities.component";
import { DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, MessagesModule, 
        DropdownModule, ButtonModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { TestFacilityService } from '../../shared/services/testfacility.service';
import { GridModule} from '../../shared/UIComponents/GridComponent/grid.module';
import testFacilitiesRoutes from "./testFacilities.routes";
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';

@NgModule({
    imports: [CommonModule, RouterModule, DataTableModule, BreadcrumbModule,InputTextModule, DropdownModule, 
        MessagesModule, InputTextareaModule, TabViewModule, GridModule, ButtonModule, testFacilitiesRoutes],
    providers:[TestFacilityService,BreadCrumbsService],
    declarations: [TestFacilitiesComponent]
})

export default class TestFacilitiesModule{}