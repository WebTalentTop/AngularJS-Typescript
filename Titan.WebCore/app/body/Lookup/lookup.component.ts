import { LookupService } from './../../shared/services/lookup.service';
import { DataTable, LazyLoadEvent } from 'primeng/primeng';
import { Component } from '@angular/core';

@Component({
    selector: 'lookup',
    styleUrls: ['app/body/Lookup/lookup.component.css'],
    templateUrl: 'app/body/Lookup/lookup.component.html'
})
export class LookupComponent {
    title = "Lookup";


    constructor(private service: LookupService) {

    }

    ngOnInit() {
       
    }

}