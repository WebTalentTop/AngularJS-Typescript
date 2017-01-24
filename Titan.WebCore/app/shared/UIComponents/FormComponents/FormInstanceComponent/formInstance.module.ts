/**
 * Created by ZeroInfinity on 12/19/2016.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule, CheckboxModule, RadioButtonModule, InputTextModule, ButtonModule, SpinnerModule } from 'primeng/primeng';
import { FormInstanceComponent } from './formInstance.component';
import { FormInstanceService } from '../../../services/formInstance.service';
import {DropdownModule} from "primeng/components/dropdown/dropdown";

@NgModule({
    imports: [CommonModule, CheckboxModule, DropdownModule, RadioButtonModule,FormsModule, DialogModule, InputTextModule, ButtonModule, SpinnerModule ],
    declarations: [FormInstanceComponent],
    providers: [FormInstanceService],
    exports: [FormInstanceComponent, CommonModule]
})
export class FormInstanceModule{}