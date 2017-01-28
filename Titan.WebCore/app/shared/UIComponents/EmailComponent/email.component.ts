import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
    LazyLoadEvent, GrowlModule, InputTextModule, ConfirmDialogModule,
    ConfirmationService, DialogModule, EditorModule, SharedModule, AutoCompleteModule, Message
} from 'primeng/primeng';
import { TitanSpinnerComponent } from '../SpinnerComponent/spinner.component';
//import { EmailService } from '../../../shared/services/email.service';
import { IEmail } from '../../../shared/services/definitions/IEmail';
import { IUserProfile } from '../../../shared/services/definitions/IUserProfile';
import { titanApiUrl } from '../../../shared/services/apiurlconst/titanapiurl';
import { UserService } from '../../../shared/services/user.service';


@Component({
    selector: 'email-component',
    templateUrl: 'app/shared/UIComponents/EmailComponent/email.component.html'
})
export class EmailComponent {
    @Input()
    emailDialogHeader: string = "Send Email";
    @Input()
    displayApproverEmail: boolean = false;

    @Input()
    emailContent: IEmail;
    
    @Input()
    sendEmailLabelText: string = "Send Email";
    public filteredToEmailAddresses: IUserProfile[];

    @Output() onSendEmailComplete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCancelSendEmailComplete: EventEmitter<any> = new EventEmitter<any>();

    msgs: Message[];
    
    constructor(private confirmationService: ConfirmationService, private userService: UserService) { }

    ngOnInit() { 
        if (this.emailContent != undefined)
            this.emailContent = <IEmail>{};
    }

    filterToEmailAddresses(event) {
        this.userService.filterUserByName(event.query).subscribe(filteredList => {
            if (filteredList.isSuccess)
                this.filteredToEmailAddresses = filteredList.result;
        });
    }

    onSendEmailCancel() {
        this.onCancelSendEmailComplete.emit(null);
    }

    onSendEmail() {
        //let newEmail: IEmail = <IEmail>{};
        //newEmail.subject = this.emailSubject;
        //newEmail.emailBody = this.emailBody;
        //newEmail.to = this.selectedToEmailAddresses;
        this.onSendEmailComplete.emit(this.emailContent);
    }
}