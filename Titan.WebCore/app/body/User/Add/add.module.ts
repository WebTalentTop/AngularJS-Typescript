import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddComponent } from "./add.component";
import { UserService } from '../../../shared/services/user.service';

import { EditorModule, SharedModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, CheckboxModule, DialogModule, MultiSelectModule, ConfirmDialogModule, DropdownModule, PanelModule, MessagesModule, GrowlModule } from 'primeng/primeng';

import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';

@NgModule({
    imports: [EditorModule, SharedModule, MultiSelectModule, CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, CheckboxModule, DialogModule, MultiSelectModule, ConfirmDialogModule, CalendarModule,  InputTextModule, PanelModule, DropdownModule, MessagesModule, GrowlModule, addRoutes],

    providers: [ BreadCrumbsService, UserService],
    declarations: [AddComponent]
})

export default class AddModule{}