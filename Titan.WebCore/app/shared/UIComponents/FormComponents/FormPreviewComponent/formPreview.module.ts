/**
 * Created by ZeroInfinity on 12/19/2016.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    DataTableModule,
    DragDropModule,
    DialogModule,
    InputTextModule,
    SpinnerModule,
    DropdownModule,
    RadioButtonModule,
    ButtonModule,
    CheckboxModule,
    CalendarModule,
    FileUploadModule
} from 'primeng/primeng';
import { FormPreviewComponent } from './formPreview.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule,
        DragDropModule,
        DialogModule,
        InputTextModule,
        SpinnerModule,
        DropdownModule,
        RadioButtonModule,
        ButtonModule,
        CheckboxModule,
        CalendarModule,
        FileUploadModule
    ],
    declarations: [FormPreviewComponent],
    exports: [FormPreviewComponent, CommonModule]
})
export class FormPreviewModule{}