
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectItem, Message,ConfirmationService } from 'primeng/primeng';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { TorquesheetService } from './../../../shared/services/torquesheet.service'
import { ProjectRoleService } from '../../../shared/services/projectRole.service'
import { UserService } from '../../../shared/services/user.service'
import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testFacility.service';
declare var $: JQueryStatic;

@Component({
    selector: 'teaminfo-template',
    templateUrl: 'app/body/Project/TeamInformation/teaminformation.component.html'
})
export class TeamInformationComponent {
    projectRoles: any;
    projectUsers: any;
    IsKeepOpen: boolean = false;
    msgs: Message[];
    displayAssignUserRolesDialog: boolean = false;
    public displayAddTorqueSheetTemplate: boolean;
    selectedUserNames: Array<any> = new Array();
    filteredUserNames: Array<any> = new Array();
    filteredSelectedUserNames: Array<any> = new Array();
    public projectId: string;
    public projectUserRoles: any;
    public spreadInstance: any;
    public TemplateName: string;
    public selectedProjectRoleId: any;
    public selectedUserId: any;
    @ViewChild("spreadContainer") spreadContainer: ElementRef;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TorquesheetService,
        private projectRoleService: ProjectRoleService,
        private userService: UserService,
        private testfacilityservice: TestFacilityService) { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.projectId = params['id']; // (+) converts string 'id' to a number
           
        });
        this.getProjectRoles();
        this.getProjectUsers();
    }
    onProjectRoleChange(event) {
        this.selectedProjectRoleId = event.value;
    }
    getProjectRoles() {
        //    userRoles
        this.projectRoleService.getAllProjectRoles().subscribe(response => {
            this.projectRoles = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.projectRoles = resultMap;
            }
            console.log(response);
        });
    }
    onUserChange(event) {
        this.selectedUserId = event.value;
    }
    getProjectUsers() {
        //    userRoles
        this.userService.getUsers().subscribe(response => {
            this.projectUsers = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.projectUsers = resultMap;
            }
            console.log(response);
        });
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
    filterUserNames(event) {
        this.testfacilityservice.filterByUserNames(event.query).subscribe(filteredList => {
            this.filteredUserNames = filteredList.$values;
        });
    }
   onAddUserRole() {

        if (!this.IsKeepOpen)
            this.displayAssignUserRolesDialog = false;
        else
            this.displayAssignUserRolesDialog = true;


        if (this.filteredSelectedUserNames.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please Select User', detail: '' });
            return null;
        }
        if (this.selectedProjectRoleId == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please select Role', detail: '' });
            return null;
        }

        //if ((this.projectRoles.find(tfr => tfr.role == "Primary Incharge") != undefined) && (this.selectedProjectRoleId == "1753ca8b-5162-4d98-8fc0-64ff08377ae8")) {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'warn', summary: 'Primary Incharge already assigned', detail: '' });
        //    return null;
        //}

        //if (this.filteredSelectedUserNames.length > 1 && this.selectedRole == "1753ca8b-5162-4d98-8fc0-64ff08377ae8") {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'warn', summary: 'Please select only one user for primary Incharge', detail: '' });
        //    return null;
        //}
        //if ((this.TestFacilityRoles.find(tfr => tfr.role == "Secondary Incharge") != undefined) && (this.selectedRole == "c8d592a9-3cac-41c1-803d-c8f0464db0b8")) {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'warn', summary: 'Secondary Incharge already assigned', detail: '' });
        //    return null;
        //}

        //if (this.filteredSelectedUserNames.length > 1 && this.selectedRole == "c8d592a9-3cac-41c1-803d-c8f0464db0b8") {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'warn', summary: 'Please select only one user for secondary Incharge', detail: '' });
        //    return null;
        //}


        var selectedUserNames = new Array();
        for (var sel of this.filteredSelectedUserNames) {
            selectedUserNames.push(sel.id);
        }
        //var inputDto = {
        //    testRequirementList: selectedTestRequirementIds
        //}
        this.projectRoleService.postAddUserNames(selectedUserNames, this.projectId, this.selectedProjectRoleId).subscribe(filteredList => {
            this.selectedUserNames = filteredList.$values;
            this.filteredSelectedUserNames = null;
            this.selectedProjectRoleId = null;
            this.projectRoleService.getByIdusing(this.projectId)
                .subscribe(TestFacilityRoles => {
                    this.projectUserRoles = TestFacilityRoles;
                    this.selectedProjectRoleId = null;
                });
        });

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'User Added', detail: '' });
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
