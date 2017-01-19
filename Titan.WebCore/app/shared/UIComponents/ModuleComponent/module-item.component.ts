import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTable, LazyLoadEvent, MessagesModule, Message, DropdownModule, Dropdown, ConfirmationService } from 'primeng/primeng';
import { IModuleItem, IMultiSelectViewData, IModuleItemOption } from '../../../shared/services/definitions/IModule';
import { ModuleItemService } from '../../../shared/services/moduleItem.service';
import { ModuleItemOptionService } from '../../../shared/services/moduleItemOption.service';
import { ModuleItemTypeEnum } from '../../../shared/Enum/module-item-type.enum';

@Component({
    selector: 'module-item-component',
    templateUrl: 'app/shared/UIComponents/ModuleComponent/module-item.component.html'
})
export class ModuleItemComponent {
    @Input()
    title: string = "Add Module Item";
    @Input()
    isAdd: boolean = true;
    @Input()
    isAddModule: boolean = true;
    @Input()
    saveButtonLabel: string = "Add Module Item";
    public selectedItemType: IMultiSelectViewData;
    @Output() onAddComplete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCancelComplete: EventEmitter<any> = new EventEmitter<any>();
    public isAddNewItemOptionRowVisible: boolean;
    public optionName: string;
    @Input()
    public moduleItemDetails: IModuleItem;
    public moduleItemTypes: IMultiSelectViewData[];
    public editOption: IModuleItemOption;
    public isEditItemOptionVisible: boolean;
    constructor(private moduleItemService: ModuleItemService, private moduleItemOptionService: ModuleItemOptionService) { }

    ngOnInit() { 
        this.moduleItemDetails = <IModuleItem>{};
        this.getModuleItemTypes();
    }

    onEditModuleItemOption(itemOption) {
        this.editOption = itemOption;
        this.isEditItemOptionVisible = true;
    }

    onEditItemOptionCancelComplete() {
        this.isEditItemOptionVisible = true;
    }

    onDeleteModuleItemOption(itemOption) {
        if (this.isAddModule) {
            var index = this.moduleItemDetails.moduleItemOptions.indexOf(itemOption, 0);
            if (index > -1) {
                this.moduleItemDetails.moduleItemOptions.splice(index, 1);
            }
        } else {
            var obj = { value: itemOption.id };
            this.moduleItemOptionService.postDelete(obj).subscribe(response => {
                if (response.isSuccess) {
                    var index = this.moduleItemDetails.moduleItemOptions.indexOf(itemOption, 0);
                    if (index > -1) {
                        this.moduleItemDetails.moduleItemOptions.splice(index, 1);
                    }
                }
            });
        }
        
    }

    onEditItemOptionComplete() {
        if (this.editOption.name != undefined && this.editOption.name.trim() != "") {
            if (this.isAddModule) {
                this.isEditItemOptionVisible = true;
                //this.moduleItemDetails.moduleItemOptions.push(option);
                //this.optionName = "";
            } else {
                this.moduleItemOptionService.postUpdate(this.editOption).subscribe(response => {
                    if (response.isSuccess) {
                        this.isEditItemOptionVisible = true;
                        //option.id = response.result;
                        //this.moduleItemDetails.moduleItemOptions.push(option);
                        //this.optionName = "";
                    }
                });
            }
        }
    }

    onAddItemOptionComplete() {
        if (this.moduleItemDetails.moduleItemOptions == undefined)
            this.moduleItemDetails.moduleItemOptions = new Array();
        if (this.optionName != undefined && this.optionName.trim() != "") {
            var option = <IModuleItemOption>{};
            option.name = this.optionName;
            if (this.isAddModule) {
                this.moduleItemDetails.moduleItemOptions.push(option);
                this.optionName = "";
            } else {
                this.moduleItemOptionService.postAdd(option).subscribe(response => {
                    if (response.isSuccess) {
                        option.id = response.result;
                        this.moduleItemDetails.moduleItemOptions.push(option);
                        this.optionName = "";
                    }
                });
            }
        }
    }

    onAddItemComplete() {
        this.onAddComplete.emit(this.moduleItemDetails);
        this.moduleItemDetails = <IModuleItem>{};
    }

    onCancelItemComplete() {
        this.onCancelComplete.emit(true);
        this.moduleItemDetails = <IModuleItem>{};
    }

    getModuleItemTypes() {
        this.moduleItemService.getModuleItemTypes().subscribe(response => {
            this.moduleItemTypes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Item Type",
                    value: null
                });
                for (let template of response.result) {
                    var temp = {
                        label: template.label,
                        value: template
                    }
                    resultMap.push(temp);
                }
                this.moduleItemTypes = resultMap;
            }
        });
    }

    resetItemType() {
        this.moduleItemDetails.isTextBoxVisible = false;
        this.moduleItemDetails.isTextAreaVisible = false;
        this.moduleItemDetails.isRadioButtonGroupVisible = false;
        this.moduleItemDetails.isCheckBoxGroupVisible = false;
        this.moduleItemDetails.isAttachmentVisible = false;
    }

    onItemTypeChange() {
        this.resetItemType();
        if (this.selectedItemType != null) {
            this.moduleItemDetails.itemTypeId = this.selectedItemType.value;
            this.moduleItemDetails.itemType = this.selectedItemType.label;
            switch (this.moduleItemDetails.itemTypeId.toLowerCase()) {
                case ModuleItemTypeEnum.TextBox.toString().toLowerCase():
                case ModuleItemTypeEnum.LongComments.toString().toLowerCase():
                case ModuleItemTypeEnum.Verification.toString().toLowerCase():
                case ModuleItemTypeEnum.Attachment.toString().toLowerCase():
                    this.isAddNewItemOptionRowVisible = false;
                    this.moduleItemDetails.moduleItemOptions = new Array();
                    break;
                case ModuleItemTypeEnum.RadioButton.toString().toLowerCase():
                case ModuleItemTypeEnum.Dropdown.toString().toLowerCase():
                    this.isAddNewItemOptionRowVisible = true;
                    break;
                default:
                    break;

            }
        } else {
            this.moduleItemDetails.itemTypeId = null;
            this.moduleItemDetails.itemType = null;
        }
    }
}