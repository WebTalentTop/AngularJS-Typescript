import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    DataTableModule, LazyLoadEvent, GrowlModule, PanelModule, FileUploadModule, DropdownModule, ConfirmDialogModule,
    ConfirmationService, CheckboxModule, DialogModule
} from 'primeng/primeng';
import { ModuleComponent } from './module.component';
import { ModuleItemComponent } from './module-item.component';
import { TitanSpinnerModule } from '../SpinnerComponent/spinner.module';
import { RouterModule } from '@angular/router';
import { ModuleService } from '../../../shared/services/module.service';
import { ModuleTypeService } from '../../../shared/services/moduleType.service';
import { ModuleItemService } from '../../../shared/services/moduleItem.service';
import { ModuleItemOptionService } from '../../../shared/services/moduleItemOption.service';

@NgModule({
    imports: [CommonModule, TitanSpinnerModule, DataTableModule, FormsModule, PanelModule, RouterModule, GrowlModule, FileUploadModule, DropdownModule,
        ConfirmDialogModule, CheckboxModule, DialogModule], 
    declarations: [ModuleComponent, ModuleItemComponent],
    providers: [ModuleService, ConfirmationService, ModuleTypeService, ModuleItemService, ModuleItemOptionService],
    exports: [ModuleComponent, CommonModule, ModuleItemComponent]    
})
export class ModuleModule{}