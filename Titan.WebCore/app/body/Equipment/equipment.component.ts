import { EquipmentService } from '../../shared/services/equipment.service';
import { LoggerService } from './../../shared/services/logger.service';
import { LazyLoadEvent, Message, MessagesModule,MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';
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
    msgs: Message[] = [];

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