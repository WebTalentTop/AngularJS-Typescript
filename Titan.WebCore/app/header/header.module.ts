import { NgModule }      from '@angular/core';
import { HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent }   from './header.component';
//import { DataService } from './shared/services/data.services';
//import { enableProdMode} from '@angular/core';

//import { DataTableModule } from 'primeng/primeng';

//enableProdMode();


@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]//,
    //providers: [DataService],
    //bootstrap: [AppComponent]
})
export class HeaderModule { }
