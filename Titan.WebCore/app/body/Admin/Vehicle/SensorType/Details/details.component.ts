import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SensorTypeService } from '../../../../../shared/services/sensorType.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'sensorType-detail',
    templateUrl: 'app/body/Admin/Vehicle/SensorType/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "SensorType";
    entityId: string = this.id;
    filepath: string = "SensorType";
    sensorType = { name: '' };   
    formConfiguration: any;
    formObject: any;

    SensorTypeDetails: any = {
        id: '',
        isDeleted: false,
        name: '',
        description: '',
        userCreatedById: '',
        userModifiedById: '',
        createdOn: '',
        modifiedOn: ''

    };

    msgs: Message[];
    uploadedFiles: any[] = [];

    public SensorTypeId: string;

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: SensorTypeService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.SensorTypeId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

             let breadC = this.breadCrumbsService.getBreadCrumbs();
            let sensorTypeDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'SensorTypeDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("sensorTypeDetailsBreadCrumb ---------", sensorTypeDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = sensorTypeDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.SensorTypeId).subscribe(SensorTypeDetails => {
                this.SensorTypeDetails = SensorTypeDetails.result;
              
                console.log(this.SensorTypeDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.SensorTypeDetails).subscribe(SensorTypeDetails => {
           // console.log(ProjectStatusDetails);
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}