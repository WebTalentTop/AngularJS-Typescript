import { LookupService } from './../../shared/services/lookup.service';
import { DataTable, LazyLoadEvent } from 'primeng/primeng';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'lookup',
    styleUrls: ['app/body/Lookup/lookup.component.css'],
    templateUrl: 'app/body/Lookup/lookup.component.html'
})
export class LookupComponent {
    title = "Lookups";
    private items :MenuItem[] = [];
    constructor(
        private breadCrumbService: BreadCrumbsService,
        private service: LookupService) 
        {
        let breadCrumbs = this.breadCrumbService.getBreadCrumbs();
        this.items = [];
        let lookupsBC = breadCrumbs.filter(item => item.pageName === 'Lookups')[0];
        this.items = lookupsBC.items;
    }

    ngOnInit() {
    }

}