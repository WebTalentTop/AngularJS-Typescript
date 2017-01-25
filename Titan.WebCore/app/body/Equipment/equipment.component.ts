import { EquipmentService } from '../../shared/services/Containers/EquipmentService/equipment.service';
import { LoggerService } from './../../shared/services/logger/logger.service';
import { LazyLoadEvent, Message, MessagesModule, MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';
@Component({
    selector: 'equipment',
    templateUrl: 'app/body/Equipment/equipment.component.html'
})
export class EquipmentComponent {
    // title = "Equipment";
    gridData = [];
    confInfo: any = {};
    cols = [];
    gridFilter = {};
    added: any;
    idField: string;
    linkFieldId: string;
    msgs: Message[] = [];
    equipmentId: any = '49FD25EF-BB89-4FD9-A9DA-008C2CE8D151';
    equipmentCodeName: any = 'CODE128';
    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: EquipmentService,
        private route: ActivatedRoute,
        private router: Router) {
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let equipmentBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'EquipmentHomePage')[0];

            this.breadcrumbs = [];
            this.breadcrumbs = equipmentBreadCrumb.items;

            this.breadcrumbsHome = { routerLink: ['/'] };
        });
    }

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    ngOnInit() {
        let resData: any;
        this.service.postGridData()
            .subscribe(res => {
                resData = res;

                this.gridData = res.Data;
                this.cols = res.Configuration.Columns;
                this.confInfo = res.Configuration;
            });
    }

    navigateDetails(id: string) {
        this.router.navigate(['equipment/details', id]);
    }

}