import {Component} from '@angular/core';
import {ModelYearService} from '../../../../../shared/services/modelYear.service';
import {Validators} from '@angular/forms';
import {SelectItem, MenuItem} from 'primeng/primeng';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {BreadCrumbsService} from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'add-modelYear',
    templateUrl: 'app/body/Admin/Vehicle/ModelYear/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description: string;
    added: string;

    constructor(private breadCrumbsService: BreadCrumbsService,
                private service: ModelYearService,
                private router: Router,
                private route: ActivatedRoute) {

    }

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    ngOnInit() {
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let modelYearAddBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'ModelYearAddPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("modelYearAddBreadCrumb ---------", modelYearAddBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = modelYearAddBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = {routerLink: ['/']};
        });
    }

    onSubmit(formRef) {

        let formData: any = {name: '', description: '', locale: '', isDeleted: false};
        formData.name = formRef.name;
        formData.description = formRef.description;
        formData.locale = "en-us";
        let added: any = "true";
        console.log(formData);
        this.service.postAdd(formData).subscribe(res => {
                if (res.isSuccess) {
                    this.router.navigate(["/admin/vehicle/modelYear"], {queryParams: {page: 1}});

                }

            }
        );

    }
}
