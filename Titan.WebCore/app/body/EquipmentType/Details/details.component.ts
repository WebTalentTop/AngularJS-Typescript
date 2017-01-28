//import {bootstrap} from '@angular/platform-browser-dynamic';
//import {AppComponent} from '../../../../app/app.component'

import { EquipmentTypeService } from '../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
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
    GrowlModule,
    MenuItem
} from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IEquipmentSubtype, PrimeEquipmentSubType } from '../../../shared/services/definitions/IEquipmentSubtype';
import { ICalibrationForm, PrimeCalibrationForm } from '../../../shared/services/definitions/ICalibrationForm';

import { LoggerService } from "../../../shared/services/logger/logger.service";
import { EntityIdentifierService } from "../../../shared/services/entityIdentifier.service";
import { FormSchemaCategoryService } from "../../../shared/services/formSchemaCategory.service";
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';

import { Observable } from 'rxjs/Observable';
import { ITitanSelectItem } from "../../../shared/services/definitions/ITitanSelectItem";
import { EntityEventService } from "../../../shared/services/entityEvent.service";
import { IFormSchemaCategoryCalibrationForms } from "../../../shared/services/definitions/formDefinitions/IFormSchemaCategoryCalibrationForms";
import { IEquipmentTypeFormMap } from "../../../shared/services/definitions/EquipmentType/IEquipmentTypeFormMap";
import { IEquipmentSubTypeFormMapSave } from "../../../shared/services/definitions/EquipmentType/IEquipmentSubTypeFormMapSave";

//import { disableDeprecatedForms, provideForms } from '@angular/forms';

declare var useGentleSelect: false;

@Component({
    selector: 'details-testfacility',
    templateUrl: 'app/body/equipmenttype/Details/details.component.html'
})
export class DetailsComponent implements OnInit {
    //region Class Variables
    entityIdentifierName: string = "Equipment";
    entityIdentifierModel: any = {};
    //useGentleSelect:boolean = false;
    displayDialog: boolean;
    EquipmentSubType: IEquipmentSubtype = new PrimeEquipmentSubType(false, '');
    CalibrationForm: ICalibrationForm = new PrimeCalibrationForm('', '', '', '');
    selectedsubType: IEquipmentSubtype;
    newsubType: boolean;
    IsSubType: boolean;
    EquipmentsubTypes: IEquipmentSubtype[] = [];
    CalibrationForms: ICalibrationForm[] = [];

    formSchemaGridMF: any;

    username: string;
    details: string;
    id: string;
    cronInitialized: boolean = false;
    msgs: Message[] = [];
    entityType: string = '';
    entityId: string = '';
    filepath: string = "TestFacility";
    displayDialogForm: boolean;
    isMaintenaceFrequencySelected: boolean;
    isSubTypeMaintenanceFrequencySelected: boolean;
    emptyguid: any = "00000000-0000-0000-0000-000000000000";
    selectedCalibration: string = '';
    selectedMaintenanceFrequency: any;
    cities: SelectItem[];
    selectedcity: any;
    isCronControlInitialized: boolean = false;
    isSubTypeCronControlInitialized: boolean = false;
    added: any;
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
    calibrationFormsList: IFormSchemaCategoryCalibrationForms[] = [];
    calibrationFormItems: ITitanSelectItem[] = [];
    calibrationSubTypeFormItems: ITitanSelectItem[] = [];
    selectedFormItem: string;
    selectedSubTypeFormItem: string;
    //endregion

    constructor(private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private dataService: EquipmentTypeService,
        private entityIdentifierService: EntityIdentifierService,
        private formSchemaCategoryService: FormSchemaCategoryService,
        private entityEventService: EntityEventService,
        private ls: LoggerService) {
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let equipmentTypeDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'EquipmentTypeDetailsPage')[0];

            this.breadcrumbs = [];
            this.breadcrumbs = equipmentTypeDetailsBreadCrumb.items;

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

        this.ls.setShow(true);


        this.CalibrationForms = [];


