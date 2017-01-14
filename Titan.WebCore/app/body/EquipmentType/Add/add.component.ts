﻿//import {bootstrap} from '@angular/platform-browser-dynamic';
//import {AppComponent} from '../../../../app/app.component'
import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { DataTable, TabViewModule, DialogModule, SelectItem, Dropdown, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEquipmentSubtype } from '../../../shared/services/definitions/IEquipmentSubtype';
import { ICalibrationForm } from '../../../shared/services/definitions/ICalibrationForm';
//import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
    selector: 'add-equipmenttype',
    templateUrl: 'app/body/equipmenttype/Add/add.component.html'
})
export class AddComponent implements OnInit {

    displayDialog: boolean;
    EquipmentSubType: IEquipmentSubtype = new PrimeEquipmentSubType('', '', '', '', '', '','', '');
    CalibrationForm: ICalibrationForm = new PrimeCalibrationForm('', '', '','');
    selectedsubType: IEquipmentSubtype;
    newsubType: boolean;
    IsSubType: boolean;
    EquipmentsubTypes: IEquipmentSubtype[] = [];
    CalibrationForms: ICalibrationForm[] = [];
    username: string;
    details: string;
    id: string;
    description: any;
    msgs: Message[];
    entityType: string = '';
    entityId: string = '';
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
        private dataService: EquipmentTypeService,
        private router: Router

    ) {

        this.CalibrationForms = [];
        this.CalibrationForms.push({ id: '1', name: 'Audi', description: 'Audi', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '2', name: 'BMW', description: 'BMW', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '3', name: 'Fiat', description: 'Fiat', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '4', name: 'Ford', description: 'Ford', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '5', name: 'Honda', description: 'Honda', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '6', name: 'Jaguar', description: 'Jaguar', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '7', name: 'Mercedes', description: 'Mercedes', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '8', name: 'Renault', description: 'Renault', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '9', name: 'VW', description: 'VW', calibrationFrequencyCronExpression: '' });
        this.CalibrationForms.push({ id: '10', name: 'Volvo', description: 'Volvo', calibrationFrequencyCronExpression: '' });
        // this.selectedCalibration="BMW";
        this.route.params.subscribe(params => this.id = params['id']);
        this.model.id = this.id;
    }
    handleChange(event) {
    }
    ngOnInit() {
        //this.dataService.getById(this.id)
        //    .subscribe(res => {
        //        //this.formConfiguration = res.formConfiguration;
        //        //this.formObject = res.formObject;
        //        this.model = res;
        //        this.model.id = res.id;
        //        this.model.parentId = res.parentId;
        //        this.model.name = res.name;
        //        this.model.description = res.description;
        //        this.dataService.getSubTypesById(this.model.id)
        //            .subscribe(result => {
        //                this.EquipmentsubTypes = result.$values;
        //            });
        //    });

        //   this.EquipmentSubType = { name:'', description: '', calibrationform: '', frequency: ''}
    }
    onSubmit(formRef) {


        formRef.isDeleted = false;
        //let cronexp: any;
        //if (this.isMaintenaceFrequencySelected) {
        //    cronexp = $('#selector').cron("value");
        //}
        //else {
        //    cronexp = '';
        //}
        //if (!this.IsNewManufacturer) {
        //    this.manufacturerId = this.selectedEquipmentManufacturerId;
        //}
        //else {
        //    this.manufacturerId = '';
        //}
        let model = {
            Name: formRef.name,
            ParentId: null,
            Description: formRef.description

        };

        this.dataService.postAdd(model).subscribe(res => {
            if (res.isSuccess) {

                this.router.navigate(['equipmenttype/details/', res.result.id]);
            }
        });
    }


    onEdit() {

        this.dataService.postUpdate(this.model)
            .subscribe(res => {
                //this.model = res;
                //this.model.name = res.name;
                //this.model.description = res.description;
                //this.msgs = [];
                //this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
            });


        this.EquipmentsubTypes.forEach((subtype: any) => {
           // if (subtype.isdeleted =='' )
                this.dataService.postAdd(subtype)
                    .subscribe(res1 => {
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
        this.EquipmentSubType = new PrimeEquipmentSubType('', '', '', '', '', '','', this.id);
        this.displayDialog = true;
        // this.IsSubType= true;
    }
    showDialogToAddForm() {
        this.displayDialogForm = true;
        this.selectedCalibration = null;
        this.CalibrationForm = new PrimeCalibrationForm('', '', '','');
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
        let newType = new PrimeEquipmentSubType(sub.id, sub.isdeleted, sub.name, sub.description, sub.calibrationform, sub.frequency, sub.frequencyDescription, sub.parentId);
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

    constructor(public id, public isdeleted, public name, public description, public calibrationform, public frequency,public frequencyDescription, public parentId) {
    }
}
class PrimeCalibrationForm implements ICalibrationForm {

    constructor(public id, public name, public description,public calibrationFrequencyCronExpression) {
    }
}