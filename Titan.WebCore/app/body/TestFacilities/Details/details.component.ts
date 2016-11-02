import { DataService } from '../../../shared/services/data.services';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule   } from 'primeng/primeng';
import { Component } from '@angular/core';

@Component({
    selector: 'details-testfacility',
    templateUrl: 'app/body/TestFacilities/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details:string;
}