import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProcedureComponent } from "./procedure.component";
import { ProcedureService } from '../../shared/services/procedure.service';
import { DataTableModule, TabViewModule, AutoCompleteModule, InputTextModule, InputTextareaModule, DropdownModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import procedureRoutes from "./procedure.routes";

@NgModule({
    imports: [CommonModule, RouterModule, DataTableModule, InputTextModule, DropdownModule, 
        InputTextareaModule, TabViewModule, GridModule, procedureRoutes, AutoCompleteModule],
    providers: [ProcedureService],
    declarations: [ProcedureComponent]
})

export default class ProcedureModule{}
