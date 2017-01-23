/**
 * Created by ZeroInfinity on 12/27/2016.
 */
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { IBreadCrumbsInfo } from "./IBreadCrumbsInfo";

@Injectable()
export class BreadCrumbsService {
    private breadCrumbs: IBreadCrumbsInfo[] = [];

    constructor() {
        // Initialize the whole bread crumbs for the whole site;

        // Home page
        this.homeBreadCrumbAdd();

        // Admin Home Page
        this.adminBreadCrumbAdd();

        // Admin FormBuilder
        this.adminFormBuilderPage();

        // Admin Form Builder Add
        this.adminFormBuilderAddFormPage()

        //Admin Form Builder Details
        this.adminFormBuilderDetailsFormPage();

        //Calendar Page
        this.calendarPage();

        //TestFacilities Page
        this.testFacilitiesPage();
        //Test Facilities Add
        this.testFacilitiesAddPage();
        //Test Facilities Details
        this.testFacilitiesDetailsPage();

        //Equipment Page
        this.equipmentPage();
        //Equipment Add
        this.equipmentAddPage();
        //Equipment Details
        this.equipmentDetailsPage();

        //EquipmentType Page
        this.equipmentTypePage();
        //EquipmentType Add
        this.equipmentTypeAddPage();
        //EquipmentType Details
        this.equipmentTypeDetailsPage();

        //TestTemplate Page
        this.testTemplatePage();
        //TestTemplate Add
        this.testTemplateAddPage();
        //TestTemplate Details
        this.testTemplateDetailsPage();

        // Admin Vehicle Home Page
        this.adminVehicleHomePage();

        // // Lookups Page
        // this.lookupsPage();

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
    private homeBreadCrumbAdd() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        let homePage = { pageName: 'Home', items: menuItems };

        this.addToBreadCrumbs(homePage);

    }

    private homeBreadCrumbItem() {
        let menuItem = { label: 'Home', routerLink: ['/'] }
        return menuItem;
    }

    // Admin Bread Crumbs Section
    //Admin Home Page Bread Crumbs
    private adminBreadCrumbAdd() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        // menuItems.push(this.adminHomePageBCItems());

        let adminHomePage = { pageName: 'Admin', items: menuItems };

