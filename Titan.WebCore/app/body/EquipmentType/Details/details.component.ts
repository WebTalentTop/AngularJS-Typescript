//import {bootstrap} from '@angular/platform-browser-dynamic';
//import {AppComponent} from '../../../../app/app.component'
import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { DataTable, TabViewModule, DialogModule, SelectItem, Dropdown, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEquipmentSubtype } from '../../../shared/services/definitions/IEquipmentSubtype';
import { ICalibrationForm } from '../../../shared/services/definitions/ICalibrationForm';
//import { disableDeprecatedForms, provideForms } from '@angular/forms';


@Component({
    selector: 'details-testfacility',
    templateUrl: 'app/body/equipmenttype/Details/details.component.html'
})
export class DetailsComponent implements OnInit {

    displayDialog: boolean;
    EquipmentSubType: IEquipmentSubtype = new PrimeEquipmentSubType('', '', '', '', '', '', '');
    CalibrationForm: ICalibrationForm = new PrimeCalibrationForm('', '', '');
    selectedsubType: IEquipmentSubtype;
    newsubType: boolean;
    IsSubType: boolean;
    EquipmentsubTypes: IEquipmentSubtype[] = [];
    CalibrationForms: ICalibrationForm[] = [];
    username: string;
    details: string;
    id: string;
    msgs: Message[];
    entityType: string = '';
    entityId: string = '';
    filepath: string = "TestFacility";
    displayDialogForm: boolean;
    emptyguid: any = "00000000-0000-0000-0000-000000000000";
    selectedCalibration: string = '';
   
    cities: SelectItem[];
    selectedcity: any;
    selectedstring: string = null;
    model: any = {
        id: '',
       // isdeleted: '0',
        parentId: '',
        description: '',
         name: ''
        //createdOn: '',
        //modifiedOn: '',
        //userCreatedById: '',
        //userInChargedId: '',
        //userModifiedById: ''
    };


