"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ZeroInfinity on 12/27/2016.
 */
var core_1 = require('@angular/core');
var BreadCrumbsService = (function () {
    function BreadCrumbsService() {
        // Initialize the whole bread crumbs for the whole site;
        this.breadCrumbs = [];
        // Home page
        this.homeBreadCrumbAdd();
        // Admin Home Page
        this.adminBreadCrumbAdd();
        // Admin FormBuilder
        this.adminFormBuilderPage();
        // Admin Form Builder Add
        this.adminFormBuilderAddFormPage();
        //Admin Form Builder Details
        this.adminFormBuilderDetailsFormPage();
        //Admin Calendar Page
        this.calendarPage();
        //Admin TestFacilities Page
        this.testFacilitiesPage();
        //Admin Test Facilities Add
        this.testFacilitiesAddPage();
        //Admin Test Facilities Details
        this.testFacilitiesDetailsPage();
        // Admin Vehicle Home Page
        this.adminVehicleHomePage();
        // Admin Shift Page
        this.adminShiftPage();
        // Admin Shift Add Page
        this.adminShiftAddPage();
        // Admin Shift Details Page
        this.adminShiftDetailsPage();
        //Admin Holiday Page
        this.adminHolidayPage();
        // Admin Holiday Add Page
        this.adminHolidayAddPage();
        // Admin Holiday Details Page
        this.adminHolidayDetailsPage();
        //Admin Step Page
        this.adminStepPage();
        // // Admin Step Add Page
        // this.adminStepAddPage();
        // // Admin Step Details Page
        // this.adminStepDetailsPage();
        //Admin Units Page
        this.adminUnitsPage();
        // Admin Units Add Page
        this.adminUnitsAddPage();
        // Admin Units Details Page
        this.adminUnitsDetailsPage();
        //Admin BuildLevels Page
        this.adminBuildLevelsPage();
        // Admin BuildLevels Add Page
        this.adminBuildLevelsAddPage();
        // Admin BuildLevels Details Page
        this.adminBuildLevelsDetailsPage();
        //Admin Market Page
        this.adminMarketPage();
        // Admin Market Add Page
        this.adminMarketAddPage();
        // Admin Market Details Page
        this.adminMarketDetailsPage();
        //Admin Platform Page
        this.adminPlatformPage();
        // Admin Platform Add Page
        this.adminPlatformAddPage();
        // Admin Platform Details Page
        this.adminPlatformDetailsPage();
        //Admin TitanRole Page
        this.adminTitanRolePage();
        // Admin TitanRole Add Page
        this.adminTitanRoleAddPage();
        // Admin TitanRole Details Page
        this.adminTitanRoleDetailsPage();
        //Admin MilestoneStatus Page
        this.adminMilestoneStatusPage();
        // Admin MilestoneStatus Add Page
        this.adminMilestoneStatusAddPage();
        // Admin MilestoneStatus Details Page
        this.adminMilestoneStatusDetailsPage();
        //Admin ProjectStatus Page
        this.adminProjectStatusPage();
        // // Admin ProjectStatus Add Page
        // this.adminProjectStatusAddPage();
        // // Admin ProjectStatus Details Page
        // this.adminProjectStatusDetailsPage();
        //Admin ProjectRole Page
        this.adminProjectRolePage();
        // // Admin ProjectRole Add Page
        // this.adminProjectRoleAddPage();
        // // Admin ProjectRole Details Page
        // this.adminProjectRoleDetailsPage();
        //Admin Milestone Page
        this.adminMilestonePage();
        // // Admin Milestone Add Page
        // this.adminMilestoneAddPage();
        // // Admin Milestone Details Page
        // this.adminMilestoneDetailsPage();
        //Admin MilestoneCategory Page
        this.adminMilestoneCategoryPage();
        // // Admin MilestoneCategory Add Page
        // this.adminMilestoneCategoryAddPage();
        // // Admin MilestoneCategory Details Page
        // this.adminMilestoneCategoryDetailsPage();
        //Admin MilestoneType Page
        this.adminMilestoneTypePage();
        // // Admin MilestoneType Add Page
        // this.adminMilestoneTypeAddPage();
        // // Admin MilestoneType Details Page
        // this.adminMilestoneTypeDetailsPage();
        //Admin Grade Page
        this.adminGradePage();
        // // Admin Grade Add Page
        // this.adminGradeAddPage();
        // // Admin Grade Details Page
        // this.adminGradeDetailsPage();
        //Admin ModelName Page
        this.adminModelNamePage();
        // // Admin ModelName Add Page
        // this.adminModelNameAddPage();
        // // Admin ModelName Details Page
        // this.adminModelNameDetailsPage();
        //Admin ModelYear Page
        this.adminModelYearPage();
        // // Admin ModelYear Add Page
        // this.adminModelYearAddPage();
        // // Admin ModelYear Details Page
        // this.adminModelYearDetailsPage();
        //Admin Access Page
        this.adminAccessPage();
        // // Admin Access Add Page
        // this.adminAccessAddPage();
        // // Admin Access Details Page
        // this.adminAccessDetailsPage();
        //Admin AccessGroup Page
        this.adminAccessGroupPage();
        // // Admin AccessGroup Add Page
        // this.adminAccessGroupAddPage();
        // // Admin AccessGroup Details Page
        // this.adminAccessGroupDetailsPage();
        //Admin Permission Page
        this.adminPermissionPage();
        // // Admin Permission Add Page
        // this.adminPermissionAddPage();
        // // Admin Permission Details Page
        // this.adminPermissionDetailsPage();
        //Admin Role Page
        this.adminRolePage();
        // // Admin Role Add Page
        // this.adminRoleAddPage();
        // // Admin Role Details Page
        // this.adminRoleDetailsPage();
        //Admin MaintenanceFrequency Page
        this.adminMaintenanceFrequencyPage();
        // // Admin MaintenanceFrequency Add Page
        // this.adminMaintenanceFrequencyAddPage();
        // // Admin MaintenanceFrequency Details Page
        // this.adminMaintenanceFrequencyDetailsPage();
        //Admin OperatingHours Page
        this.adminOperatingHoursPage();
        // // Admin OperatingHours Add Page
        // this.adminOperatingHoursAddPage();
        // // Admin OperatingHours Details Page
        // this.adminOperatingHoursDetailsPage();
        //Admin TestStatus Page
        this.adminTestStatusPage();
        // // Admin TestStatus Add Page
        // this.adminTestStatusAddPage();
        // // Admin TestStatus Details Page
        // this.adminTestStatusDetailsPage();
        //Admin TestRole Page
        this.adminTestRolePage();
        // // Admin TestRole Add Page
        // this.adminTestRoleAddPage();
        // // Admin TestRole Details Page
        // this.adminTestRoleDetailsPage();
        //Admin DownTimeReason Page
        this.adminDownTimeReasonPage();
        // // Admin DownTimeReason Add Page
        // this.adminDownTimeReasonAddPage();
        // // Admin DownTimeReason Details Page
        // this.adminDownTimeReasonDetailsPage();
        //Admin TestActivity Page
        this.adminTestActivityPage();
        // // Admin TestActivity Add Page
        // this.adminTestActivityAddPage();
        // // Admin TestActivity Details Page
        // this.adminTestActivityDetailsPage();
        //Admin Priority Page
        this.adminPriorityPage();
        // // Admin Priority Add Page
        // this.adminPriorityAddPage();
        // // Admin Priority Details Page
        // this.adminPriorityDetailsPage();
        //Admin Judgement Page
        this.adminJudgementPage();
        // // Admin Judgement Add Page
        // this.adminJudgementAddPage();
        // // Admin Judgement Details Page
        // this.adminJudgementDetailsPage();
        //Admin TestStage Page
        this.adminTestStagePage();
        // // Admin TestStage Add Page
        // this.adminTestStageAddPage();
        // // Admin TestStage Details Page
        // this.adminTestStageDetailsPage();
        //Admin RequirementItemType Page
        this.adminRequirementItemTypePage();
        // // Admin RequirementItemType Add Page
        // this.adminRequirementItemTypeAddPage();
        // // Admin RequirementItemType Details Page
        // this.adminRequirementItemTypeDetailsPage();
        //Admin SensorType Page
        this.adminSensorTypePage();
        // // Admin SensorType Add Page
        // this.adminSensorTypeAddPage();
        // // Admin SensorType Details Page
        // this.adminSensorTypeDetailsPage();
        //Admin StepFrequency Page
        this.adminStepFrequencyPage();
        // // Admin StepFrequency Add Page
        // this.adminStepFrequencyAddPage();
        // // Admin StepFrequency Details Page
        // this.adminStepFrequencyDetailsPage();
        //Admin TestMode Page
        this.adminTestModePage();
        // // Admin TestMode Add Page
        // this.adminTestModeAddPage();
        // // Admin TestMode Details Page
        // this.adminTestModeDetailsPage();
        //Admin StepType Page
        this.adminStepTypePage();
        // // Admin StepType Add Page
        // this.adminStepTypeAddPage();
        // // Admin StepType Details Page
        // this.adminStepTypeDetailsPage();
        //Admin TestType Page
        this.adminTestTypePage();
        // // Admin TestType Add Page
        // this.adminTestTypeAddPage();
        // // Admin TestType Details Page
        // this.adminTestTypeDetailsPage();
        //Admin TestRequirement Page
        this.adminTestRequirementPage();
        // // Admin TestRequirement Add Page
        // this.adminTestRequirementAddPage();
        // // Admin TestRequirement Details Page
        // this.adminTestRequirementDetailsPage();
        //Admin TestVerificationMethod Page
        this.adminTestVerificationMethodPage();
        // // Admin TestVerificationMethod Add Page
        // this.adminTestVerificationMethodAddPage();
        // // Admin TestVerificationMethod Details Page
        // this.adminTestVerificationMethodDetailsPage();
        //Admin VehicleType Page
        this.adminVehicleTypePage();
        // // Admin VehicleType Add Page
        // this.adminVehicleTypeAddPage();
        // // Admin VehicleType Details Page
        // this.adminVehicleTypeDetailsPage();
        //Admin EngineCode Page
        this.adminEngineCodePage();
        // // Admin EngineCode Add Page
        // this.adminEngineCodeAddPage();
        // // Admin EngineCode Details Page
        // this.adminEngineCodeDetailsPage();
    }
    // Home Page Bread Crumbs
    BreadCrumbsService.prototype.homeBreadCrumbAdd = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        var homePage = { pageName: 'Home', items: menuItems };
        this.addToBreadCrumbs(homePage);
    };
    BreadCrumbsService.prototype.homeBreadCrumbItem = function () {
        var menuItem = { label: 'Home', routerLink: ['/'] };
        return menuItem;
    };
    // Admin Bread Crumbs Section
    //Admin Home Page Bread Crumbs
    BreadCrumbsService.prototype.adminBreadCrumbAdd = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        // menuItems.push(this.adminHomePageBCItems());
        var adminHomePage = { pageName: 'Admin', items: menuItems };
        this.addToBreadCrumbs(adminHomePage);
    };
    BreadCrumbsService.prototype.adminHomePageBCItems = function () {
        var menuItem = { label: 'Admin', routerLink: ['/admin'] };
        return menuItem;
    };
    // Admin Form Builder Home Page
    BreadCrumbsService.prototype.adminFormBuilderPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminFormBuilderPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'FormBuilderHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminFormBuilderPageBCItems = function () {
        var menuItem = { label: 'Form Builder', routerLink: 'app/body/Admin/formBuilders' };
        return menuItem;
    };
    // Admin Form Builder Add Bread Crumbs
    BreadCrumbsService.prototype.adminFormBuilderAddFormPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminFormBuilderPageBCItems());
        menuItems.push(this.adminFormBuilderAddFormPageBCItems());
        var bcInfoItems = [];
        bcInfoItems.push({ pageName: 'FormBuilderAddForm', items: this.adminFormBuilderAddFormPageBCItems() });
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminFormBuilderAddFormPageBCItems = function () {
        var menuItem = { label: 'Add Form', routerLink: 'app/body/Admin/FormBuilder/add/' };
        return menuItem;
    };
    // Admin Form Builder Details Page Bread Crumbs
    BreadCrumbsService.prototype.adminFormBuilderDetailsFormPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminFormBuilderPageBCItems());
        menuItems.push(this.adminFormBuilderDetailsFormPageBCItems());
        var bcInfoItems = [];
        bcInfoItems.push({ pageName: 'FormBuilderDetailsForm', items: menuItems });
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminFormBuilderDetailsFormPageBCItems = function () {
        var menuItem = { label: 'Details Form', routerLink: 'app/body/Admin/FormBuilder/details/' };
        return menuItem;
    };
    // Calendar Page Bread Crumbs
    BreadCrumbsService.prototype.calendarPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        var bcInfoItems;
        bcInfoItems = { pageName: 'CalendarHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.calendarPageBCItems = function () {
        var menuItem = { label: 'Calendar', routerLink: ['/calendar'] };
        return menuItem;
    };
    // TestFacilities Page Bread Crumbs
    BreadCrumbsService.prototype.testFacilitiesPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TestFacilitiesHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.testFacilitiesPageBCItems = function () {
        var menuItem = { label: 'Test Facilities', routerLink: ['/testFacilities'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.testFacilitiesAddPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.testFacilitiesPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TestFacilitiesAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.testFacilitiesAddPageBCItems = function () {
        var menuItem = { label: 'Test Facilities Add', routerLink: ['/testFacilities'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.testFacilitiesDetailsPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.testFacilitiesPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TestFacilitiesDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.testFacilitiesDetailsPageBCItems = function () {
        var menuItem = { label: 'Test Facilities Details', routerLink: ['/testFacilities'] };
        return menuItem;
    };
    // Admin Vehicle Home Page Bread Crumbs
    BreadCrumbsService.prototype.adminVehicleHomePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'adminVehicleHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminVehicleHomePageBCItems = function () {
        var menuItem = { label: 'Vehicle', routerLink: ['/admin'] };
        return menuItem;
    };
    // Admin Shift Bread Crumbs
    BreadCrumbsService.prototype.adminShiftPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'ShiftHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminShiftPageBCItems = function () {
        var menuItem = { label: 'Shift', routerLink: ['/admin/vehicle/shift'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminShiftAddPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminShiftPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'ShiftAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminShiftAddPageBCItems = function () {
        var menuItem = { label: 'Add Shift', routerLink: ['/admin/vehicle/shift'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminShiftDetailsPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminShiftPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'ShiftDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminShiftDetailsPageBCItems = function () {
        var menuItem = { label: 'Shift Details', routerLink: ['/admin/vehicle/shift'] };
        return menuItem;
    };
    // Admin Holiday Bread Crumbs
    BreadCrumbsService.prototype.adminHolidayPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'HolidayHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminHolidayPageBCItems = function () {
        var menuItem = { label: 'Holiday', routerLink: ['/admin/vehicle/holiday'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminHolidayAddPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'HolidayAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminHolidayAddPageBCItems = function () {
        var menuItem = { label: 'Add Holiday', routerLink: ['/admin/vehicle/holiday'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminHolidayDetailsPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'HolidayDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminHolidayDetailsPageBCItems = function () {
        var menuItem = { label: 'Holiday Details', routerLink: ['/admin/vehicle/holiday'] };
        return menuItem;
    };
    // Admin Step Bread Crumbs
    BreadCrumbsService.prototype.adminStepPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'StepHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminStepPageBCItems = function () {
        var menuItem = { label: 'Step', routerLink: ['/admin/vehicle/step'] };
        return menuItem;
    };
    // private adminStepAddPage() {
    //     let menuItems = [];
    //     menuItems.push(this.homeBreadCrumbItem());
    //     menuItems.push(this.adminHomePageBCItems());
    //     menuItems.push(this.adminVehicleHomePageBCItems());
    //     menuItems.push(this.adminStepPageBCItems());
    //     let bcInfoItems: IBreadCrumbsInfo;
    //     bcInfoItems = { pageName: 'StepAddPage', items: menuItems };
    //     this.addToBreadCrumbs(bcInfoItems);
    // }
    // private adminStepAddPageBCItems() {
    //     let menuItem = { label: 'Add Step', routerLink: ['/admin/vehicle/step'] };
    //     return menuItem;
    // }
    // private adminStepDetailsPage() {
    //     let menuItems = [];
    //     menuItems.push(this.homeBreadCrumbItem());
    //     menuItems.push(this.adminHomePageBCItems());
    //     menuItems.push(this.adminVehicleHomePageBCItems());
    //     menuItems.push(this.adminStepPageBCItems());
    //     let bcInfoItems: IBreadCrumbsInfo;
    //     bcInfoItems = { pageName: 'StepDetailsPage', items: menuItems };
    //     this.addToBreadCrumbs(bcInfoItems);
    // }
    // private adminStepDetailsPageBCItems() {
    //     let menuItem = { label: 'Step Details', routerLink: ['/admin/vehicle/step'] };
    //     return menuItem;
    // }
    // Admin Units Bread Crumbs
    BreadCrumbsService.prototype.adminUnitsPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'UnitsHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminUnitsPageBCItems = function () {
        var menuItem = { label: 'Units', routerLink: ['/admin/vehicle/units'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminUnitsAddPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminUnitsPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'UnitsAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminUnitsAddPageBCItems = function () {
        var menuItem = { label: 'Add Units', routerLink: ['/admin/vehicle/units'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminUnitsDetailsPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminUnitsPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'UnitsDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminUnitsDetailsPageBCItems = function () {
        var menuItem = { label: 'Units Details', routerLink: ['/admin/vehicle/units'] };
        return menuItem;
    };
    // Admin BuildLevels Bread Crumbs
    BreadCrumbsService.prototype.adminBuildLevelsPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'BuildLevelsHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminBuildLevelsPageBCItems = function () {
        var menuItem = { label: 'BuildLevels', routerLink: ['/admin/vehicle/buildLevel'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminBuildLevelsAddPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminBuildLevelsPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'BuildLevelsAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminBuildLevelsAddPageBCItems = function () {
        var menuItem = { label: 'Add BuildLevels', routerLink: ['/admin/vehicle/buildLevel'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminBuildLevelsDetailsPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminBuildLevelsPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'BuildLevelsDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminBuildLevelsDetailsPageBCItems = function () {
        var menuItem = { label: 'BuildLevels Details', routerLink: ['/admin/vehicle/buildLevel'] };
        return menuItem;
    };
    // Admin Market Bread Crumbs
    BreadCrumbsService.prototype.adminMarketPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'MarketHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminMarketPageBCItems = function () {
        var menuItem = { label: 'Market', routerLink: ['/admin/vehicle/market'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminMarketAddPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminMarketPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'MarketAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminMarketAddPageBCItems = function () {
        var menuItem = { label: 'Add Market', routerLink: ['/admin/vehicle/market'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminMarketDetailsPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminMarketPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'MarketDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminMarketDetailsPageBCItems = function () {
        var menuItem = { label: 'Market Details', routerLink: ['/admin/vehicle/market'] };
        return menuItem;
    };
    // Admin Platform Bread Crumbs
    BreadCrumbsService.prototype.adminPlatformPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'PlatformHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminPlatformPageBCItems = function () {
        var menuItem = { label: 'Platform', routerLink: ['/admin/vehicle/platform'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminPlatformAddPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminPlatformPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'PlatformAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminPlatformAddPageBCItems = function () {
        var menuItem = { label: 'Add Platform', routerLink: ['/admin/vehicle/platform'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminPlatformDetailsPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminPlatformPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'PlatformDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminPlatformDetailsPageBCItems = function () {
        var menuItem = { label: 'Platform Details', routerLink: ['/admin/vehicle/platform'] };
        return menuItem;
    };
    // Admin TitanRole Bread Crumbs
    BreadCrumbsService.prototype.adminTitanRolePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TitanRoleHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminTitanRolePageBCItems = function () {
        var menuItem = { label: 'TitanRole', routerLink: ['/admin/vehicle/titanRole'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminTitanRoleAddPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminTitanRolePageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TitanRoleAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminTitanRoleAddPageBCItems = function () {
        var menuItem = { label: 'Add TitanRole', routerLink: ['/admin/vehicle/titanRole'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminTitanRoleDetailsPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminTitanRolePageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TitanRoleDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminTitanRoleDetailsPageBCItems = function () {
        var menuItem = { label: 'TitanRole Details', routerLink: ['/admin/vehicle/titanRole'] };
        return menuItem;
    };
    // Admin MilestoneStatus Bread Crumbs
    BreadCrumbsService.prototype.adminMilestoneStatusPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'MilestoneStatusHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminMilestoneStatusPageBCItems = function () {
        var menuItem = { label: 'MilestoneStatus', routerLink: ['/admin/vehicle/milestoneStatus'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminMilestoneStatusAddPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminMilestoneStatusPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'MilestoneStatusAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminMilestoneStatusAddPageBCItems = function () {
        var menuItem = { label: 'Add MilestoneStatus', routerLink: ['/admin/vehicle/milestoneStatus'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.adminMilestoneStatusDetailsPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminMilestoneStatusPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'MilestoneStatusDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminMilestoneStatusDetailsPageBCItems = function () {
        var menuItem = { label: 'MilestoneStatus Details', routerLink: ['/admin/vehicle/milestoneStatus'] };
        return menuItem;
    };
    // Admin ProjectStatus Bread Crumbs
    BreadCrumbsService.prototype.adminProjectStatusPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'ProjectStatusHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminProjectStatusPageBCItems = function () {
        var menuItem = { label: 'ProjectStatus', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin ProjectRole Bread Crumbs
    BreadCrumbsService.prototype.adminProjectRolePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'ProjectRoleHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminProjectRolePageBCItems = function () {
        var menuItem = { label: 'ProjectRole', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin Milestone Bread Crumbs
    BreadCrumbsService.prototype.adminMilestonePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'MilestoneHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminMilestonePageBCItems = function () {
        var menuItem = { label: 'Milestone', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin MilestoneCategory Bread Crumbs
    BreadCrumbsService.prototype.adminMilestoneCategoryPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'MilestoneCategoryHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminMilestoneCategoryPageBCItems = function () {
        var menuItem = { label: 'MilestoneCategory', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin MilestoneType Bread Crumbs
    BreadCrumbsService.prototype.adminMilestoneTypePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'MilestoneTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminMilestoneTypePageBCItems = function () {
        var menuItem = { label: 'MilestoneType', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin Grade Bread Crumbs
    BreadCrumbsService.prototype.adminGradePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'GradeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminGradePageBCItems = function () {
        var menuItem = { label: 'Grade', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin ModelName Bread Crumbs
    BreadCrumbsService.prototype.adminModelNamePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'ModelNameHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminModelNamePageBCItems = function () {
        var menuItem = { label: 'ModelName', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin ModelYear Bread Crumbs
    BreadCrumbsService.prototype.adminModelYearPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'ModelYearHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminModelYearPageBCItems = function () {
        var menuItem = { label: 'ModelYear', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin Access Bread Crumbs
    BreadCrumbsService.prototype.adminAccessPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'AccessHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminAccessPageBCItems = function () {
        var menuItem = { label: 'Access', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin AccessGroup Bread Crumbs
    BreadCrumbsService.prototype.adminAccessGroupPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'AccessGroupHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminAccessGroupPageBCItems = function () {
        var menuItem = { label: 'AccessGroup', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin Permission Bread Crumbs
    BreadCrumbsService.prototype.adminPermissionPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'PermissionHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminPermissionPageBCItems = function () {
        var menuItem = { label: 'Permission', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin Role Bread Crumbs
    BreadCrumbsService.prototype.adminRolePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'RoleHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminRolePageBCItems = function () {
        var menuItem = { label: 'Role', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin MaintenanceFrequency Bread Crumbs
    BreadCrumbsService.prototype.adminMaintenanceFrequencyPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'MaintenanceFrequencyHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminMaintenanceFrequencyPageBCItems = function () {
        var menuItem = { label: 'MaintenanceFrequency', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin OperatingHours Bread Crumbs
    BreadCrumbsService.prototype.adminOperatingHoursPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'OperatingHoursHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminOperatingHoursPageBCItems = function () {
        var menuItem = { label: 'OperatingHours', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin TestStatus Bread Crumbs
    BreadCrumbsService.prototype.adminTestStatusPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TestStatusHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminTestStatusPageBCItems = function () {
        var menuItem = { label: 'Test Staus', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin TestRole Bread Crumbs
    BreadCrumbsService.prototype.adminTestRolePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TestRoleHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminTestRolePageBCItems = function () {
        var menuItem = { label: 'Test Role', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin DownTimeReason Bread Crumbs
    BreadCrumbsService.prototype.adminDownTimeReasonPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'DownTimeReasonHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminDownTimeReasonPageBCItems = function () {
        var menuItem = { label: 'DownTimeReason', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin TestActivity Bread Crumbs
    BreadCrumbsService.prototype.adminTestActivityPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TestActivityHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminTestActivityPageBCItems = function () {
        var menuItem = { label: 'TestActivity', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin Priority Bread Crumbs
    BreadCrumbsService.prototype.adminPriorityPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'PriorityHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminPriorityPageBCItems = function () {
        var menuItem = { label: 'Priority', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin Judgement Bread Crumbs
    BreadCrumbsService.prototype.adminJudgementPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'JudgementHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminJudgementPageBCItems = function () {
        var menuItem = { label: 'Judgement', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin TestStage Bread Crumbs
    BreadCrumbsService.prototype.adminTestStagePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TestStageHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminTestStagePageBCItems = function () {
        var menuItem = { label: 'TestStage', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin RequirementItemType Bread Crumbs
    BreadCrumbsService.prototype.adminRequirementItemTypePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'RequirementItemTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminRequirementItemTypeBCItems = function () {
        var menuItem = { label: 'RequirementItemType', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin SensorType Bread Crumbs
    BreadCrumbsService.prototype.adminSensorTypePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'SensorTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminSensorTypeBCItems = function () {
        var menuItem = { label: 'SensorType', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin StepFrequency Bread Crumbs
    BreadCrumbsService.prototype.adminStepFrequencyPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'StepFrequencyHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminStepFrequencyBCItems = function () {
        var menuItem = { label: 'StepFrequency', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin TestMode Bread Crumbs
    BreadCrumbsService.prototype.adminTestModePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TestModeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminTestModeBCItems = function () {
        var menuItem = { label: 'TestMode', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin StepType Bread Crumbs
    BreadCrumbsService.prototype.adminStepTypePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'StepTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminStepTypeBCItems = function () {
        var menuItem = { label: 'StepType', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin TestType Bread Crumbs
    BreadCrumbsService.prototype.adminTestTypePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TestTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminTestTypeBCItems = function () {
        var menuItem = { label: 'TestType', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin TestRequirement Bread Crumbs
    BreadCrumbsService.prototype.adminTestRequirementPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TestRequirementHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminTestRequirementBCItems = function () {
        var menuItem = { label: 'TestRequirement', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin TestVerificationMethod Bread Crumbs
    BreadCrumbsService.prototype.adminTestVerificationMethodPage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'TestVerificationMethodHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminTestVerificationMethodBCItems = function () {
        var menuItem = { label: 'TestVerificationMethod', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin VehicleType Bread Crumbs
    BreadCrumbsService.prototype.adminVehicleTypePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'VehicleTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminVehicleTypeBCItems = function () {
        var menuItem = { label: 'VehicleType', routerLink: ['/admin/'] };
        return menuItem;
    };
    // Admin EngineCode Bread Crumbs
    BreadCrumbsService.prototype.adminEngineCodePage = function () {
        var menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());
        var bcInfoItems;
        bcInfoItems = { pageName: 'EngineCodeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    };
    BreadCrumbsService.prototype.adminEngineCodeBCItems = function () {
        var menuItem = { label: 'EngineCode', routerLink: ['/admin/'] };
        return menuItem;
    };
    BreadCrumbsService.prototype.getBreadCrumbs = function () {
        return this.breadCrumbs;
    };
    BreadCrumbsService.prototype.addToBreadCrumbs = function (item) {
        this.breadCrumbs.push(item);
    };
    BreadCrumbsService.prototype.bcNavigation = function (event) {
        console.log('BreadCrumb Service ----', event);
    };
    BreadCrumbsService = __decorate([
        core_1.Injectable()
    ], BreadCrumbsService);
    return BreadCrumbsService;
}());
exports.BreadCrumbsService = BreadCrumbsService;
