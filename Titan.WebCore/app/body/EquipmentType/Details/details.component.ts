//import {bootstrap} from '@angular/platform-browser-dynamic';
//import {AppComponent} from '../../../../app/app.component'

import {EquipmentTypeService} from '../../../shared/services/equipmentType.service';
import {
    DataTable,
    TabViewModule,
    DialogModule,
    SelectItem,
    Dropdown,
    LazyLoadEvent,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    PanelModule,
    FileUploadModule,
    Message,
    GrowlModule
} from 'primeng/primeng';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IEquipmentSubtype} from '../../../shared/services/definitions/IEquipmentSubtype';
import {ICalibrationForm} from '../../../shared/services/definitions/ICalibrationForm';
import {LoggerService} from "../../../shared/services/logger/logger.service";
import {EntityIdentifierService} from "../../../shared/services/entityIdentifier.service";
import {FormSchemaCategoryService} from "../../../shared/services/formSchemaCategory.service";
//import { disableDeprecatedForms, provideForms } from '@angular/forms';

declare var useGentleSelect: false;

@Component({
    selector: 'details-testfacility',
    templateUrl: 'app/body/equipmenttype/Details/details.component.html'
})
export class DetailsComponent implements OnInit {
    entityIdentifierName: string = "Equipment";
    //useGentleSelect:boolean = false;
    displayDialog: boolean;
    EquipmentSubType: IEquipmentSubtype = new PrimeEquipmentSubType('', '', '', '', '', '', '');
    CalibrationForm: ICalibrationForm = new PrimeCalibrationForm('', '', '', '');
    selectedsubType: IEquipmentSubtype;
    newsubType: boolean;
    IsSubType: boolean;
    EquipmentsubTypes: IEquipmentSubtype[] = [];
    CalibrationForms: ICalibrationForm[] = [];
    username: string;
    details: string;
    id: string;
    cronInitialized: boolean = false;
    msgs: Message[];
    entityType: string = '';
    entityId: string = '';
    filepath: string = "TestFacility";
    displayDialogForm: boolean;
    emptyguid: any = "00000000-0000-0000-0000-000000000000";
    selectedCalibration: string = '';
    selectedMaintenanceFrequency: any;
    cities: SelectItem[];
    selectedcity: any;
    selectedSubTypeMaintenanceFrequency: any;
    selectedstring: string = null;
    model: any = {
        id: '',
        // isdeleted: '0',
        parentId: '',
        description: '',
        name: '',
        frequency: ''
        //createdOn: '',
        //modifiedOn: '',
        //userCreatedById: '',
        //userInChargedId: '',
        //userModifiedById: ''
    };


    uploadedFiles: any[] = [];

    constructor(private route: ActivatedRoute,
                private dataService: EquipmentTypeService,
                private entityIdentifierService: EntityIdentifierService,
                private formSchemaCategoryService: FormSchemaCategoryService,
                private ls: LoggerService) {
        this.ls.setShow(true);
        //region Default values for Calibration Form Dropdown. This is going to be deleted
        /*this.CalibrationForms = [];

        this.CalibrationForms.push({
            id: '1',
            name: 'Audi',
            description: 'Audi',
            calibrationFrequencyCronExpression: ''
        });
        this.CalibrationForms.push({ id: '1', name: 'Audi', description: 'Audi', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '2', name: 'BMW', description: 'BMW', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '3', name: 'Fiat', description: 'Fiat', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '4', name: 'Ford', description: 'Ford', calibrationFrequencyCronExpression: ''});
        this.CalibrationForms.push({ id: '5', name: 'Honda', description: 'Honda', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '6', name: 'Jaguar', description: 'Jaguar', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '7', name: 'Mercedes', description: 'Mercedes', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '8', name: 'Renault', description: 'Renault', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '9', name: 'VW', description: 'VW', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '10', name: 'Volvo', description: 'Volvo', calibrationFrequencyCronExpression: ''});
        */
        this.route.params.subscribe(params => this.id = params['id']);
        this.model.id = this.id;
    }

