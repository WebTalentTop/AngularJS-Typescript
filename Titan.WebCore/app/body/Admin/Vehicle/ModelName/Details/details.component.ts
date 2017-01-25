import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModelNameService } from '../../../../../shared/services/modelName.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'modelName-detail',
    templateUrl: 'app/body/Admin/Vehicle/ModelName/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "ModelName";
    entityId: string = this.id;
    filepath: string = "ModelName";
    modelName = { name: '' };   
    formConfiguration: any;
    formObject: any;

    ModelNameDetails: any = {
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

    public ModelNameId: string;
    
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: ModelNameService
    )
    { }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.ModelNameId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let modelNameDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'ModelNameDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("modelNameDetailsBreadCrumb ---------", modelNameDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = modelNameDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.ModelNameId).subscribe(ModelNameDetails => {
                this.ModelNameDetails = ModelNameDetails.result;
              
                console.log(this.ModelNameDetails);
            });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.ModelNameDetails).subscribe(ModelNameDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}