        this.addToBreadCrumbs(adminHomePage);
    }

    private adminHomePageBCItems() {
        let menuItem = { label: 'Admin', routerLink: ['/admin'] };

        return menuItem;
    }

    // // Lookups Page Bread Crumbs
    // private lookupsPage() {
    //     let menuItems = [];
    //     menuItems.push(this.homeBreadCrumbItem());
    //     // menuItems.push(this.adminHomePageBCItems());

    //     let bcInfoItems: IBreadCrumbsInfo;
    //     bcInfoItems = { pageName: 'lookupsHomePage', items: menuItems };

    //     this.addToBreadCrumbs(bcInfoItems);
    // }

    // private lookupsPageBCItems() {
    //     let menuItem = { label: 'Lookups', routerLink: ['/lookup'] };

    //     return menuItem;
    // }

    // Admin Form Builder Home Page
    private adminFormBuilderPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminFormBuilderPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'FormBuilderHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminFormBuilderPageBCItems() {
        let menuItem = { label: 'Form Builder', routerLink: 'app/body/Admin/formBuilders' };
        return menuItem;
    }
    // Admin Form Builder Add Bread Crumbs
    private adminFormBuilderAddFormPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminFormBuilderPageBCItems());
        menuItems.push(this.adminFormBuilderAddFormPageBCItems());

        let bcInfoItems = [];
        bcInfoItems.push({ pageName: 'FormBuilderAddForm', items: this.adminFormBuilderAddFormPageBCItems() });

        this.addToBreadCrumbs(bcInfoItems);

    }

    private adminFormBuilderAddFormPageBCItems() {
        let menuItem = { label: 'Add Form', routerLink: 'app/body/Admin/FormBuilder/add/' };

        return menuItem;
    }

    // Admin Form Builder Details Page Bread Crumbs
    private adminFormBuilderDetailsFormPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminFormBuilderPageBCItems());
        menuItems.push(this.adminFormBuilderDetailsFormPageBCItems());

        let bcInfoItems = [];
        bcInfoItems.push({ pageName: 'FormBuilderDetailsForm', items: menuItems });

        this.addToBreadCrumbs(bcInfoItems);

    }

    private adminFormBuilderDetailsFormPageBCItems() {
        let menuItem = { label: 'Details Form', routerLink: 'app/body/Admin/FormBuilder/details/' };

        return menuItem;
    }

    // Calendar Page Bread Crumbs
    private calendarPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'CalendarHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private calendarPageBCItems() {
        let menuItem = { label: 'Calendar', routerLink: ['/calendar'] };
        return menuItem;
    }

    // TestFacilities Page Bread Crumbs
    private testFacilitiesPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestFacilitiesHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private testFacilitiesPageBCItems() {
        let menuItem = { label: 'Test Facilities', routerLink: ['/testFacilities'] };
        return menuItem;
    }

    private testFacilitiesAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.testFacilitiesPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestFacilitiesAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private testFacilitiesAddPageBCItems() {
        let menuItem = { label: 'Test Facilities Add', routerLink: ['/testFacilities'] };
        return menuItem;
    }

    private testFacilitiesDetailsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.testFacilitiesPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestFacilitiesDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private testFacilitiesDetailsPageBCItems() {
        let menuItem = { label: 'Test Facilities Details', routerLink: ['/testFacilities'] };
        return menuItem;
    }

    // EquipmentType Page Bread Crumbs
    private equipmentTypePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'EquipmentTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private equipmentTypePageBCItems() {
        let menuItem = { label: 'Equipment Type', routerLink: ['/equipmenttype'] };
        return menuItem;
    }

    private equipmentTypeAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.equipmentTypePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'EquipmentTypeAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private equipmentTypeAddPageBCItems() {
        let menuItem = { label: 'EquipmentType Add', routerLink: ['/equipmenttype'] };
        return menuItem;
    }

    private equipmentTypeDetailsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.equipmentTypePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'EquipmentTypeDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private equipmentTypeDetailsPageBCItems() {
        let menuItem = { label: 'EquipmentType Details', routerLink: ['/equipmenttype'] };
        return menuItem;
    }


    // Equipment Page Bread Crumbs
    private equipmentPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'EquipmentHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private equipmentPageBCItems() {
        let menuItem = { label: 'Equipment', routerLink: ['/equipment'] };
        return menuItem;
    }

    private equipmentAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.equipmentPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'EquipmentAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private equipmentAddPageBCItems() {
        let menuItem = { label: 'Equipment Add', routerLink: ['/equipment'] };
        return menuItem;
    }

    private equipmentDetailsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.equipmentPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'EquipmentDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private equipmentDetailsPageBCItems() {
        let menuItem = { label: 'Equipment Details', routerLink: ['/equipment'] };
        return menuItem;
    }


    // TestTemplate Page Bread Crumbs
    private testTemplatePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestTemplateHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private testTemplatePageBCItems() {
        let menuItem = { label: 'TestTemplate', routerLink: ['/testTemplate'] };
        return menuItem;
    }

    private testTemplateAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.testTemplatePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestTemplateAddPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private testTemplateAddPageBCItems() {
        let menuItem = { label: 'TestTemplate Add', routerLink: ['/testTemplate'] };
        return menuItem;
    }

    private testTemplateDetailsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.testTemplatePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestTemplateDetailsPage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private testTemplateDetailsPageBCItems() {
        let menuItem = { label: 'TestTemplate Details', routerLink: ['/testTemplate'] };
        return menuItem;
    }


    // Admin Vehicle Home Page Bread Crumbs
    private adminVehicleHomePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'adminVehicleHomePage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminVehicleHomePageBCItems() {
        let menuItem = { label: 'Vehicle', routerLink: ['/admin'] };

        return menuItem;
    }


    // Admin Shift Bread Crumbs
    private adminShiftPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'ShiftHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminShiftPageBCItems() {
        let menuItem = { label: 'Shift', routerLink: ['/admin/vehicle/shift'] };
        return menuItem;
    }

    private adminShiftAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        // menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminShiftPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'ShiftAddPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);

    }

    private adminShiftAddPageBCItems() {
        let menuItem = { label: 'Add Shift', routerLink: ['/admin/vehicle/shift'] };
        return menuItem;
    }

    private adminShiftDetailsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        // menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminShiftPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'ShiftDetailsPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminShiftDetailsPageBCItems() {
        let menuItem = { label: 'Shift Details', routerLink: ['/admin/vehicle/shift'] };

        return menuItem;
    }

    // Admin Holiday Bread Crumbs
    private adminHolidayPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'HolidayHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminHolidayPageBCItems() {
        let menuItem = { label: 'Holiday', routerLink: ['/admin/vehicle/holiday'] };
        return menuItem;
    }

    private adminHolidayAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'HolidayAddPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);

    }

    private adminHolidayAddPageBCItems() {
        let menuItem = { label: 'Add Holiday', routerLink: ['/admin/vehicle/holiday'] };
        return menuItem;
    }

    private adminHolidayDetailsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'HolidayDetailsPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminHolidayDetailsPageBCItems() {
        let menuItem = { label: 'Holiday Details', routerLink: ['/admin/vehicle/holiday'] };

        return menuItem;
    }

    // Admin Step Bread Crumbs
    private adminStepPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'StepHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminStepPageBCItems() {
        let menuItem = { label: 'Step', routerLink: ['/admin/vehicle/step'] };
        return menuItem;
    }

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
    private adminUnitsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'UnitsHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminUnitsPageBCItems() {
        let menuItem = { label: 'Units', routerLink: ['/admin/vehicle/units'] };
        return menuItem;
    }

    private adminUnitsAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminUnitsPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'UnitsAddPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);

    }

    private adminUnitsAddPageBCItems() {
        let menuItem = { label: 'Add Units', routerLink: ['/admin/vehicle/units'] };
        return menuItem;
    }

    private adminUnitsDetailsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminUnitsPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'UnitsDetailsPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminUnitsDetailsPageBCItems() {
        let menuItem = { label: 'Units Details', routerLink: ['/admin/vehicle/units'] };

        return menuItem;
    }

    // Admin BuildLevels Bread Crumbs
    private adminBuildLevelsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'BuildLevelsHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminBuildLevelsPageBCItems() {
        let menuItem = { label: 'BuildLevels', routerLink: ['/admin/vehicle/buildLevel'] };
        return menuItem;
    }

    private adminBuildLevelsAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminBuildLevelsPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'BuildLevelsAddPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);

    }

    private adminBuildLevelsAddPageBCItems() {
        let menuItem = { label: 'Add BuildLevels', routerLink: ['/admin/vehicle/buildLevel'] };
        return menuItem;
    }

    private adminBuildLevelsDetailsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminBuildLevelsPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'BuildLevelsDetailsPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminBuildLevelsDetailsPageBCItems() {
        let menuItem = { label: 'BuildLevels Details', routerLink: ['/admin/vehicle/buildLevel'] };

        return menuItem;
    }

    // Admin Market Bread Crumbs
    private adminMarketPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'MarketHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminMarketPageBCItems() {
        let menuItem = { label: 'Market', routerLink: ['/admin/vehicle/market'] };
        return menuItem;
    }

    private adminMarketAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminMarketPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'MarketAddPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);

    }

    private adminMarketAddPageBCItems() {
        let menuItem = { label: 'Add Market', routerLink: ['/admin/vehicle/market'] };
        return menuItem;
    }

    private adminMarketDetailsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminMarketPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'MarketDetailsPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminMarketDetailsPageBCItems() {
        let menuItem = { label: 'Market Details', routerLink: ['/admin/vehicle/market'] };

        return menuItem;
    }

    // Admin Platform Bread Crumbs
    private adminPlatformPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'PlatformHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminPlatformPageBCItems() {
        let menuItem = { label: 'Platform', routerLink: ['/admin/vehicle/platform'] };
        return menuItem;
    }

    private adminPlatformAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminPlatformPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'PlatformAddPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);

    }

    private adminPlatformAddPageBCItems() {
        let menuItem = { label: 'Add Platform', routerLink: ['/admin/vehicle/platform'] };
        return menuItem;
    }

    private adminPlatformDetailsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminPlatformPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'PlatformDetailsPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminPlatformDetailsPageBCItems() {
        let menuItem = { label: 'Platform Details', routerLink: ['/admin/vehicle/platform'] };

        return menuItem;
    }

    // Admin TitanRole Bread Crumbs
    private adminTitanRolePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TitanRoleHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminTitanRolePageBCItems() {
        let menuItem = { label: 'TitanRole', routerLink: ['/admin/vehicle/titanRole'] };
        return menuItem;
    }

    private adminTitanRoleAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminTitanRolePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TitanRoleAddPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);

    }

    private adminTitanRoleAddPageBCItems() {
        let menuItem = { label: 'Add TitanRole', routerLink: ['/admin/vehicle/titanRole'] };
        return menuItem;
    }

    private adminTitanRoleDetailsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminTitanRolePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TitanRoleDetailsPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminTitanRoleDetailsPageBCItems() {
        let menuItem = { label: 'TitanRole Details', routerLink: ['/admin/vehicle/titanRole'] };

        return menuItem;
    }

    // Admin MilestoneStatus Bread Crumbs
    private adminMilestoneStatusPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'MilestoneStatusHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminMilestoneStatusPageBCItems() {
        let menuItem = { label: 'MilestoneStatus', routerLink: ['/admin/vehicle/milestoneStatus'] };
        return menuItem;
    }

    private adminMilestoneStatusAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminMilestoneStatusPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'MilestoneStatusAddPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);

    }

    private adminMilestoneStatusAddPageBCItems() {
        let menuItem = { label: 'Add MilestoneStatus', routerLink: ['/admin/vehicle/milestoneStatus'] };
        return menuItem;
    }

    private adminMilestoneStatusDetailsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminMilestoneStatusPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'MilestoneStatusDetailsPage', items: menuItems };

        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminMilestoneStatusDetailsPageBCItems() {
        let menuItem = { label: 'MilestoneStatus Details', routerLink: ['/admin/vehicle/milestoneStatus'] };

        return menuItem;
    }

    // Admin ProjectStatus Bread Crumbs
    private adminProjectStatusPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'ProjectStatusHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminProjectStatusPageBCItems() {
        let menuItem = { label: 'ProjectStatus', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin ProjectRole Bread Crumbs
    private adminProjectRolePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'ProjectRoleHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminProjectRolePageBCItems() {
        let menuItem = { label: 'ProjectRole', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin Milestone Bread Crumbs
    private adminMilestonePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'MilestoneHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminMilestonePageBCItems() {
        let menuItem = { label: 'Milestone', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin MilestoneCategory Bread Crumbs
    private adminMilestoneCategoryPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'MilestoneCategoryHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminMilestoneCategoryPageBCItems() {
        let menuItem = { label: 'MilestoneCategory', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin MilestoneType Bread Crumbs
    private adminMilestoneTypePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'MilestoneTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminMilestoneTypePageBCItems() {
        let menuItem = { label: 'MilestoneType', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin Grade Bread Crumbs
    private adminGradePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'GradeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminGradePageBCItems() {
        let menuItem = { label: 'Grade', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin ModelName Bread Crumbs
    private adminModelNamePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'ModelNameHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminModelNamePageBCItems() {
        let menuItem = { label: 'ModelName', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin ModelYear Bread Crumbs
    private adminModelYearPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'ModelYearHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminModelYearPageBCItems() {
        let menuItem = { label: 'ModelYear', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin Access Bread Crumbs
    private adminAccessPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'AccessHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminAccessPageBCItems() {
        let menuItem = { label: 'Access', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin AccessGroup Bread Crumbs
    private adminAccessGroupPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'AccessGroupHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminAccessGroupPageBCItems() {
        let menuItem = { label: 'AccessGroup', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin Permission Bread Crumbs
    private adminPermissionPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'PermissionHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminPermissionPageBCItems() {
        let menuItem = { label: 'Permission', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin Role Bread Crumbs
    private adminRolePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'RoleHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminRolePageBCItems() {
        let menuItem = { label: 'Role', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin MaintenanceFrequency Bread Crumbs
    private adminMaintenanceFrequencyPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'MaintenanceFrequencyHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminMaintenanceFrequencyPageBCItems() {
        let menuItem = { label: 'MaintenanceFrequency', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin OperatingHours Bread Crumbs
    private adminOperatingHoursPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'OperatingHoursHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminOperatingHoursPageBCItems() {
        let menuItem = { label: 'OperatingHours', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin TestStatus Bread Crumbs
    private adminTestStatusPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestStatusHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminTestStatusPageBCItems() {
        let menuItem = { label: 'Test Staus', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin TestRole Bread Crumbs
    private adminTestRolePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestRoleHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminTestRolePageBCItems() {
        let menuItem = { label: 'Test Role', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin DownTimeReason Bread Crumbs
    private adminDownTimeReasonPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'DownTimeReasonHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminDownTimeReasonPageBCItems() {
        let menuItem = { label: 'DownTimeReason', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin TestActivity Bread Crumbs
    private adminTestActivityPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestActivityHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminTestActivityPageBCItems() {
        let menuItem = { label: 'TestActivity', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin Priority Bread Crumbs
    private adminPriorityPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'PriorityHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminPriorityPageBCItems() {
        let menuItem = { label: 'Priority', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin Judgement Bread Crumbs
    private adminJudgementPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'JudgementHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminJudgementPageBCItems() {
        let menuItem = { label: 'Judgement', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin TestStage Bread Crumbs
    private adminTestStagePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestStageHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminTestStagePageBCItems() {
        let menuItem = { label: 'TestStage', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin RequirementItemType Bread Crumbs
    private adminRequirementItemTypePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'RequirementItemTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminRequirementItemTypeBCItems() {
        let menuItem = { label: 'RequirementItemType', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin SensorType Bread Crumbs
    private adminSensorTypePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'SensorTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminSensorTypeBCItems() {
        let menuItem = { label: 'SensorType', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin StepFrequency Bread Crumbs
    private adminStepFrequencyPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'StepFrequencyHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminStepFrequencyBCItems() {
        let menuItem = { label: 'StepFrequency', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin TestMode Bread Crumbs
    private adminTestModePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestModeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminTestModeBCItems() {
        let menuItem = { label: 'TestMode', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin StepType Bread Crumbs
    private adminStepTypePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'StepTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminStepTypeBCItems() {
        let menuItem = { label: 'StepType', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin TestType Bread Crumbs
    private adminTestTypePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminTestTypeBCItems() {
        let menuItem = { label: 'TestType', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin TestRequirement Bread Crumbs
    private adminTestRequirementPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestRequirementHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminTestRequirementBCItems() {
        let menuItem = { label: 'TestRequirement', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin TestVerificationMethod Bread Crumbs
    private adminTestVerificationMethodPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TestVerificationMethodHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminTestVerificationMethodBCItems() {
        let menuItem = { label: 'TestVerificationMethod', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin VehicleType Bread Crumbs
    private adminVehicleTypePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'VehicleTypeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminVehicleTypeBCItems() {
        let menuItem = { label: 'VehicleType', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin EngineCode Bread Crumbs
    private adminEngineCodePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'EngineCodeHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminEngineCodeBCItems() {
        let menuItem = { label: 'EngineCode', routerLink: ['/admin/'] };
        return menuItem;
    }

    public getBreadCrumbs() {
        return this.breadCrumbs;
    }


    private addToBreadCrumbs(item) {
        this.breadCrumbs.push(item);
    }

    private bcNavigation(event) {
        console.log('BreadCrumb Service ----', event);
    }
}