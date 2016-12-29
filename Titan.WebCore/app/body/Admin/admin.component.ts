import { MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'admin',
    styleUrls: ['app/body/admin/admin.component.css'],
    templateUrl: 'app/body/Admin/admin.component.html',

})
export class AdminComponent {
    items: MenuItem[];
    constructor(private breadCrumbService: BreadCrumbsService) {
        let breadCrumbs = this.breadCrumbService.getBreadCrumbs();
        this.items = [];
        let adminBC = breadCrumbs.filter(item => item.pageName === 'Admin')[0];
        this.items = adminBC.items;
        console.log('Bread Crumbs for Admin', adminBC);
    }

    ngOnInit() { }
    bcNavigation(event) {
        console.log("Event of navigation ----", event);
    }
}
