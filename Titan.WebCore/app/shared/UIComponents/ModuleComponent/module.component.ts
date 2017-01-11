import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTable, LazyLoadEvent, MessagesModule, Message, DropdownModule, Dropdown, ConfirmationService} from 'primeng/primeng';
import { TitanSpinnerComponent } from '../SpinnerComponent/spinner.component';
import { ModuleService } from '../../../shared/services/module.service';
import { ModuleTypeService } from '../../../shared/services/moduleType.service';
import { ModuleItemService } from '../../../shared/services/moduleItem.service';
import { ModuleItemTypeEnum } from '../../../shared/Enum/module-item-type.enum';
import { titanApiUrl } from '../../../shared/services/apiurlconst/titanapiurl';
import { IModule } from '../../../shared/services/definitions/IModule';


@Component({
    selector: 'module-component',
    templateUrl: 'app/shared/UIComponents/ModuleComponent/module.component.html'
})
export class ModuleComponent {
    @Input()
    title: string = "Add Module";
    @Input()
    parentWillSaveModule: boolean = false;
    @Input()
    moduleTypeId: string = "";
    
    titanApiUrl: any = titanApiUrl;
    @Input()
    public addEditModuleText: string = "Add Module";
    @Output() onAddModuleComplete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCancelModuleComplete: EventEmitter<any> = new EventEmitter<any>();
    public isAddNewItemRowVisible: boolean;
    msgs: Message[];
    moduleItemTypes: any;
    selectedCategory: any;
    navigateToDetails = new EventEmitter();
    moduleDetails: IModule;

    constructor(private moduleService: ModuleService, private confirmationService: ConfirmationService, private moduleItemService: ModuleItemService){}
    ngOnInit() { 
        this.moduleDetails = <IModule>{};
        //this.moduleDetails.modu
        this.getModuleItemTypes();
        //this.getModules();
    }

    onAddNewItem() {
        this.isAddNewItemRowVisible = true;
    }

    onAddItemComplete(moduleItem) {
        if (this.moduleDetails.moduleItems == undefined)
            this.moduleDetails.moduleItems = new Array();
        this.moduleDetails.moduleItems.push(moduleItem);
        this.isAddNewItemRowVisible = true;
    }

    onCancelAddItemComplete(event) {
        this.isAddNewItemRowVisible = false;
    }

    onEditItemComplete(moduleItem) {

    }

    onCancelEditItemComplete(event) {
        //this.isAddNewItemRowVisible = false;
    }

    onCategoryChange(event) {
        // console.log('------event------------', event)
        this.selectedCategory = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }

    getModuleItemTypes() {
        //    userRoles
        this.moduleItemService.getModuleItemTypes().subscribe(response => {
            this.moduleItemTypes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Item Type",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.moduleItemTypes = resultMap;
            }
        });
    }

    onAddModule() {
        if (!this.parentWillSaveModule) {
            this.moduleService.postAdd(this.moduleDetails).subscribe(response => {
                if (response.isSuccess) {
                    this.moduleDetails.id = response.result;
                    var moduleModuleTypeMap = {
                        moduleId: response.result,
                        moduleTypeId: this.moduleTypeId
                    };
                    this.moduleService.postModuleModuleTypeMap(moduleModuleTypeMap).subscribe(response => {
                        if (response.isSuccess) {
                            this.onAddModuleComplete.emit(this.moduleDetails);
                            this.moduleDetails = <IModule>{};
                        }
                    });
                }
            });
        } else {
            this.onAddModuleComplete.emit(this.moduleDetails);
            this.moduleDetails = <IModule>{};
        }
    }

    onCancel() {
        this.onCancelModuleComplete.emit(true);
        this.moduleDetails = <IModule>{};
    }

    //onUpload(event) {
    //    for (let file of event.files) {
    //        this.uploadedFiles.push(file);
    //    }
    //    this.getModules();
    //    this.msgs = [];
    //    this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    //}

    //getModules() {
    //    if (this.entityId != undefined) {
    //        this.moduleService.getDocumentsByEntityIdentifierId(this.entityId)
    //            .subscribe(response => {
    //                console.log('-----------  Modules------------------', response);
    //                if (response.length > 0)
    //                    this.uploadedModules = response;
    //                else
    //                    this.uploadedModules = null;
    //            });
    //    }
    //}

    //onDelete(Module: IModule) {
    //    //console.log('--------------TestFacilityModule id0------------', TestFacilityModule);
    //    this.confirmationService.confirm({
    //        message: 'Do you want to delete this module?',
    //        header: 'Delete Confirmation',
    //        icon: 'fa fa-trash',
    //        accept: () => {
    //            this.moduleService.DeleteDocumentById(Module.id)
    //                .subscribe(res => {
    //                    if (res.isSuccess) {
    //                        this.getModules();
    //                        this.msgs = [];
    //                        this.msgs.push({ severity: 'info', summary: 'Confirmed', detail: 'Module deleted' });
    //                    }
    //                });
    //        }
    //    });
        
    //}
}