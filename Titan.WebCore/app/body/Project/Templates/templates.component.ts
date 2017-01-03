
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TorquesheetService } from './../../../shared/services/torquesheet.service'
declare var $: JQueryStatic;
@Component({    
    selector: 'torquesheet-template',
    templateUrl: 'app/body/Project/Templates/templates.component.html'
})
export class TemplatesComponent {

    public displayAddTorqueSheetTemplate:boolean;
    public projectId: string; 
    public spreadInstance: any;
    public TemplateName: string;

    @ViewChild("spreadContainer") spreadContainer: ElementRef;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TorquesheetService) {}


    ngOnInit() { 
        
    }

    onAddTorqueSheetTemplate(){
        this.displayAddTorqueSheetTemplate = true;
        this.spreadInstance = new GC.Spread.Sheets.Workbook(document.getElementById("spreadContainer"));
        // Get active sheet in spread instance
        var activeSheet = this.spreadInstance.getActiveSheet();
    }

    onAddTorqueSheetTemplateConfirmation() {
        var data = {
            name: this.TemplateName,
            contents: JSON.stringify(this.spreadInstance.toJSON()) 
        }
        this.service.postTorqueSheetTemplate(data).subscribe(res => {
            this.closeTemplateWindow();
        });
        //this.spreadInstance = null;
    }


    onAddTorqueSheetTemplateCancel() {
        this.closeTemplateWindow();
    }

    closeTemplateWindow() {
        $("#spreadContainer").html("");
        this.displayAddTorqueSheetTemplate = false;
        this.spreadInstance = null;
    }
}