/**
 * Created by ZeroInfinity on 12/26/2016.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddFormComponent } from "./add.component";
import { DragDropModule, DialogModule, InputTextModule,InputTextareaModule, SpinnerModule, DropdownModule, RadioButtonModule, ButtonModule, CheckboxModule, CalendarModule } from 'primeng/primeng';
import { FormsModule} from '@angular/forms';

import addFormRoutes from "./add.routes";

@NgModule({
    imports: [
        CommonModule,
        DragDropModule,
        FormsModule,
        DragDropModule,
        SpinnerModule,
        DialogModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule,
        CalendarModule,
        addFormRoutes],
    declarations: [AddFormComponent]
})

export default class AddModule{}