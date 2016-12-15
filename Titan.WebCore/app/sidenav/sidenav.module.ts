import { NgModule }      from '@angular/core';
import { HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { SidenavComponent }   from './sidenav.component';

//import { enableProdMode} from '@angular/core';

//import { DataTableModule } from 'primeng/primeng';

//enableProdMode();


@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: [SidenavComponent],
    exports: [SidenavComponent]//,
    //providers: [DataService],
    //bootstrap: [SidenavComponent]
})
export class SidenavModule { }
