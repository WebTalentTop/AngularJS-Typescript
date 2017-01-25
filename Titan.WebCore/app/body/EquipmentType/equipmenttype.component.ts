import { EquipmentTypeService } from './../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
import { LoggerService } from '../../shared/services/logger/logger.service';
import {FileUploadModule} from 'primeng/primeng';
import { LazyLoadEvent, Message, MessagesModule,MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';
import {DropdownModule} from 'primeng/primeng';
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';
import {ITitanSelectItem} from "../../shared/services/definitions/ITitanSelectItem";

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
    added: any;
    linkFieldId:string;
    msgs: Message[] = [];


    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: EquipmentTypeService,
        private route: ActivatedRoute, 
        private router:Router) {
            this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            //let equipmentTypeBreadCrumb = breadC.filter(filter =>
            //    filter.pageName === 'EquipmentTypeHomePage')[0];

            this.breadcrumbs = [];
            //this.breadcrumbs = equipmentTypeBreadCrumb.items;

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

    }
        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;
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