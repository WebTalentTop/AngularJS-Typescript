import { NgModule }      from '@angular/core';
import { HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { FooterComponent }   from './footer.component';
//import { enableProdMode} from '@angular/core';

//import { DataTableModule } from 'primeng/primeng';

//enableProdMode();


@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: [FooterComponent],
    exports: [FooterComponent]//,
    //providers: [DataService],
    //bootstrap: [FooterComponent]
})
export class FooterModule { }
