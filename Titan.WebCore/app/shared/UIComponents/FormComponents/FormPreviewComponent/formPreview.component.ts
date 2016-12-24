/**
 * Created by ZeroInfinity on 12/19/2016.
 */
import { Component, Input} from '@angular/core';
import { FormSchemaFieldDataTypeService } from '../../../services/formSchemaFieldDataType.service';
import { IFormSchemaFieldDataType } from '../../../services/definitions/IFormSchemaFieldDataType';
import { IFormSchemaField } from "../../../services/definitions/IFormSchemaField";

@Component({
    selector:'form-preview',
    templateUrl: 'app/shared/UIComponents/FormComponents/FormPreviewComponent/formPreview.component.html'
})

export class FormPreviewComponent {
    @Input() formName:string;
    @Input() selectedInputList:IFormSchemaField[] = [];
    formFieldDataTypeList:IFormSchemaFieldDataType[] =[];

    constructor(private formFieldDataTypeService: FormSchemaFieldDataTypeService) {

    }

    ngOnInit() {
        this.formFieldDataTypeService.getAll()
            .subscribe(res =>{
                console.log("FormFieldDataType List  ----------", res);
                if(res.isSuccess){
                    this.formFieldDataTypeList = res.result;
                    console.log("FormFieldDataTypeList itself -----------", this.formFieldDataTypeList);
                }
            })
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