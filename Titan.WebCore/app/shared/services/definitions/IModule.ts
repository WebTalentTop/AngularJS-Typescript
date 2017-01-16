
export interface IModule {
    id: string;
    name: string;
    description: string;
    parentModuleId: string;
    displayOrder: number;
    isDeleted: boolean;
    moduleItems: IModuleItem[];
}

export interface IModuleItem{
    id: string;
    name: string;
    description: string;
    moduleId: string;
    itemTypeId: string;
    itemType: string;
    displayOrder: number;
    isDeleted: boolean;
    isRequired: boolean;
    isTextBoxVisible: boolean;
    isTextAreaVisible: boolean;
    isRadioButtonGroupVisible: boolean;
    isCheckBoxGroupVisible: boolean;
    isAttachmentVisible: boolean;
    moduleItemTypes: IMultiSelectViewData[];
    moduleItemOptions: IModuleItemOption[];
}

export interface IModuleItemOption {
    id: string;
    name: string;
    moduleItemId: string;
    displayOrder: number;
    isDeleted: boolean;
}

export interface IMultiSelectViewData {
    label: string;
    value: any;
}