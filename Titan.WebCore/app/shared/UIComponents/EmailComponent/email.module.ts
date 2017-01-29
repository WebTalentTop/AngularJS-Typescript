import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    LazyLoadEvent, GrowlModule, InputTextModule, ConfirmDialogModule,
    ConfirmationService, DialogModule, EditorModule, SharedModule, AutoCompleteModule
} from 'primeng/primeng';
import { EmailComponent } from './email.component';
import { TitanSpinnerModule } from '../SpinnerComponent/spinner.module';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
//import { EmailService } from '../../../shared/services/email.service';

@NgModule({
    imports: [CommonModule, InputTextModule, TitanSpinnerModule, EditorModule, RouterModule,
        GrowlModule, FormsModule, DialogModule, ConfirmDialogModule, SharedModule, AutoCompleteModule], 
    declarations: [EmailComponent],
    providers: [ConfirmationService, UserService],
    exports: [EmailComponent, CommonModule]
    
})
export class EmailModule{

}