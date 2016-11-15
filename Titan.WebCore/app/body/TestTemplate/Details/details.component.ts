import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TestTemplateService } from '../../../shared/services/testtemplate.service'
@Component({
    selector: 'details-testtemplate',
    templateUrl: 'app/body/TestTemplate/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details:string;
    id:string;
    constructor(
        private route:ActivatedRoute, 
        private service: TestTemplateService
    ){
        this.route.params.subscribe(params => this.id = params['id']);
        console.log("---- TF Details ID Param -----", this.id);
    }

    ngOnInit() {}
}