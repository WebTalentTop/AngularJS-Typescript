import { TestFacilityService } from '../../shared/services/testfacility.service';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
    selector: 'test-request',
    templateUrl: 'app/body/TestRequest/testrequest.component.html'
})
export class TestRequestComponent {

    username: string;
    details:string;

    formConfiguration:any;
    formObject:any;
    formEquipmentObject:any;
    id: string;
    entityType: string = "TestFacility";
     entityId: string = this.id;
    filepath: string = "TestFacility";
 
    model:any = {
                id:'', 
                isDeleted:false, 
                name:'', 
                createdOn:'', 
                modifiedOn:'',
                userCreatedById:'',
                userInChargedId:'',
                userModifiedById:''
    };
    msgs:Message[];
    uploadedFiles: any[] = [];

    constructor(
        private route:ActivatedRoute, 
        private dataService: TestFacilityService
   
    ){
        this.route.params.subscribe(params => this.id = params['id']);
          this.entityId = this.id;
        console.log("---- TF Details ID Param -----", this.id);
    }
   handleChange(event)
   {

       console.log('tes---',event);
       console.log('-------targetid-------',event.originalEvent.target.innerText);
   }
    ngOnInit() {
        //this.dataService.getById(this.id)
        //    .subscribe(res =>
        //    {
        //        this.formConfiguration = res.formConfiguration;
        //        this.formObject = res.formObject;
        //        this.model = res.formObject;
        //        console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
        //        console.log("----- Result of formObject -----", this.model);
        //    });
      
        // this.dataService.getEquipmentsByIdusing(this.id)
          //  .subscribe(res =>
            //{
              //  this.TestFacilityEquipments = res;
                                       
           // });
    }

  

}