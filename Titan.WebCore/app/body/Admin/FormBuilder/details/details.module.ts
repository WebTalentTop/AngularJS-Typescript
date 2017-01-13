/**
 * Created by ZeroInfinity on 12/27/2016.
 */


import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { FormsModule} from '@angular/forms';
import {DetailsComponent} from "./details.component";
import detailsRoute from './details.routes';
import { PanelModule,DataTableModule, MessagesModule, DragDropModule, DialogModule, InputTextModule, SpinnerModule, DropdownModule, RadioButtonModule, ButtonModule, CheckboxModule, CalendarModule } from 'primeng/primeng';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        DataTableModule,
        DragDropModule,
        FormsModule,
        DragDropModule,
        SpinnerModule,
        DialogModule,
        InputTextModule,
        DropdownModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule,
        CalendarModule,
        MessagesModule,
        PanelModule,
        detailsRoute
    ],
    declarations:[DetailsComponent]
})

export default class DetailsModule {}