        this.CalibrationForms.push({
            id: '1',
            name: 'Audi',
            description: 'Audi',
            calibrationFrequencyCronExpression: ''
        });

        //this.CalibrationForms.push({ id: '1', name: 'Audi', description: 'Audi', calibrationFrequencyCronExpression: '' });
        //this.CalibrationForms.push({ id: '2', name: 'BMW', description: 'BMW', calibrationFrequencyCronExpression: '' });
        //this.CalibrationForms.push({ id: '3', name: 'Fiat', description: 'Fiat', calibrationFrequencyCronExpression: '' });
        //this.CalibrationForms.push({ id: '4', name: 'Ford', description: 'Ford', calibrationFrequencyCronExpression: ''});
        //this.CalibrationForms.push({ id: '5', name: 'Honda', description: 'Honda', calibrationFrequencyCronExpression: '' });
        //this.CalibrationForms.push({ id: '6', name: 'Jaguar', description: 'Jaguar', calibrationFrequencyCronExpression: '' });
        //this.CalibrationForms.push({ id: '7', name: 'Mercedes', description: 'Mercedes', calibrationFrequencyCronExpression: '' });
        //this.CalibrationForms.push({ id: '8', name: 'Renault', description: 'Renault', calibrationFrequencyCronExpression: '' });
        //this.CalibrationForms.push({ id: '9', name: 'VW', description: 'VW', calibrationFrequencyCronExpression: '' });
        //this.CalibrationForms.push({ id: '10', name: 'Volvo', description: 'Volvo', calibrationFrequencyCronExpression: ''});


