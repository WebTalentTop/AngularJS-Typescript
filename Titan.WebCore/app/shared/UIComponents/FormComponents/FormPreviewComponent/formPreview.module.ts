/**
 * Created by ZeroInfinity on 12/19/2016.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, InputTextModule, ButtonModule, SpinnerModule } from 'primeng/primeng';
import { FormPreviewComponent } from './formPreview.component';

@NgModule({
    imports: [CommonModule, DialogModule, InputTextModule, ButtonModule, SpinnerModule ],
    declarations: [FormPreviewComponent],
    exports: [FormPreviewComponent, CommonModule]
})
export class FormPreviewModule{}