    handleChange(event) {
    }

    ngOnInit() {
        this.entityIdentifierService.getByNameForForms(this.entityIdentifierName)
            .subscribe(res => {
                this.ls.logConsole("EntityIdentifier Data By Name ----------", res);

            })
        this.dataService.getById(this.id)
            .subscribe(res => {
                //this.formConfiguration = res.formConfiguration;
                //this.formObject = res.formObject;
                this.model = res;
                this.model.id = res.id;
                this.model.parentId = res.parentId;
                this.model.name = res.name;
                this.model.description = res.description;
                this.frequencyInit();
                this.onCronInit();
                this.dataService.getSubTypesById(this.model.id)
                    .subscribe(result => {
                        this.EquipmentsubTypes = result.$values;
                    });
            });

        //   this.EquipmentSubType = { name:'', description: '', calibrationform: '', frequency: ''}
    }


    onEdit() {

        let modelbody: any = {
            id: this.model.id,

            parentId: null,
            description: this.model.description,
            name: this.model.name,
            frequency: this.selectedMaintenanceFrequency
            //createdOn: '',
            //modifiedOn: '',
            //userCreatedById: '',
            //userInChargedId: '',
            //userModifiedById: ''
        };


        this.EquipmentsubTypes.forEach((subtype: any) => {
            // if (subtype.isdeleted =='' )
            this.dataService.postAdd(subtype)
                .subscribe(res1 => {

                    this.EquipmentsubTypes.forEach((subtype: any) => {
                        this.dataService.postUpdate(subtype)
                            .subscribe(res2 => {

                                this.dataService.postUpdate(modelbody)
                                    .subscribe(res => {
                                        //this.model = res;
                                        //this.model.name = res.name;
                                        //this.model.description = res.description;
                                        //this.msgs = [];
                                        //this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
                                    });

                            });
                    });
                });

        });


    }

    frequencyInit() {
        let options = {
            initial: this.selectedMaintenanceFrequency,
            onChange: function() {
                this.selectedMaintenanceFrequency = $(this).cron("value");
            }
        };

        if (this.model.frequency != null && this.model.frequency != "") {
            this.selectedMaintenanceFrequency = this.model.frequency;

            $("#selector").cron(options);

        }
        else {
            options.initial = this.selectedMaintenanceFrequency = "0 0 1 1 *";
            $("#selector").cron(options);
        }

    }

