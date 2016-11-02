import { DataService } from './../../shared/services/data.services';
import { DataTable, LazyLoadEvent } from 'primeng/primeng';
import { Component } from '@angular/core';

@Component({
    selector: 'admin',
    styleUrls: ['app/body/admin/admin.component.css'],
    templateUrl: 'app/body/Admin/admin.component.html',
    
})
export class AdminComponent {

    constructor(private dataService: DataService) {

    }
    ngOnInit() {}
}
