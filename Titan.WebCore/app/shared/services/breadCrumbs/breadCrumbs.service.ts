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
        menuItems.push(this.adminHomePageBCItems());

        let adminHomePage = { pageName: 'Admin', items: menuItems };

        this.addToBreadCrumbs(adminHomePage);
    }

    private adminHomePageBCItems() {
        let menuItem = { label: 'Admin', command: 'bcNavigation($event)' };

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
        let menuItem = { label: 'Vehicle', routerLink: 'app/body/admin/Vehicle/' };

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
        let menuItem = { label: 'Shift', routerLink: 'app/body/Admin/Vehicle/shift/' };
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
        let menuItem = { label: 'Holiday', routerLink: 'app/body/Admin/Vehicle/holiday/' };
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
        let menuItem = { label: 'Step', routerLink: 'app/body/Admin/Vehicle/step/' };
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
        let menuItem = { label: 'Units', routerLink: 'app/body/Admin/Vehicle/units/' };
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
        let menuItem = { label: 'BuildLevels', routerLink: 'app/body/Admin/Vehicle/buildLevels/' };
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
        let menuItem = { label: 'Market', routerLink: 'app/body/Admin/Vehicle/market/' };
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
        let menuItem = { label: 'Platform', routerLink: 'app/body/Admin/Vehicle/platform/' };
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
        let menuItem = { label: 'TitanRole', routerLink: 'app/body/Admin/Vehicle/titanRole/' };
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
        let menuItem = { label: 'MilestoneStatus', routerLink: 'app/body/Admin/Vehicle/milestoneStatus/' };
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
        let menuItem = { label: 'ProjectStatus', routerLink: 'app/body/Admin/Vehicle/projectStatus/' };
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
        let menuItem = { label: 'ProjectRole', routerLink: 'app/body/Admin/Vehicle/projectRole/' };
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
        let menuItem = { label: 'Milestone', routerLink: 'app/body/Admin/Vehicle/milestone/' };
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
        let menuItem = { label: 'MilestoneCategory', routerLink: 'app/body/Admin/Vehicle/milestoneCategory/' };
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
        let menuItem = { label: 'MilestoneType', routerLink: 'app/body/Admin/Vehicle/milestoneType/' };
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
        let menuItem = { label: 'Grade', routerLink: 'app/body/Admin/Vehicle/grade/' };
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
        let menuItem = { label: 'ModelName', routerLink: 'app/body/Admin/Vehicle/modelName/' };
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
        let menuItem = { label: 'ModelYear', routerLink: 'app/body/Admin/Vehicle/modelYear/' };
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
        let menuItem = { label: 'Access', routerLink: 'app/body/Admin/Vehicle/access/' };
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
        let menuItem = { label: 'AccessGroup', routerLink: 'app/body/Admin/Vehicle/accessGroup/' };
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
        let menuItem = { label: 'Permission', routerLink: 'app/body/Admin/Vehicle/permission/' };
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
        let menuItem = { label: 'Role', routerLink: 'app/body/Admin/Vehicle/role/' };
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