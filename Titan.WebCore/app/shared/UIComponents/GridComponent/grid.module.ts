import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule, LazyLoadEvent} from 'primeng/primeng';
import { GridComponent } from './grid.component';
import { SpinnerModule } from '../SpinnerComponent/spinner.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule,SpinnerModule, DataTableModule, RouterModule],
    declarations: [GridComponent],
    exports: [GridComponent, CommonModule]
})
export class GridModule{}