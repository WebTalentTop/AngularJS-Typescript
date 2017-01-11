import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule, LazyLoadEvent, GrowlModule, FileUploadModule, DropdownModule, ConfirmDialogModule, ConfirmationService, PanelModule } from 'primeng/primeng';
import { AttachmentComponent } from './attachment.component';
import { TitanSpinnerModule } from '../SpinnerComponent/spinner.module';
import { RouterModule } from '@angular/router';
import { AttachmentService } from '../../../shared/services/attachment.service';

@NgModule({
    imports: [CommonModule, TitanSpinnerModule, DataTableModule, RouterModule, GrowlModule, FileUploadModule, DropdownModule, ConfirmDialogModule, PanelModule], 
    declarations: [AttachmentComponent],
    providers: [AttachmentService, ConfirmationService],
    exports: [AttachmentComponent, CommonModule]
    
})
export class AttachmentModule{}