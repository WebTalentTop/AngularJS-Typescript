import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuildersComponent } from "./formBuilder.component";
import { DragDropModule, DialogModule, InputTextModule, SpinnerModule, DropdownModule, RadioButtonModule, ButtonModule, CheckboxModule, CalendarModule } from 'primeng/primeng';
import { FormsModule} from '@angular/forms';

import formBuilderRoutes from "./formBuilder.routes";

@NgModule({
    imports: [CommonModule, FormsModule, DragDropModule, SpinnerModule, DialogModule, InputTextModule, DropdownModule, ButtonModule, CheckboxModule, RadioButtonModule, CalendarModule, formBuilderRoutes],
    declarations: [FormBuildersComponent]
})

export default class FormBuildersModule{}