        this.CalibrationForms.push({ id: '2', name: 'BMW', description: 'BMW', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({
            id: '3',
            name: 'Fiat',
            description: 'Fiat',
            calibrationFrequencyCronExpression: ''
        });
        this.CalibrationForms.push({
            id: '4',
            name: 'Ford',
            description: 'Ford',
            calibrationFrequencyCronExpression: ''
        });
        this.CalibrationForms.push({
            id: '5',
            name: 'Honda',
            description: 'Honda',
            calibrationFrequencyCronExpression: ''
        });
        this.CalibrationForms.push({
            id: '6',
            name: 'Jaguar',
            description: 'Jaguar',
            calibrationFrequencyCronExpression: ''
        });
        this.CalibrationForms.push({
            id: '7',
            name: 'Mercedes',
            description: 'Mercedes',
            calibrationFrequencyCronExpression: ''
        });
        this.CalibrationForms.push({
            id: '8',
            name: 'Renault',
            description: 'Renault',
            calibrationFrequencyCronExpression: ''
        });
        this.CalibrationForms.push({ id: '9', name: 'VW', description: 'VW', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({
            id: '10',
            name: 'Volvo',
            description: 'Volvo',
            calibrationFrequencyCronExpression: ''
        });


        this.route.params.subscribe(params => this.id = params['id']);
        this.model.id = this.id;
    }

    handleChange(event) {
    }

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    ngOnInit() {
        let entityIdentifierServiceCall = this.entityIdentifierService.getByNameForForms(this.entityIdentifierName);
        let dataServiceCall = this.dataService.getById(this.id);

        Observable.forkJoin([entityIdentifierServiceCall, dataServiceCall])
            .subscribe(results => {
                let entityIdentifierResult = results[0];
                let dataServiceGetByIdResult = results[1];

                this.ls.logConsole("EntityIdentifier Data By Name ----------", entityIdentifierResult);
                this.entityIdentifierModelSet(entityIdentifierResult.result);

                this.dataServiceGetById(dataServiceGetByIdResult);
            });
        //   this.EquipmentSubType = { name:'', description: '', calibrationform: '', frequency: ''}
    }

    entityIdentifierModelSet(model) {
        this.entityIdentifierModel = model;

    }

    dataServiceGetById(resFromPrev) {
        this.model = resFromPrev;
        this.model.id = resFromPrev.id;
        this.model.parentId = resFromPrev.parentId;
        this.model.name = resFromPrev.name;
        this.model.calibrationForm = resFromPrev.calibrationForm;
        this.model.description = resFromPrev.description;
        this.model.frequency = resFromPrev.frequency;
        if (this.model.frequency != null)
        { this.isMaintenaceFrequencySelected = true; }
        else
        { this.isMaintenaceFrequencySelected = false; }
        this.frequencyInit(this.model.frequency);


        this.dataService.getSubTypesById(this.model.id)
            .subscribe(result => {
                this.EquipmentsubTypes = result.$values;
            });
        //this.getEquiptmentForms(this.entityIdentifierModel.id);
        this.formSchemaCategoryService.getCalibrationFormsByEntityIdentifierId(this.entityIdentifierModel.id)
            .subscribe(res => {
                this.ls.logConsole("FormSchemaCategory By EntityIdentifierId List", res);

                if (res.isSuccess && res.result) {
                    this.calibrationFormItems.push({ label: 'Please select a Form', value: '', entityIdentifierId: '' });
                    this.calibrationSubTypeFormItems.push({
                        label: 'Please select a Form',
                        value: '',
                        entityIdentifierId: ''
                    });

                    this.calibrationFormsList = res.result;
                    if (this.calibrationFormsList.length > 0) {
                        res.result.map(item => {
                            let newItem = {
                                label: item.name,
                                value: item.formSchemaId,
                                entityIdentifierId: item.entityIdentifierId
                            };
                            this.calibrationFormItems.push(newItem);
                            this.calibrationSubTypeFormItems.push(newItem);
                        });

                        if (resFromPrev.calibrationForm) {
                            let selectedCalibrationFormInfo: IFormSchemaCategoryCalibrationForms = this.calibrationFormsList
                                .filter(filter => filter.name === resFromPrev.calibrationForm)[0];

                            if (selectedCalibrationFormInfo) {
                                this.selectedFormItem = selectedCalibrationFormInfo.formSchemaId;
                            }
                        }
                    }
                }
            });
    }

    getEquiptmentForms(entityIdentifierId) {

    }

    onEdit() {

        let modelbody: any = {
            id: this.model.id,

            parentId: null,
            description: this.model.description,
            name: this.model.name,
            frequency: this.selectedMaintenanceFrequency
        };

        let calibrationFormMap: IEquipmentTypeFormMap;
        if (this.selectedFormItem) {
            let selectedCalibrationFormInfo: IFormSchemaCategoryCalibrationForms = this.calibrationFormsList
                .filter(filter => filter.formSchemaId === this.selectedFormItem)[0];
            calibrationFormMap = {
                equipmentTypeId: this.model.id,
                formSchemaCategoryId: selectedCalibrationFormInfo.id,
                formSchemaId: selectedCalibrationFormInfo.formSchemaId,
                entityEventId: selectedCalibrationFormInfo.entityEventId,
                entityIdentifierId: selectedCalibrationFormInfo.entityIdentifierId,
                isDeleted: false
            };
            /*this.dataService.postSaveCalibrationFormsMap(calibrationFormMap)
             .subscribe(resFormMap => {
             this.ls.logConsole("CalibrationFormMapSave Result ------", resFormMap);
             });*/
        }

        let equipmentSave: IEquipmentSubTypeFormMapSave = {
            equipmentType: modelbody,
            formMapInfo: calibrationFormMap
        };

        this.dataService.postUpdate(equipmentSave)
            .subscribe(res => {
                if (res.isSuccess) {
                    this.ls.logConsole("ModelBody ------", res);


                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'saved', detail: '' });
                }
            });
    }

    showHideCronPicker() {
        console.log("--inside cronpicker show hide");
        var selfRef = this;

        if (this.isMaintenaceFrequencySelected) {
            if (!this.isCronControlInitialized) {
                $("#selector").cron({

                    initial: this.selectedMaintenanceFrequency,
                    onChange: function () {
                        selfRef.selectedMaintenanceFrequency = $(this).cron("value");
                    }, useGentleSelect: false
                });
                this.isCronControlInitialized = true;
            }
        } else {
            // Hide the cron
        }
    }

    showSubTypeHideCronPicker(subfrequency) {
        console.log("--inside cronpicker show hide");
        var selfRef = this;
        selfRef.isSubTypeMaintenanceFrequencySelected = subfrequency;

        if (selfRef.isSubTypeMaintenanceFrequencySelected) {
            if (!this.isSubTypeCronControlInitialized) {
                $("#cronselector").cron({

                    initial: this.selectedSubTypeMaintenanceFrequency,
                    onChange: function () {
                        selfRef.selectedSubTypeMaintenanceFrequency = $(this).cron("value");
                    }, useGentleSelect: false
                });
                this.isSubTypeCronControlInitialized = true;
            }
        } else {
            // Hide the cron
        }
    }


    frequencyInit(cronExp) {
        //  var angularRef = this;
        if (cronExp != null && cronExp != "") {
            this.selectedMaintenanceFrequency = cronExp;

            this.isMaintenaceFrequencySelected = true;
            $("#selector").cron({

                initial: this.selectedMaintenanceFrequency,
                onChange: function () {
                    this.selectedMaintenanceFrequency = $(this).cron("value");
                }, useGentleSelect: false
            });
            this.isCronControlInitialized = true;
        }
        else {
            this.isMaintenaceFrequencySelected = false;
            this.selectedMaintenanceFrequency = "0 0 1 1 *";
        }
    }

    showDialogToAdd() {
        var selfRef = this;
        this.newsubType = true;
        this.selectedCalibration = null;
        this.EquipmentSubType = new PrimeEquipmentSubType(false, '');
        this.displayDialog = true;
        this.isSubTypeCronControlInitialized = false;
        selfRef.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
        this.isSubTypeMaintenanceFrequencySelected = false;
        this.EquipmentSubType.frequency = "";
        this.showSubTypeHideCronPicker(this.isSubTypeMaintenanceFrequencySelected);
       // this.onCronInit(this.EquipmentSubType.frequency);
    }

    showDialogToAddForm() {
        this.displayDialogForm = true;
        this.selectedCalibration = null;
        this.CalibrationForm = new PrimeCalibrationForm('', '', '', '');
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
        var selfRef = this;
        //   this.EquipmentSubType = EquipmentSubType.name;
        if (this.newsubType) {
            let selectedCalibrationFormInfo: IFormSchemaCategoryCalibrationForms = {
                id: '',
                name: '',
                entityIdentifierId: '',
                formSchemaId: '',
                entityEventId: '',
                isDeleted: false
            };
            let calibrationFormMap: IEquipmentTypeFormMap = {
                equipmentTypeId: '',
                formSchemaCategoryId: '',
                formSchemaId: '',
                entityEventId: '',
                entityIdentifierId: '',
                isDeleted: false
            }
            if (this.selectedSubTypeFormItem) {
                selectedCalibrationFormInfo = this.calibrationFormsList
                    .filter(filter => filter.formSchemaId === this.selectedSubTypeFormItem)[0];
                calibrationFormMap = {
                    equipmentTypeId: this.model.id,
                    formSchemaCategoryId: selectedCalibrationFormInfo.id,
                    formSchemaId: selectedCalibrationFormInfo.formSchemaId,
                    entityEventId: selectedCalibrationFormInfo.entityEventId,
                    entityIdentifierId: selectedCalibrationFormInfo.entityIdentifierId,
                    isDeleted: false
                };
                /* this.dataService.postSaveCalibrationFormsMap(calibrationFormMap)
                 .subscribe(resFormMap => {
                 this.ls.logConsole("CalibrationFormMapSave Result ------", resFormMap);
                 });*/
            }

            if (this.isSubTypeMaintenanceFrequencySelected) {
                this.EquipmentSubType.frequency = this.selectedSubTypeMaintenanceFrequency;
            }
            else {
                this.EquipmentSubType.frequency = null;
            }

            this.EquipmentSubType.frequency = this.selectedSubTypeMaintenanceFrequency;
            this.EquipmentSubType.calibrationform = selectedCalibrationFormInfo.name;
            this.EquipmentSubType.parentId = this.model.id;

            this.EquipmentsubTypes.push(this.EquipmentSubType);
            let equipmentSubTypeFormMabSave: IEquipmentSubTypeFormMapSave = {
                equipmentType: this.EquipmentSubType,
                formMapInfo: calibrationFormMap
            }
            this.dataService.postAdd(equipmentSubTypeFormMabSave).subscribe(res => {
                if (res.isSuccess) {

                    this.dataService.getSubTypesById(this.model.id)
                        .subscribe(result => {
                            this.EquipmentsubTypes = result.$values;

                        });
                    this.selectedSubTypeFormItem = '';
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'Added', detail: '' });

                }

            });
        }
        else {
            this.EquipmentSubType.frequency = this.selectedSubTypeMaintenanceFrequency;
            this.EquipmentsubTypes[this.findSelectedCarIndex()] = this.EquipmentSubType;
            this.dataService.postUpdate(this.EquipmentSubType).subscribe(res => {

                if (res.isSuccess) {
                    this.dataService.getSubTypesById(this.model.id)
                        .subscribe(result => {
                            this.EquipmentsubTypes = result.$values;

                        });
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'saved', detail: '' });

                }
            });

        }
        this.EquipmentSubType = new PrimeEquipmentSubType(false, '', this.id);
        //this.EquipmentSubType = null;
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


    onCronInit(cronExpression) {
        var selfRef = this;
        //$("#cronselector").remove();
        //let cronContainer = $("<div id='cronselector'></div>");
        //$("#cronSelectorPlaceHolder").append(cronContainer);

        if (cronExpression !== null && cronExpression !== "") {
            this.isSubTypeMaintenanceFrequencySelected = true;
            this.selectedSubTypeMaintenanceFrequency = cronExpression;
            $("#cronselector").cron({
                initial: this.selectedSubTypeMaintenanceFrequency,
                onChange: function () {
                    selfRef.selectedSubTypeMaintenanceFrequency = $(this).cron("value");
                },
                useGentleSelect: false
            });
            this.isSubTypeCronControlInitialized = true;
        }
        else {
            this.isSubTypeMaintenanceFrequencySelected = false;
            this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";

        }

        //$("#cronselector").remove();


    }

    onRowSelect(event) {
        var selfRef = this;
        this.newsubType = false;
        //this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
        this.EquipmentSubType = this.clonesubType(event.data);

        //   if (!this.cronInitialized) {
        //     this.cronInitialized = true;
        if (this.EquipmentSubType.frequency != null && this.EquipmentSubType.frequency != "") {
            this.EquipmentSubType.frequency = this.EquipmentSubType.frequency;
            selfRef.selectedSubTypeMaintenanceFrequency = this.EquipmentSubType.frequency;
            this.isSubTypeMaintenanceFrequencySelected = true;
            //  this.onCronInit();

        }
        else {
            // this.cronInitialized = false;

           // this.EquipmentSubType.frequency = "0 0 1 1 *";
            selfRef.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";
            this.isSubTypeMaintenanceFrequencySelected = true;
            if (!this.isSubTypeCronControlInitialized) {
                this.isSubTypeCronControlInitialized = true;
                //this.onCronInit();
            }
        }
 //       this.onCronInit(this.EquipmentSubType.frequency);


        this.EquipmentSubType.calibrationform = event.data.calibrationform;
        this.selectedCalibration = event.data.calibrationform;
        this.displayDialog = true;
    }

    clonesubType(sub: IEquipmentSubtype): IEquipmentSubtype {
        let newType: IEquipmentSubtype = JSON.parse(JSON.stringify(sub));// new PrimeEquipmentSubType(sub.isDeleted, sub.name, sub.id, sub.description, sub.calibrationform, sub.frequency, sub.frequencyDescription, sub.parentId);
        /*  for (let prop in sub) {
              newType[prop] = sub[prop];
          }*/
        return newType;
    }

    findSelectedCarIndex(): number {
        return this.EquipmentsubTypes.indexOf(this.selectedsubType);
    }

    cancelDialog() {
        this.displayDialog = false;
        this.selectedSubTypeFormItem = '';
    }
}