    uploadedFiles: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private dataService: EquipmentTypeService

    ) {
      
        this.CalibrationForms = [];
        this.CalibrationForms.push({ id: '1', name: 'Audi', description: 'Audi' });
        this.CalibrationForms.push({ id: '2', name: 'BMW', description: 'BMW' });
        this.CalibrationForms.push({ id: '3', name: 'Fiat', description: 'Fiat' });
        this.CalibrationForms.push({ id: '4', name: 'Ford', description: 'Ford' });
        this.CalibrationForms.push({ id: '5', name: 'Honda', description: 'Honda' });
        this.CalibrationForms.push({ id: '6', name: 'Jaguar', description: 'Jaguar' });
        this.CalibrationForms.push({ id: '7', name: 'Mercedes', description: 'Mercedes' });
        this.CalibrationForms.push({ id: '8', name: 'Renault', description: 'Renault' });
        this.CalibrationForms.push({ id: '9', name: 'VW', description: 'VW' });
        this.CalibrationForms.push({ id: '10', name: 'Volvo', description: 'Volvo' });
        // this.selectedCalibration="BMW";
        this.route.params.subscribe(params => this.id = params['id']);
        this.model.id = this.id;
        console.log("---- TF Details ID Param -----", this.id);
    }
    handleChange(event) {
        console.log('tes---', event);
        console.log('-------targetid-------', event.originalEvent.target.innerText);
    }
    ngOnInit() {
        this.dataService.getById(this.id) 
            .subscribe(res => {
                //this.formConfiguration = res.formConfiguration;
                //this.formObject = res.formObject;
                this.model = res;
                this.model.id = res.id;
                this.model.parentId = res.parentId;
                this.model.name = res.name;
                this.model.description = res.description; 
                //  console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$descriptions);
                console.log("----- Result of formObject -----", this.model);
                this.dataService.getSubTypesById(this.model.id)
                    .subscribe(result => {
                        this.EquipmentsubTypes = result.$values;
                        console.log("----- Result of formObject -----", this.model);
                    });
            });

        //   this.EquipmentSubType = { name:'', description: '', calibrationform: '', frequency: ''}  
    }


    onEdit() {
        console.log('d---------------updateddescriptions-------------', this.model);

        this.dataService.postUpdate(this.model)
            .subscribe(res => {
                //this.model = res;
                //this.model.name = res.name;
                //this.model.description = res.description;
                //this.msgs = [];
                //this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
                //  console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$descriptions);
                //   console.log("----- Result of formObject -----", this.model);
            });


        this.EquipmentsubTypes.forEach((subtype: any) => {
            console.log('----------isdeleted----', subtype);
            console.log('----------isdeleted----', subtype.isdeleted);
           // if (subtype.isdeleted =='' )
                this.dataService.postAdd(subtype)
                    .subscribe(res1 => {

                        console.log("----- Result of subtypes creation -----", res1);
                    });
          
        });

        this.EquipmentsubTypes.forEach((subtype: any) => {
            this.dataService.postUpdate(subtype)
                .subscribe(res2 => {
                });
        });

      
    }

    showDialogToAdd() {
        this.newsubType = true;
        this.selectedCalibration = null;
        this.EquipmentSubType = new PrimeEquipmentSubType('', '', '', '', '', '', this.id);
        this.displayDialog = true;
        // this.IsSubType= true;
    }
    showDialogToAddForm() {
        this.displayDialogForm = true;
        this.selectedCalibration = null;
        this.CalibrationForm = new PrimeCalibrationForm('', '', '');
        //this.IsSubType= false;
    }
    ok() {
        this.CalibrationForms.push(this.CalibrationForm);
        this.EquipmentSubType.calibrationform = this.CalibrationForm.name;
        this.selectedCalibration = this.CalibrationForm.name;
        this.displayDialogForm = false;
    }
    cancel() {
        this.displayDialogForm = false;
    }
    save() {
        //   this.EquipmentSubType = EquipmentSubType.name;
        if (this.newsubType)
            this.EquipmentsubTypes.push(this.EquipmentSubType);

        else
            this.EquipmentsubTypes[this.findSelectedCarIndex()] = this.EquipmentSubType;

        this.EquipmentSubType = null;
        this.displayDialog = false;
    }
    onCalibrationFormChange(event) {
        //   this.selectedCalibration=(event.target.selectedOptions[0].innerText); 
        // this.EquipmentSubType.calibrationform= (event.target.selectedOptions[0].innerText);
        this.selectedCalibration = (event);
        this.EquipmentSubType.calibrationform = (event);

    }
    delete() {
        this.EquipmentsubTypes.splice(this.findSelectedCarIndex(), 1);

        this.dataService.DeleteEquipmentsById(this.selectedsubType.id)
            .subscribe(res => {
                // call get method to refresh grid
                this.dataService.getSubTypesById(this.model.id)
                    .subscribe(result => {
                        this.EquipmentsubTypes = result.$values;

                    });
                //  console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$descriptions);

            });
        // this.EquipmentSubType = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newsubType = false;
        this.EquipmentSubType = this.clonesubType(event.data);
        this.EquipmentSubType.calibrationform = event.data.calibrationform;
        this.selectedCalibration = event.data.calibrationform;
        this.displayDialog = true;
    }

    clonesubType(sub: IEquipmentSubtype): IEquipmentSubtype {
        let newType = new PrimeEquipmentSubType(sub.id, sub.isdeleted, sub.name, sub.description, sub.calibrationform, sub.frequency, sub.parentId);
        for (let prop in sub) {
            newType[prop] = sub[prop];
        }
        return newType;
    }

    findSelectedCarIndex(): number {
        return this.EquipmentsubTypes.indexOf(this.selectedsubType);
    }
}

class PrimeEquipmentSubType implements IEquipmentSubtype {

    constructor(public id, public isdeleted, public name, public description, public calibrationform, public frequency, public parentId) {
    }
}
class PrimeCalibrationForm implements ICalibrationForm {

    constructor(public id, public name, public description) {
    }
}