/**
 * Created by ZeroInfinity on 12/19/2016.
 */
import {Component, Input, OnChanges} from '@angular/core';
import { FormSchemaFieldDataTypeService } from '../../../services/formSchemaFieldDataType.service';
import { IFormSchemaFieldDataType } from '../../../services/definitions/IFormSchemaFieldDataType';
import { IFormSchemaField } from "../../../services/definitions/IFormSchemaField";
import {ITitanSelectItem} from "../../../services/definitions/ITitanSelectItem";
import { LoggerService } from '../../../services/logger/logger.service';
import {IFormSchema} from "../../../services/definitions/IFormSchema";

@Component({
    selector:'form-preview',
    templateUrl: 'app/shared/UIComponents/FormComponents/FormPreviewComponent/formPreview.component.html'
})

export class FormPreviewComponent implements OnChanges {
    @Input() formName:string;
    @Input() formSchema:any;
    @Input() fields:any[] = [];
    @Input() selectedInputList:IFormSchemaField[] = [];
    @Input() entityEventsList: ITitanSelectItem[];
    @Input() formSchemaCategoryList: ITitanSelectItem[];
    formFieldDataTypeList:IFormSchemaFieldDataType[] =[];

    constructor(private formFieldDataTypeService: FormSchemaFieldDataTypeService,
                private ls: LoggerService) {
        this.ls.setShow(true);
    }

    ngOnChanges (changes) {
        //this.selectedInputList = this.formSchema.fields;
        this.ls.logConsole("Form Schema Passed on -----------", this.formSchema);
        this.ls.logConsole("FormSchemaCategoryList --------", this.formSchemaCategoryList);
        this.ls.logConsole("SelectedInputList passed -------", this.selectedInputList);
        this.ls.logConsole("FormName passed ----", this.formName);
        this.ls.logConsole("Form Preview Fields ------------", this.fields);
        let items = this.fields.map(x => {
            let item:IFormSchemaField = x;
            item.data = x.data.$values;
            item.formSchemaFieldDataTypeData = item.data.map(t => t.value);

            let itemInfo:any = x;

            if (itemInfo.fieldDataType.name === "SelectBox") {
                item.displaySelectBoxData = item.formSchemaFieldDataTypeData.map(fieldItem => {
                    return {label: fieldItem, value: fieldItem};
                })
            }

            this.ls.logConsole("Field Item info ----", item);
            return item;
        })
        this.selectedInputList = this.fields;
        this.ls.logConsole("Fields Extracted -----", this.fields);

        this.formFieldDataTypeService.getAll()
            .subscribe(res =>{
                console.log("FormFieldDataType List  ----------", res);
                if(res.isSuccess){
                    this.formFieldDataTypeList = res.result;
                    console.log("FormFieldDataTypeList itself -----------", this.formFieldDataTypeList);
                }
            })
    }

    ngOnInit() {

    }

    checkFieldDataType(id): IFormSchemaFieldDataType {
        let fieldDataType:IFormSchemaFieldDataType = this.formFieldDataTypeList.filter(x => {
            if( x.id === id) {
                return x;
            }
        })[0];
        return fieldDataType;
    }

}