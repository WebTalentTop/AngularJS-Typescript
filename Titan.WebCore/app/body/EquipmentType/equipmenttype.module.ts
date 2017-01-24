import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {EquipmentTypeComponent } from "./equipmenttype.component";
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';
import { DataTableModule, TabViewModule, InputTextModule,DialogModule,FileUploadModule,MessagesModule,BreadcrumbModule, InputTextareaModule, DropdownModule, ButtonModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { EquipmentTypeService } from '../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import equipmenttypeRoutes from "./equipmenttype.routes";

@NgModule({
    imports: [CommonModule,RouterModule, DataTableModule, DialogModule,InputTextModule,BreadcrumbModule,MessagesModule,DropdownModule, InputTextareaModule, TabViewModule,GridModule, equipmenttypeRoutes,ButtonModule],
    providers:[EquipmentTypeService,BreadCrumbsService],
    declarations: [EquipmentTypeComponent]
})

export default class EquipmenttypeModule{}