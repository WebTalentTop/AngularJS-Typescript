import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DataTable, LazyLoadEvent, MessagesModule, Message, DropdownModule, Dropdown, ConfirmationService } from 'primeng/primeng';
import { IModuleItem, IMultiSelectViewData, IModuleItemOption } from '../../../shared/services/definitions/IModule';
import { ModuleItemService } from '../../../shared/services/moduleItem.service';
import { ModuleItemOptionService } from '../../../shared/services/moduleItemOption.service';
import { ModuleItemTypeEnum } from '../../../shared/Enum/module-item-type.enum';

@Component({
    selector: 'module-item-component',
    templateUrl: 'app/shared/UIComponents/ModuleComponent/module-item.component.html'
})
export class ModuleItemComponent implements OnChanges{
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
    @Input()
    public moduleId: string;
    public moduleItemTypes: IMultiSelectViewData[];
    public editOption: IModuleItemOption;
    public isEditItemOptionVisible: boolean;
    public isDeleteItemOptionsConfirmDlgVisible: boolean;
    public prevItemType: IMultiSelectViewData;
    constructor(private moduleItemService: ModuleItemService, private moduleItemOptionService: ModuleItemOptionService) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["moduleItemDetails"] != undefined && changes["moduleItemDetails"].currentValue != undefined)
        {
            for (var itemType of this.moduleItemTypes) {
                if (itemType.value != undefined && itemType.value.value == this.moduleItemDetails.itemTypeId) {
                    this.selectedItemType = this.prevItemType = itemType.value;
                    this.onItemTypeChange();
                }
            }
        }
        // changes.prop contains the old and the new value...
    }

    ngOnInit() { 
        if (this.moduleItemDetails == undefined)
            this.moduleItemDetails = <IModuleItem>{};
        this.getModuleItemTypes();
    }

    onEditModuleItemOption(itemOption) {
        this.editOption = itemOption;
        this.isEditItemOptionVisible = true;
    }

    onEditItemOptionCancelComplete() {
        this.isEditItemOptionVisible = false;
    }

    onDeleteModuleItemOption(itemOption) {
        if (JSON.parse(this.isAddModule.toString()) || JSON.parse(this.isAdd.toString())) {
            var index = this.moduleItemDetails.moduleItemOptions.indexOf(itemOption, 0);
            if (index > -1) {
                this.moduleItemDetails.moduleItemOptions.splice(index, 1);
            }
        } else {
            var obj = { value: itemOption.id };
            this.moduleItemOptionService.postDelete(itemOption.id).subscribe(response => {
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
            if (JSON.parse(this.isAddModule.toString()) || JSON.parse(this.isAdd.toString())) {
                this.isEditItemOptionVisible = false;
                //this.moduleItemDetails.moduleItemOptions.push(option);
                //this.optionName = "";
            } else {
                this.moduleItemOptionService.postUpdate(this.editOption).subscribe(response => {
                    if (response.isSuccess) {
                        this.isEditItemOptionVisible = false;
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
            if (JSON.parse(this.isAddModule.toString())) {
                this.moduleItemDetails.moduleItemOptions.push(option);
                this.optionName = "";
            } else if (JSON.parse(this.isAdd.toString())) {
                option.moduleItemId = this.moduleItemDetails.id;
                this.moduleItemDetails.moduleItemOptions.push(option);
                this.optionName = "";
            }else {
                option.moduleItemId = this.moduleItemDetails.id;
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
        if (this.moduleItemDetails.moduleId == undefined)
            this.moduleItemDetails.moduleId = this.moduleId;
        if (JSON.parse(this.isAddModule.toString())) {
            this.onAddComplete.emit(this.moduleItemDetails);
            this.moduleItemDetails = <IModuleItem>{};
        }
        else if (JSON.parse(this.isAdd.toString())) {
            this.addModuleItem()
        }
        else {
            this.saveModuleItem();
        }
    }

    addModuleItem() {
        this.moduleItemService.postAdd(this.moduleItemDetails).subscribe(response => {
            if (response.isSuccess) {
                this.onAddComplete.emit(this.moduleItemDetails);
            }
        });
    }

    saveModuleItem() {
        this.moduleItemService.postUpdate(this.moduleItemDetails).subscribe(response => {
            if (response.isSuccess) {
                this.onAddComplete.emit(this.moduleItemDetails);
            }
        });
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
        } else {
            this.moduleItemDetails.itemTypeId = null;
            this.moduleItemDetails.itemType = null;
        }
        if (this.moduleItemDetails.moduleItemOptions != undefined && this.moduleItemDetails.moduleItemOptions.length > 0 && (this.moduleItemDetails.itemTypeId == null
            || (this.moduleItemDetails.itemTypeId.toLowerCase() != ModuleItemTypeEnum.RadioButton.toString().toLowerCase()
            && this.moduleItemDetails.itemTypeId.toLowerCase() != ModuleItemTypeEnum.Dropdown.toString().toLowerCase()))) {
            this.isDeleteItemOptionsConfirmDlgVisible = true;
        } else {
            this.processItemTypeChange();
        }

    }

    processItemTypeChange() {

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

    }

    onDeleteOptionsConfirmationComplete() {
        this.isDeleteItemOptionsConfirmDlgVisible = false;
        this.processItemTypeChange();
        this.moduleItemService.postUpdate(this.moduleItemDetails).subscribe(response => {
            if (response.isSuccess) {
                //this.onAddComplete.emit(this.moduleItemDetails);
            }
        });
    }

    onDeleteOptionsConfirmationCancelComplete() {
        this.isDeleteItemOptionsConfirmDlgVisible = false;
        this.selectedItemType = this.prevItemType;
    }
}