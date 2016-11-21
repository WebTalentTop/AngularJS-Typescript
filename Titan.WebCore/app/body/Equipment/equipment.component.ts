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
                console.log("Inside of Service Call in BodyComponent: ", resData);

                this.gridData = res.Data;
                this.cols = res.Configuration.Columns;
                //console.log("-------- Cols --------", this.cols);
                this.confInfo = res.Configuration;
                //console.log("------- Configuration --------", this.confInfo);
            });
        console.log("The Whole MyValues After Service Call: ", this.gridData);
        console.log("The Whole configuration Info values: ", this.confInfo);
    }

      navigateDetails(id:string){
        this.router.navigate(['equipment/details', id]);
    }
      
}