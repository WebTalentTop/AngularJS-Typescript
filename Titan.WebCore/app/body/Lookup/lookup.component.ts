import { LookupService } from './../../shared/services/lookup.service';
import { DataTable, LazyLoadEvent } from 'primeng/primeng';
import { Component } from '@angular/core';

@Component({
    selector: 'lookup',
    styleUrls: ['app/body/Lookup/lookup.component.css'],
    templateUrl: 'app/body/Lookup/lookup.component.html'
})
export class LookupComponent {
    title = "Lookups";
    private items:MenuItem[];
    constructor(private service: LookupService) {

    }

    ngOnInit() {
       this.items=[];
       this.items.push({label:'Home'});
    }

}