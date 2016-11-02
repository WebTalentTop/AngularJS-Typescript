import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule, LazyLoadEvent} from 'primeng/primeng';
import { GridComponent } from './grid.component';

@NgModule({
    imports: [CommonModule, DataTableModule],
    declarations: [GridComponent],
    exports: [GridComponent, CommonModule]
})
export class GridModule{}