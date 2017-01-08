import { EquipmentTypeService } from './../../shared/services/equipmentType.service';
import { LoggerService } from './../../shared/services/logger.service';
import {FileUploadModule} from 'primeng/primeng';
import { LazyLoadEvent, Message, MessagesModule,MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';
import {DropdownModule} from 'primeng/primeng';

@Component({
    selector: 'equipment-type',
    templateUrl: 'app/body/EquipmentType/equipmenttype.component.html'
})
export class EquipmentTypeComponent {
    // title = "EquipmentType";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    idField:string;
    linkFieldId:string;
    msgs: Message[] = [];

    constructor(private service: EquipmentTypeService, private router:Router) {

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
        this.router.navigate(['equipmenttype/details', id]);
    }

   
}