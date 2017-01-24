"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var details_component_1 = require("./details.component");
var forms_1 = require('@angular/forms');
var testFacility_service_1 = require('../../../shared/services/testFacility.service');
var entityIdentifier_service_1 = require('../../../shared/services/entityIdentifier.service');
var formSchemaCategory_service_1 = require('../../../shared/services/formSchemaCategory.service');
var testTemplate_service_1 = require('../../../shared/services/testTemplate.service');
var testFacilityRole_service_1 = require('../../../shared/services/testFacilityRole.service');
var buildlevel_service_1 = require('../../../shared/services/buildlevel.service');
var teststatus_service_1 = require('../../../shared/services/teststatus.service');
var testRole_service_1 = require('../../../shared/services/testRole.service');
var project_service_1 = require('../../../shared/services/project.service');
var testMode_service_1 = require('../../../shared/services/testMode.service');
var testType_service_1 = require('../../../shared/services/testType.service');
var testFacilityAttachment_service_1 = require('../../../shared/services/testFacilityAttachment.service');
var formPreview_module_1 = require('../../../shared/UIComponents/FormComponents/FormPreviewComponent/formPreview.module');
var formInstance_module_1 = require('../../../shared/UIComponents/FormComponents/FormInstanceComponent/formInstance.module');
var breadCrumbs_service_1 = require('../../../shared/services/breadCrumbs/breadCrumbs.service');
var primeng_1 = require('primeng/primeng');
var router_1 = require("@angular/router");
var primeng_2 = require('primeng/primeng');
var details_routes_1 = require("./details.routes");
var DetailsModule = (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, formPreview_module_1.FormPreviewModule, primeng_1.DataGridModule, formInstance_module_1.FormInstanceModule, router_1.RouterModule, primeng_1.AutoCompleteModule,
                primeng_1.CheckboxModule, primeng_2.MultiSelectModule, forms_1.FormsModule, primeng_1.SpinnerModule, primeng_1.PaginatorModule, primeng_1.EditorModule, primeng_1.DataTableModule,
                primeng_1.TabViewModule, primeng_1.CalendarModule, primeng_1.ButtonModule, primeng_1.InputTextareaModule, primeng_1.DropdownModule, primeng_1.InputTextModule, primeng_1.PanelModule,
                primeng_1.FileUploadModule, primeng_1.GrowlModule, primeng_1.DialogModule, primeng_1.BreadcrumbModule, details_routes_1.default],
            providers: [
                entityIdentifier_service_1.EntityIdentifierService,
                testFacility_service_1.TestFacilityService,
                formSchemaCategory_service_1.FormSchemaCategoryService,
                testFacilityRole_service_1.TestFacilityRoleService,
                testFacilityAttachment_service_1.TestFacilityAttachmentService,
                buildlevel_service_1.BuildLevelService,
                project_service_1.ProjectService,
                testRole_service_1.TestRoleService,
                teststatus_service_1.TestStatusService,
                testMode_service_1.TestModeService,
                testType_service_1.TestTypeService,
                testTemplate_service_1.TestTemplateService,
                breadCrumbs_service_1.BreadCrumbsService
            ],
            declarations: [details_component_1.DetailsComponent]
        })
    ], DetailsModule);
    return DetailsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DetailsModule;
