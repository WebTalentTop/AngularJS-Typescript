import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitanSpinnerComponent } from './spinner.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TitanSpinnerComponent],
    exports: [TitanSpinnerComponent, CommonModule]
})
export class TitanSpinnerModule{}