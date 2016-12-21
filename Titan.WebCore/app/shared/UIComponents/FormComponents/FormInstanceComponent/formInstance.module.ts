/**
 * Created by ZeroInfinity on 12/19/2016.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule, InputTextModule, ButtonModule, SpinnerModule } from 'primeng/primeng';
import { FormInstanceComponent } from './formInstance.component';
import { FormInstanceService } from '../../../services/formInstance.service';

@NgModule({
    imports: [CommonModule,FormsModule, DialogModule, InputTextModule, ButtonModule, SpinnerModule ],
    declarations: [FormInstanceComponent],
    exports: [FormInstanceComponent,FormInstanceService, CommonModule]
})
export class FormInstanceModule{}