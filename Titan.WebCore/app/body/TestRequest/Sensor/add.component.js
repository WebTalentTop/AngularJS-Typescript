"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AddComponent = (function () {
    // msgs:Message[];
    // uploadedFiles: any[] = [];
    function AddComponent(route, dataService, equipmenttypeservice, router) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this.equipmenttypeservice = equipmenttypeservice;
        this.router = router;
        this.fileData = [];
        this.uploadedFiles = [];
        this.entityType = "9F8D13F5-F0E8-452E-8D81-631FCD7A1C9A";
        // filepath: string = "TestFacility";
        // TrackingList: any;
        // startTime: any;
        // endTime: Date;
        this.fileInfo = {
            //             id:'',
            //             isDeleted:false,
            name: ''
        };
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.taskId = params['taskId'];
        });
        this.entityId = this.id;
        console.log("---- TF Details ID Param -----", this.id);
        // this.fileData= this.fileInfo[];
    }
    AddComponent.prototype.handleChange = function (event) {
        console.log('tes---', event);
        console.log('-------targetid-------', event.originalEvent.target.innerText);
    };
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categories = [];
        this.categories.push({ label: 'All categories', value: null });
        this.categories.push({ label: 'Wheel Alignment', value: '5A3AFB53-A3D2-4BDF-8909-E60ED577F84D' });
        this.categories.push({ label: 'Torque for Parts', value: '817164F9-01D8-470D-BD58-618F4BF135F2' });
        this.categories.push({ label: 'Certificates', value: 'Certificates' });
        this.categories.push({ label: 'Standard Documents', value: 'Standard Documents' });
        this.categories.push({ label: 'Manual', value: 'Manual' });
        this.categories.push({ label: 'Results', value: 'Results' });
        this.materials = [];
        this.materials.push({ label: 'All materials', value: null });
        this.materials.push({ label: 'Wheel Alignment', value: '5A3AFB53-A3D2-4BDF-8909-E60ED577F84D' });
        this.materials.push({ label: 'Torque for Parts', value: '817164F9-01D8-470D-BD58-618F4BF135F2' });
        this.materials.push({ label: 'Certificates', value: 'Certificates' });
        this.materials.push({ label: 'Standard Documents', value: 'Standard Documents' });
        this.materials.push({ label: 'Manual', value: 'Manual' });
        this.materials.push({ label: 'Results', value: 'Results' });
        this.getSensorList();
        //get the departmentId through taskId
        //get sensors by department and entityId
        this.dataService.getTaskDetailsById(this.taskId)
            .subscribe(function (taskres) {
            _this.departmentId = taskres.result.departmentId;
            console.log('------------task department ------------', taskres.result.departmentId);
            _this.dataService.GetAllTestRequestSensors(_this.entityId, taskres.result.departmentId)
                .subscribe(function (res) {
                _this.sensorRequests = res.result;
            });
        });
        //    this.getHourEntryByEntityIdentifierId();
        //    this.getDownTimeReasons();
        //    //this.dataService.GetProjectId(this.id)
        //    //    .subscribe(res => {
        //    //        this.projectId = res.$values;
        //    //        //this.formConfiguration = res.formConfiguration;
        //    //        //this.formObject = res.formObject;
        //    //        //this.model = res.formObject;
        //    //        //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
        //    //        //console.log("----- Result of formObject -----", this.model);
        //    //    });
        //     this.dataService.GetTrackingListByEntityId(this.id)
        //         .subscribe(res =>
        //         {
        //             this.TrackingList = res.$values;
        //             //this.formConfiguration = res.formConfiguration;
        //             //this.formObject = res.formObject;
        //             //this.model = res.formObject;
        //             //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
        //             //console.log("----- Result of formObject -----", this.model);
        //         });
    };
    AddComponent.prototype.onChange = function (event) {
        var files = event.files;
        //let fileList: FileList = event.target.files;
        //if (fileList.length > 0) {
        //    let file: File = fileList[0];
        //    let formData: FormData = new FormData();
        //    formData.append('degree_attachment', file, file.name);
        //this.dataService.postCommentAdd(formData).subscribe(res => {
        //    console.log("-------- Test Sensor Adding new result ----- ", res);
        //    if (res.IsSuccess) {
        //        this.router.navigate(["/testrequest/details/", this.id]);
        //    }
        //});
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            // this.fileInfo.name = file.name;
            //this.fileData.push(this.fileInfo);
            this.uploadedFiles.push(file);
        }
        //this.dataService.makeFileRequest('http://localhost:9998/api/testRequestSensor/post/uploadfile', [], files).subscribe(() => {
        //    console.log('sent');
        //});
        //  let headers = new Headers();
        //  headers.append('Accept', 'application/json');
        //  let options = new RequestOptions({ headers: headers });
        //this.http.post('http://url', formData, options)
        //    .map(res => res.json())
        //    .catch(error => Observable.throw(error))
        //    .subscribe(
        //    data => console.log('success'),
        //    error => console.log(error)
        //    )
    };
    AddComponent.prototype.onCompleteTask = function () {
        var completetaskbody = {
            id: this.taskId
        };
        this.dataService.postTasksComplete(this.taskId).subscribe(function (res) {
        });
    };
    AddComponent.prototype.onBeforeUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            // this.fileInfo.name = file.name;
            //this.fileData.push(this.fileInfo);
            this.uploadedFiles.push(file);
        }
        //this.testfacilityattachmentservice.getByIdusing(this.id)
        //    .subscribe(TestFacilityAttachments => {
        //        console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
        //        this.TestFacilityAttachments = TestFacilityAttachments;
        //    });
        //this.msgs = [];
        //this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    AddComponent.prototype.onSensorChange = function (event) {
        console.log('------event------------', event);
        this.selectedSensorTypeId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onCategoryChange = function (event) {
        console.log('------event------------', event);
        this.selectedCategoryId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onMaterialChange = function (event) {
        console.log('------event------------', event);
        this.selectedMaterialId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    //onDownTimeReasonChange(event) {
    //    console.log('------event------------', event)
    //    this.selectedDownTimeReasonId = (event.value);
    //    //   this.EquipmentSubType.calibrationform = (event);
    //}
    //onHourEntryChange(event) {
    //    console.log('------event------------', event)
    //    this.selectedTimeEntryTypeId = (event.value);
    //    //   this.EquipmentSubType.calibrationform = (event);
    //}
    AddComponent.prototype.getSensorList = function () {
        var _this = this;
        //    userRoles
        this.equipmenttypeservice.getSensorList().subscribe(function (response) {
            _this.Sensors = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.Sensors = resultMap;
            }
            console.log(response);
        });
    };
    //getDownTimeReasons() {
    //    //    userRoles
    //    this.dataService.GetAllDownTimeReasons().subscribe(response => {
    //        this.downTimeReasons = new Array();
    //        if (response != null) {
    //            var resultMap = new Array();
    //            resultMap.push({
    //                label: "--Select--",
    //                value: null
    //            });
    //            for (let template of response.$values) {
    //                var temp = {
    //                    label: template.name,
    //                    value: template.id
    //                }
    //                resultMap.push(temp);
    //            }
    //            this.downTimeReasons = resultMap;
    //        }
    //        console.log(response);
    //    });
    //}
    //getHourEntryByEntityIdentifierId() {
    //    //    userRoles
    //    this.dataService.getHourEntryByEntityIdentifierId(this.id).subscribe(response => {
    //        this.hourEntries = new Array();
    //        if (response != null) {
    //            var resultMap = new Array();
    //            resultMap.push({
    //                label: "--Select--",
    //                value: null
    //            });
    //            for (let template of response) {
    //                var temp = {
    //                    label: template.name,
    //                    value: template.id
    //                }
    //                resultMap.push(temp);
    //            }
    //            this.hourEntries = resultMap;
    //        }
    //        console.log(response);
    //    });
    //}
    //selectFile($event): void {
    //    var inputValue = $event.target;
    //    this.file = inputValue.files[0];
    //    console.debug("Input File name: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
    //}
    AddComponent.prototype.uploadFile = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.formData = new FormData();
            this.formData.append('file', file);
        }
        //this.dataService.postCommentAdd(null).subscribe(res => {
        //    console.log("-------- Test Sensor Adding new result ----- ", res);
        //    if (res.IsSuccess) {
        //        this.router.navigate(["/testrequest/details/", this.id]);
        //    }
        //});
    };
    AddComponent.prototype.onSubmit = function (formRef) {
        var _this = this;
        //formRef.isDeleted = false;
        var formData = {
            //newly added columns
            PartName: this.partName,
            PartNumber: this.partNumber,
            SteadyRequirement: this.steadyRequirement,
            PeriodicRequirement: this.periodicRequirement,
            CategoryId: this.selectedCategoryId,
            MaterialId: this.selectedMaterialId,
            // doesnt need
            SensorTypeId: this.selectedSensorTypeId,
            TestRequestId: this.id,
            DepartmentId: this.departmentId,
            IsCompleted: 'false',
            IsDeleted: 'false'
        };
        //let formCommentData: any = {
        //    Comment: this.comment,
        //    TestRequestId: this.id,
        //    IsDeleted: 'false'
        //};
        //for (let i of this.fileData)
        //{
        //}
        //formData.name = formRef.name;
        //formData.address.addressLine1 = formRef.addressLine1;
        //formData.address.addressLine2 = formRef.addressLine2;
        //formData.address.city = formRef.city;
        //formData.address.state = formRef.state;
        //formData.address.postalCode = formRef.postalCode;
        //formData.locale = "en-us";
        //   console.log(formData);
        //let xhr = new XMLHttpRequest();
        //let path = titanApiUrl + 'testrequestsensor/post/uploadfile';
        //xhr.onreadystatechange = function state_change() {
        //    if (xhr.readyState == 4) {// 4 = "loaded"
        //        if (xhr.status == 200) {// 200 = OK
        //            // ...our code here...
        //            alert('ok');
        //        }
        //        else {
        //            alert("Problem retrieving XML data");
        //        }
        //    }
        //};
        //xhr.open('POST', path, false);
        //xhr.setRequestHeader("Content-Type", "multipart/form-data");
        //xhr.setRequestHeader("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
        //  xhr.withCredentials = true;
        //  xhr.send(null);
        this.dataService.postAdd(formData, this.comment).subscribe(function (res) {
            console.log("-------- Test Sensor Adding new result ----- ", res);
            if (res.isSuccess) {
                var testRequestSensorId = res.result.id;
                //    console.log("", res.object.id); 
                _this.dataService.makeFileRequest('http://localhost:9998/api/testRequestSensor/post/uploadfile', [], _this.uploadedFiles, testRequestSensorId).subscribe(function (result) {
                    console.log('sent');
                    //  this.router.navigate(["/testrequest/details/", this.id]);
                    // make a call with id and update the datatable
                    _this.dataService.GetAllTestRequestSensors(_this.entityId, _this.departmentId)
                        .subscribe(function (res) {
                        _this.sensorRequests = res.result;
                    });
                });
            }
        });
        //var fd = new FormData();
        //fd.append('files', this.uploadedFiles[0]);
        //this.dataService.postCommentAdd(fd).subscribe(res => {
        //    console.log("-------- Test Sensor Adding new result ----- ", res);
        //    if (res.IsSuccess) {
        //        this.router.navigate(["/testrequest/details/", this.id]);
        //    }
        //});
        //this.dataService.postAdd(formData).subscribe(res => {
        //    console.log("-------- Test Sensor Adding new result ----- ", res);
        //    if (res.IsSuccess) {
        //        this.router.navigate(["/testrequest/details/", this.id]);
        //    }
        //});
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'sensor-add',
            templateUrl: 'app/body/TestRequest/Sensor/add.component.html'
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
