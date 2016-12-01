import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact.component";
import { DataTableModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';

import { ContactService } from '../../../../shared/services/contact.service';

import contactRoutes from "./contact.routes";

@NgModule({
    imports: [CommonModule, DataTableModule, GridModule, contactRoutes, MessagesModule, GrowlModule],
    providers: [ContactService],
    declarations: [ContactComponent]
})

export default class ContactModule{}