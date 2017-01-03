import { EquipmentService }  from './../../shared/services/equipment.service';
import { DataTable } from 'primeng/primeng';
import { LazyLoadEvent} from 'primeng/primeng';
import { Component } from '@angular/core';
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';
import {Router} from '@angular/router'

@Component({
    selector: 'equipment',
      templateUrl: 'app/body/Equipment/equipment.component.html'
})
export class EquipmentComponent {
    // title = "Equipment";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    idField:string;
    linkFieldId:string;

    constructor(private service: EquipmentService, private router:Router) {

    }

    ngOnInit() {
        let resData:any;
        this.service.postGridData()
            .subscribe(res => {
                resData = res;

                this.gridData = res.Data;
                this.cols = res.Configuration.Columns;
                this.confInfo = res.Configuration;
            });
    }

      navigateDetails(id:string){
        this.router.navigate(['equipment/details', id]);
    }
      
}