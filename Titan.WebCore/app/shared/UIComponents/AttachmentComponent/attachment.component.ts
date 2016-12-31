import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTable, LazyLoadEvent, MessagesModule, Message, DropdownModule, Dropdown, ConfirmationService} from 'primeng/primeng';
import { TitanSpinnerComponent } from '../SpinnerComponent/spinner.component';
import { AttachmentService } from '../../../shared/services/attachment.service';
import { IAttachment } from '../../../shared/services/definitions/IAttachment';
import { titanApiUrl } from '../../../shared/services/apiurlconst/titanapiurl';


@Component({
    selector: 'attachment-component',
    templateUrl: 'app/shared/UIComponents/AttachmentComponent/attachment.component.html'
})
export class AttachmentComponent {
    @Input()
    title: string;
    @Input()
    categoryTypeId: string = "";
    @Input()
    entityType: string;
    @Input()
    entityId: string;
    titanApiUrl: any = titanApiUrl;


    msgs: Message[];
    categories: any;
    selectedCategory: any;
    navigateToDetails = new EventEmitter();
    uploadedFiles: any[] = [];
    uploadedAttachments: IAttachment[];

    constructor(private attachmentService: AttachmentService, private confirmationService: ConfirmationService){}
    ngOnInit() { 
        this.getCategories();
        this.getAttachments();
    }

    onCategoryChange(event) {
        // console.log('------event------------', event)
        this.selectedCategory = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    getCategories() {
        //    userRoles
        this.attachmentService.getCategories().subscribe(response => {
            this.categories = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Category",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.categories = resultMap;
            }
        });
    }

    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }
        this.getAttachments();
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    }

    getAttachments() {
        this.attachmentService.getDocumentsByEntityIdentifierId(this.entityId)
            .subscribe(response => {
                console.log('-----------  Attachments------------------', response);
                if (response.length > 0)
                    this.uploadedAttachments = response;
                else
                    this.uploadedAttachments = null;
            });
    }

    onDelete(Attachment: IAttachment) {
        //console.log('--------------TestFacilityAttachment id0------------', TestFacilityAttachment);
        this.confirmationService.confirm({
            message: 'Do you want to delete this attachment?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.attachmentService.DeleteDocumentById(Attachment.id)
                    .subscribe(res => {
                        if (res.isSuccess) {
                            this.getAttachments();
                            this.msgs = [];
                            this.msgs.push({ severity: 'info', summary: 'Confirmed', detail: 'Attachment deleted' });
                        }
                    });
            }
        });
        
    }
}