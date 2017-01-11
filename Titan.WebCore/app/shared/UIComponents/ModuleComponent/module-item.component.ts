import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTable, LazyLoadEvent, MessagesModule, Message, DropdownModule, Dropdown, ConfirmationService} from 'primeng/primeng';
import { IModuleItem, IMultiSelectViewData } from '../../../shared/services/definitions/IModule';
import { ModuleItemService } from '../../../shared/services/moduleItem.service';
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
    saveButtonLabel: string = "Add Module Item";

    @Output() onAddComplete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCancelComplete: EventEmitter<any> = new EventEmitter<any>();
    public moduleItemDetails: IModuleItem;
    public moduleItemTypes: IMultiSelectViewData[];

    constructor(private moduleItemService: ModuleItemService) { }

    ngOnInit() { 
        this.moduleItemDetails = <IModuleItem>{};
        this.getModuleItemTypes();
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
                        value: template.value
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
        switch (this.moduleItemDetails.itemTypeId) {
            case ModuleItemTypeEnum.TextBox.toString():
                this.moduleItemDetails.isTextBoxVisible = true;
                break;
            case ModuleItemTypeEnum.LongComments.toString():
                this.moduleItemDetails.isTextAreaVisible = true;
                break;
            case ModuleItemTypeEnum.RadioButton.toString():
                this.moduleItemDetails.isRadioButtonGroupVisible = true;
                break;
            case ModuleItemTypeEnum.Verification.toString():
                this.moduleItemDetails.isCheckBoxGroupVisible = true;
                break;
            case ModuleItemTypeEnum.Attachment.toString():
                this.moduleItemDetails.isAttachmentVisible = true;
                break;
            default:
                break;

        }
    }
}