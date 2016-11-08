import { DataService } from '../../../shared/services/data.services';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule   } from 'primeng/primeng';
import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
    selector: 'details-testfacility',
    templateUrl: 'app/body/TestFacilities/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details:string;
    id:string;
    constructor(
        private route:ActivatedRoute, 
        private dataService: DataService
    ){
        this.route.params.subscribe(params => this.id = params['id']);
        console.log("---- TF Details ID Param -----", this.id);
    }

    ngOnInit() {}
}