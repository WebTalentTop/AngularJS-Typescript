import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule, LazyLoadEvent} from 'primeng/primeng';
import { GridComponent } from './grid.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, DataTableModule, RouterModule],
    declarations: [GridComponent],
    exports: [GridComponent, CommonModule]
})
export class GridModule{}