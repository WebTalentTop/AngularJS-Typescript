import { TestFacilityService } from '../../shared/services/testfacility.service';
import { LoggerService } from './../../shared/services/logger.service';
import { LazyLoadEvent, Message, MessagesModule } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';


@Component({
    selector: 'test-facilities',
    templateUrl: 'app/body/TestFacilities/testfacilities.component.html'
})
export class TestFacilitiesComponent {
    // title = "Test Facilities";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    idField:string;
    linkFieldId: string;
    added: any;
    msgs: Message[] = [];

    constructor(private testFacilityService: TestFacilityService, private route: ActivatedRoute, private router:Router, private logger: LoggerService) {
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];

        });

        if (this.added == 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'Success', summary: 'Success', detail: '' });
        }
    }

    ngOnInit() {
        let resData:any;
        this.testFacilityService.postGridData()
            .subscribe(res => {
                resData = res;
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
        this.router.navigate(['testfacilities/details', id]);
    }

   
}