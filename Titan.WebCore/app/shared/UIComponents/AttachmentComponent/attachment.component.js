"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var titanapiurl_1 = require('../../../shared/services/apiurlconst/titanapiurl');
var AttachmentComponent = (function () {
    function AttachmentComponent(attachmentService, confirmationService) {
        this.attachmentService = attachmentService;
        this.confirmationService = confirmationService;
        this.categoryTypeId = "";
        this.titanApiUrl = titanapiurl_1.titanApiUrl;
        this.navigateToDetails = new core_1.EventEmitter();
        this.uploadedFiles = [];
    }
    AttachmentComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.getAttachments();
    };
    AttachmentComponent.prototype.onCategoryChange = function (event) {
        // console.log('------event------------', event)
        this.selectedCategory = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AttachmentComponent.prototype.getCategories = function () {
        var _this = this;
        //    userRoles
        this.attachmentService.getCategories().subscribe(function (response) {
            _this.categories = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Category",
                    value: null
                });
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var template = response_1[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.categories = resultMap;
            }
        });
    };
    AttachmentComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.getAttachments();
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    AttachmentComponent.prototype.getAttachments = function () {
        var _this = this;
        if (this.entityId != undefined) {
            this.attachmentService.getDocumentsByEntityIdentifierId(this.entityId)
                .subscribe(function (response) {
                console.log('-----------  Attachments------------------', response);
                if (response.length > 0)
                    _this.uploadedAttachments = response;
                else
                    _this.uploadedAttachments = null;
            });
        }
    };
    AttachmentComponent.prototype.onDelete = function (Attachment) {
        var _this = this;
        //console.log('--------------TestFacilityAttachment id0------------', TestFacilityAttachment);
        this.confirmationService.confirm({
            message: 'Do you want to delete this attachment?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: function () {
                _this.attachmentService.DeleteDocumentById(Attachment.id)
                    .subscribe(function (res) {
                    if (res.isSuccess) {
                        _this.getAttachments();
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'info', summary: 'Confirmed', detail: 'Attachment deleted' });
                    }
                });
            }
        });
    };
    __decorate([
        core_1.Input()
    ], AttachmentComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input()
    ], AttachmentComponent.prototype, "categoryTypeId", void 0);
    __decorate([
        core_1.Input()
    ], AttachmentComponent.prototype, "entityType", void 0);
    __decorate([
        core_1.Input()
    ], AttachmentComponent.prototype, "entityId", void 0);
    AttachmentComponent = __decorate([
        core_1.Component({
            selector: 'attachment-component',
            templateUrl: 'app/shared/UIComponents/AttachmentComponent/attachment.component.html'
        })
    ], AttachmentComponent);
    return AttachmentComponent;
}());
exports.AttachmentComponent = AttachmentComponent;
