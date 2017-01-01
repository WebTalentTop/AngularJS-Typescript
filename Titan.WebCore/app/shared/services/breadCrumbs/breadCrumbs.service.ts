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

        // Admin Vehicle Home Page
        this.adminVehicleHomePage();

        // Admin Shift Page
        this.adminShiftPage();
        // Admin Shift Add Page
        this.adminShiftAddPage()

        //Admin Holiday Page
        this.adminHolidayPage();

        //Admin Step Page
        this.adminStepPage();

        //Admin Units Page
        this.adminUnitsPage();

        //Admin BuildLevels Page
        this.adminBuildLevelsPage();

        //Admin Market Page
        this.adminMarketPage();

        //Admin Platform Page
        this.adminPlatformPage();

        //Admin TitanRole Page
        this.adminTitanRolePage();

        //Admin MilestoneStatus Page
        this.adminMilestoneStatusPage();

        //Admin ProjectStatus Page
        this.adminProjectStatusPage();

        //Admin ProjectRole Page
        this.adminProjectRolePage();

        //Admin Milestone Page
        this.adminMilestonePage();

        //Admin MilestoneCategory Page
        this.adminMilestoneCategoryPage();

        //Admin MilestoneType Page
        this.adminMilestoneTypePage();

        //Admin Grade Page
        this.adminGradePage();

        //Admin ModelName Page
        this.adminModelNamePage();

        //Admin ModelYear Page
        this.adminModelYearPage();

        //Admin Access Page
        this.adminAccessPage();

        //Admin AccessGroup Page
        this.adminAccessGroupPage();

        //Admin Permission Page
        this.adminPermissionPage();

        //Admin Role Page
        this.adminRolePage();

        //Admin MaintenanceFrequency Page
        this.adminMaintenanceFrequencyPage();

        //Admin OperatingHours Page
        this.adminOperatingHoursPage();

        //Admin TestStatus Page
        this.adminTestStatusPage();

        //Admin TestRole Page
        this.adminTestRolePage();

        //Admin DownTimeReason Page
        this.adminDownTimeReasonPage();

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

    private adminShiftPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminShiftPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'ShiftHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminShiftPageBCItems() {
        let menuItem = { label: 'Shift', routerLink: ['/admin/'] };
        return menuItem;
    }

    // Admin Shift Add Bread Crumbs
    private adminShiftAddPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        menuItems.push(this.adminShiftPageBCItems());
        // menuItems.push(this.adminShiftAddPageBCItems());

        let bcInfoItems = [];
        bcInfoItems.push({ pageName: 'ShiftAddPage', items: menuItems });

        this.addToBreadCrumbs(bcInfoItems);

    }

    private adminShiftAddPageBCItems() {
        let menuItem = { label: 'Add Shift', routerLink: ['admin/shift'] };

        return menuItem;
    }

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
        let menuItem = { label: 'Holiday', routerLink: ['/admin/'] };
        return menuItem;
    }

    private adminStepPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'StepHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminStepPageBCItems() {
        let menuItem = { label: 'Step', routerLink: ['/admin/'] };
        return menuItem;
    }

    private adminUnitsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'UnitsHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminUnitsPageBCItems() {
        let menuItem = { label: 'Units', routerLink: ['/admin/'] };
        return menuItem;
    }

    private adminBuildLevelsPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'BuildLevelsHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminBuildLevelsPageBCItems() {
        let menuItem = { label: 'BuildLevels', routerLink: ['/admin/'] };
        return menuItem;
    }

    private adminMarketPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'MarketHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminMarketPageBCItems() {
        let menuItem = { label: 'Market', routerLink: ['/admin/'] };
        return menuItem;
    }

    private adminPlatformPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'PlatformHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminPlatformPageBCItems() {
        let menuItem = { label: 'Platform', routerLink: ['/admin/'] };
        return menuItem;
    }

    private adminTitanRolePage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'TitanRoleHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminTitanRolePageBCItems() {
        let menuItem = { label: 'TitanRole', routerLink: ['/admin/'] };
        return menuItem;
    }

    private adminMilestoneStatusPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminVehicleHomePageBCItems());
        // menuItems.push(this.adminHolidayPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = { pageName: 'MilestoneStatusHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminMilestoneStatusPageBCItems() {
        let menuItem = { label: 'MilestoneStatus', routerLink: ['/admin/'] };
        return menuItem;
    }

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