//import {bootstrap} from '@angular/platform-browser-dynamic';
//import {AppComponent} from '../../../../app/app.component'

import {EquipmentTypeService} from '../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
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
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {IEquipmentSubtype} from '../../../shared/services/definitions/IEquipmentSubtype';
import {ICalibrationForm} from '../../../shared/services/definitions/ICalibrationForm';

import {LoggerService} from "../../../shared/services/logger/logger.service";
import {EntityIdentifierService} from "../../../shared/services/entityIdentifier.service";
import {FormSchemaCategoryService} from "../../../shared/services/formSchemaCategory.service";
import {BreadCrumbsService} from '../../../shared/services/breadCrumbs/breadCrumbs.service';

import {Observable} from 'rxjs/Observable';
import {ITitanSelectItem} from "../../../shared/services/definitions/ITitanSelectItem";
import {EntityEventService} from "../../../shared/services/entityEvent.service";
import {IFormSchemaCategoryCalibrationForms} from "../../../shared/services/definitions/formDefinitions/IFormSchemaCategoryCalibrationForms";
import {IEquipmentTypeFormMap} from "../../../shared/services/definitions/EquipmentType/IEquipmentTypeFormMap";

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
    EquipmentSubType: IEquipmentSubtype = new PrimeEquipmentSubType('', '', '', '', '', '', '', '');
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
    isCronControlInitialized: boolean;
    isSubTypeCronControlInitialized: boolean;
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
    selectedFormItem: any;
    selectedSubTypeFormItem: any;
    //endregion

    constructor(private breadCrumbsService: BreadCrumbsService,
                private route: ActivatedRoute,
                private dataService: EquipmentTypeService,
                private entityIdentifierService: EntityIdentifierService,
                private formSchemaCategoryService: FormSchemaCategoryService,
                private entityEventService:EntityEventService,
                private ls: LoggerService) {
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            //let equipmentTypeDetailsBreadCrumb = breadC.filter(filter =>
            //  filter.pageName === 'EquipmentTypeDetailsPage')[0];

            this.breadcrumbs = [];
            //this.breadcrumbs = equipmentTypeDetailsBreadCrumb.items;

            this.breadcrumbsHome = {routerLink: ['/']};
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


        this.CalibrationForms.push({id: '2', name: 'BMW', description: 'BMW', calibrationFrequencyCronExpression: ''});
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
        this.CalibrationForms.push({id: '9', name: 'VW', description: 'VW', calibrationFrequencyCronExpression: ''});
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
        this.getEquiptmentForms(this.entityIdentifierModel.id);
    }

    dataServiceGetById(res) {
        this.model = res;
        this.model.id = res.id;
        this.model.parentId = res.parentId;
        this.model.name = res.name;
        this.model.description = res.description;
        this.model.frequency = res.frequency;
        this.frequencyInit(this.model.frequency);
        // this.onCronInit();
        this.dataService.getSubTypesById(this.model.id)
            .subscribe(result => {
                this.EquipmentsubTypes = result.$values;
            });
    }

    getEquiptmentForms(entityIdentifierId) {
        this.formSchemaCategoryService.getCalibrationFormsByEntityIdentifierId(entityIdentifierId)
            .subscribe(res => {
                this.ls.logConsole("FormSchemaCategory By EntityIdentifierId List", res);
                this.calibrationFormItems.push({label:'Please select a Form', value:'', entityIdentifierId: ''});
                this.calibrationSubTypeFormItems.push({label:'Please select a Form', value:'', entityIdentifierId: ''});

                if (res.isSuccess) {
                    this.calibrationFormsList = res.result;
                    res.result.map(item => {
                        let newItem = {label:item.name, value: item.id, entityIdentifierId: item.entityIdentifierId};
                        this.calibrationFormItems.push(newItem);
                        this.calibrationSubTypeFormItems.push(newItem);
                    });
                }
            });
    }

    onEdit() {

        let modelbody: any = {
            id: this.model.id,

            parentId: null,
            description: this.model.description,
            name: this.model.name,
            frequency: this.selectedMaintenanceFrequency
        };
        this.dataService.postUpdate(modelbody)
            .subscribe(res => {
                if (res.isSuccess) {
                    this.ls.logConsole("ModelBody ------", res);

                    if (this.selectedFormItem) {
                        let selectedCalibrationFormInfo: IFormSchemaCategoryCalibrationForms = this.calibrationFormsList
                            .filter(filter => filter.id === this.selectedFormItem)[0];
                        let calibrationFormMap: IEquipmentTypeFormMap = {
                            equipmentTypeId: this.model.id,
                            formSchemaCategoryId: selectedCalibrationFormInfo.id,
                            formSchemaId: selectedCalibrationFormInfo.formSchemaId,
                            entityEventId: selectedCalibrationFormInfo.entityEventId,
                            entityIdentifierId: selectedCalibrationFormInfo.entityIdentifierId,
                            isDeleted: false
                        };
                        this.dataService.postSaveCalibrationFormsMap(calibrationFormMap)
                            .subscribe(resFormMap => {
                                this.ls.logConsole("CalibrationFormMapSave Result ------", resFormMap);
                            });
                    }
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'saved', detail: '' });
                }
            });
    }

    showHideCronPicker() {
        console.log("--inside cronpicker show hide");


        if (this.isMaintenaceFrequencySelected) {
            if (!this.isCronControlInitialized) {
                $("#selector").cron({

                    initial: this.selectedMaintenanceFrequency,
                    onChange: function () {
                        this.selectedMaintenanceFrequency = $(this).cron("value");
                    }, useGentleSelect: false
                });
            }
        } else {
            // Hide the cron
        }
    }

    showSubTypeHideCronPicker() {
        console.log("--inside cronpicker show hide");

        if (this.isSubTypeMaintenanceFrequencySelected) {
            if (!this.isSubTypeCronControlInitialized) {
                $("#selector").cron({

                    initial: this.selectedMaintenanceFrequency,
                    onChange: function () {
                        this.selectedMaintenanceFrequency = $(this).cron("value");
                    }, useGentleSelect: false
                });
            }
        } else {
            // Hide the cron
        }
    }



    frequencyInit(cronExp) {
        var angularRef = this;
        if (cronExp != null && cronExp != "") {
            this.selectedMaintenanceFrequency = cronExp;

            this.isMaintenaceFrequencySelected = true;
            $("#selector").cron({

                initial: this.selectedMaintenanceFrequency,
                onChange: function () {
                    angularRef.selectedMaintenanceFrequency = $(this).cron("value");
                }, useGentleSelect: false
            });
        }
        else
        {
            this.isMaintenaceFrequencySelected = false;
            this.selectedMaintenanceFrequency = "0 0 1 1 *";
        }
    }

    showDialogToAdd() {
        this.newsubType = true;
        this.selectedCalibration = null;
        this.EquipmentSubType = new PrimeEquipmentSubType('', '', '', '', '', '', '', this.id);
        this.displayDialog = true;
        this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";

        this.onCronInit(this.EquipmentSubType.frequency);
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
        //   this.EquipmentSubType = EquipmentSubType.name;
        if (this.newsubType) {

            if (this.isSubTypeMaintenanceFrequencySelected) {
                this.EquipmentSubType.frequency = this.selectedSubTypeMaintenanceFrequency;
            }
            else
            { this.EquipmentSubType.frequency = null; }

            this.EquipmentSubType.frequency = this.selectedSubTypeMaintenanceFrequency;
            this.EquipmentSubType.calibrationform = this.selectedSubTypeFormItem;

            this.EquipmentsubTypes.push(this.EquipmentSubType);
            this.dataService.postAdd(this.EquipmentSubType).subscribe(res => {
                if (res.isSuccess) {
                    if (this.selectedSubTypeFormItem) {
                        let selectedCalibrationFormInfo: IFormSchemaCategoryCalibrationForms = this.calibrationFormsList
                            .filter(filter => filter.id === this.selectedSubTypeFormItem)[0];
                        let calibrationFormMap: IEquipmentTypeFormMap = {
                            equipmentTypeId: this.model.id,
                            equipmentSubTypeId: res.result.id,
                            formSchemaCategoryId: selectedCalibrationFormInfo.id,
                            formSchemaId: selectedCalibrationFormInfo.formSchemaId,
                            entityEventId: selectedCalibrationFormInfo.entityEventId,
                            entityIdentifierId: selectedCalibrationFormInfo.entityIdentifierId,
                            isDeleted: false
                        };
                        this.dataService.postSaveCalibrationFormsMap(calibrationFormMap)
                            .subscribe(resFormMap => {
                                this.ls.logConsole("CalibrationFormMapSave Result ------", resFormMap);
                            });

                    this.dataService.getSubTypesById(this.model.id)
                        .subscribe(result => {
                            this.EquipmentsubTypes = result.$values;
                            this.EquipmentsubTypes[this.EquipmentsubTypes.length-1].calibrationform = selectedCalibrationFormInfo.name;

                        });
                    }
                    this.selectedSubTypeFormItem ={};
                    this.msgs = [];
                    this.msgs.push({severity: 'success', summary: 'Added', detail: ''});

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
                    this.msgs.push({severity: 'success', summary: 'saved', detail: ''});

                }
            });

        }
        this.EquipmentSubType = new PrimeEquipmentSubType('', '', '', '', '', '', '', this.id);
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

        }
        else {
            this.isSubTypeMaintenanceFrequencySelected = false;
            this.selectedSubTypeMaintenanceFrequency = "0 0 1 1 *";

        }

        //$("#cronselector").remove();
       

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
        else {
            // this.cronInitialized = false;

            this.EquipmentSubType.frequency = "0 0 1 1 *";
            if (!this.cronInitialized) {
                this.cronInitialized = true;
                //this.onCronInit();
            }
        }
        this.onCronInit(this.EquipmentSubType.frequency);


        this.EquipmentSubType.calibrationform = event.data.calibrationform;
        this.selectedCalibration = event.data.calibrationform;
        this.displayDialog = true;
    }

    clonesubType(sub: IEquipmentSubtype): IEquipmentSubtype {
        let newType = new PrimeEquipmentSubType(sub.id, sub.isdeleted, sub.name, sub.description, sub.calibrationform, sub.frequency, sub.frequencyDescription, sub.parentId);
        for (let prop in sub) {
            newType[prop] = sub[prop];
        }
        return newType;
    }

    findSelectedCarIndex(): number {
        return this.EquipmentsubTypes.indexOf(this.selectedsubType);
    }

    cancelDialog() {
        this.displayDialog = false;
        this.selectedSubTypeFormItem = {};
    }
}

class PrimeEquipmentSubType implements IEquipmentSubtype {

    constructor(public id, public isdeleted, public name, public description, public calibrationform, public frequency, public frequencyDescription, public parentId) {
    }
}
class PrimeCalibrationForm implements ICalibrationForm {

    constructor(public id, public name, public description, public calibrationFrequencyCronExpression) {
    }
}