    showDialogToAdd() {
        this.newsubType = true;
        this.selectedCalibration = null;
        this.EquipmentSubType = new PrimeEquipmentSubType('', '', '', '', '', '', this.id);
        this.displayDialog = true;
        this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
        if (this.EquipmentSubType.frequency != null && this.EquipmentSubType.frequency != "" && !this.cronInitialized) {
            this.cronInitialized = true;
         // if (this.model.frequency != null && this.model.frequency != "") {
            //$("#cronselector").cron({
            //    initial: this.EquipmentSubType.frequency,
            //    onChange: function () {
            //        this.EquipmentSubType.frequency = $(this).cron("value");
            //        this.selectedSubTypeMaintenanceFrequency = $(this).cron("value");
            //    }, useGentleSelect: false
            //});
        }
        
        else {
            if (this.model.frequency != null && this.model.frequency != "" && !this.cronInitialized) {
                this.cronInitialized = true;
                //$("#cronselector").cron({
                //    initial: this.model.frequency,
                //    onChange: function () {
                //        this.EquipmentSubType.frequency = $(this).cron("value");
                //        this.selectedSubTypeMaintenanceFrequency = $(this).cron("value");
                //    }, useGentleSelect: false
                //});
            } else {
                this.cronInitialized = true;
                this.onCronAdd();
               // $("#add").add("")
                $("#cronselector").cron({

                    initial: this.selectedSubTypeMaintenanceFrequency,
                    //onChange: function () {
                    //    //this.EquipmentSubType.frequency = $(this).cron("value");
                    //    this.selectedSubTypeMaintenanceFrequency = $(this).cron("value");
                    //}//, useGentleSelect: false
                });
            }
        }
        // this.IsSubType= true;
    }
    onCronAdd()
    {
        $("body").append("#cronselector");
      //  $("#cronselector").u
      //  $("#cronselector").remove();


    }
    showDialogToAddForm() {
        this.displayDialogForm = true;
        this.selectedCalibration = null;
        this.CalibrationForm = new PrimeCalibrationForm('', '', '', '');
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
        if (this.newsubType) {
            this.EquipmentSubType.frequency = this.selectedSubTypeMaintenanceFrequency;
            this.EquipmentsubTypes.push(this.EquipmentSubType);
        }

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
            });
        // this.EquipmentSubType = null;
        this.displayDialog = false;
    }

    onCronInit()
    {
        if (this.EquipmentSubType.frequency != null && this.EquipmentSubType.frequency != "") {
            this.selectedSubTypeMaintenanceFrequency = this.EquipmentSubType.frequency;

            $("#selector").cron({

                initial: this.selectedSubTypeMaintenanceFrequency,
                onChange: function () {
                    this.selectedMaintenanceFrequency = $(this).cron("value");
                }, useGentleSelect: false
            });

        }
        else {
            this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
            $("#selector").cron({

                initial: this.selectedSubTypeMaintenanceFrequency,
                onChange: function () {
                    this.selectedSubTypeMaintenanceFrequency = $(this).cron("value");
                }, useGentleSelect: false
            });
        }
    }

    onRowSelect(event) {
        this.newsubType = false;
        this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
        this.EquipmentSubType = this.clonesubType(event.data);
     //   if (!this.cronInitialized) {
       //     this.cronInitialized = true;
            if (this.EquipmentSubType.frequency != null && this.EquipmentSubType.frequency != "") {
                this.EquipmentSubType.frequency = this.EquipmentSubType.frequency;
                this.selectedSubTypeMaintenanceFrequency = this.EquipmentSubType.frequency;
              //  this.onCronInit();

            }
            else
            {
               // this.cronInitialized = false;

                this.EquipmentSubType.frequency = "0 0 1 1 *";
                if (!this.cronInitialized) {
                    this.cronInitialized = true;
                    //this.onCronInit();
                }
            }

        //}
        //else
        //{
        //    this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
        //    this.EquipmentSubType.frequency = "0 0 1 1 *";

        //}
        //if (this.EquipmentSubType.frequency != null && this.EquipmentSubType.frequency != "" && !this.cronInitialized) {
        //    this.cronInitialized = true;
        //    this.onCronInit(this.EquipmentSubType.frequency);
        //    //$("#cronselector").cron({

        //    //    initial: this.EquipmentSubType.frequency,
        //    //    onChange: function () {
        //    //        //this.EquipmentSubType.frequency = $(this).cron("value");
        //    //        this.selectedSubTypeMaintenanceFrequency = $(this).cron("value");
        //    //    }, useGentleSelect: false
        //    //});
        //}
        //else
        //{
        //    this.cronInitialized = true;
        //    this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
        //    this.onCronInit(this.selectedSubTypeMaintenanceFrequency);
        //    //$("#cronselector").cron({

        //    //    initial: this.selectedSubTypeMaintenanceFrequency,
        //    //    onChange: function () {
        //    ////this.EquipmentSubType.frequency = $(this).cron("value");
        //    //                this.selectedSubTypeMaintenanceFrequency = $(this).cron("value");
        //    //    }, useGentleSelect: false
        //    //});
        //}
        //if ($("#cronselector") == undefined)
        //{  }


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

    constructor(public id, public name, public description, public calibrationFrequencyCronExpression) {
    }
}
