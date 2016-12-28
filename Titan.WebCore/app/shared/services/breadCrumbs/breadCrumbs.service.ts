/**
 * Created by ZeroInfinity on 12/27/2016.
 */
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import {IBreadCrumbsInfo} from "./IBreadCrumbsInfo";

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
    }

    // Home Page Bread Crumbs
    private homeBreadCrumbAdd() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        let homePage = {pageName: 'Home', items: menuItems };

        this.addToBreadCrumbs(homePage);

    }

    private homeBreadCrumbItem() {
        let menuItem = {label:'Home', routerLink: 'app/body'}
        return menuItem;
    }

    // Admin Bread Crumbs Section
    //Admin Home Page Bread Crumbs
    private adminBreadCrumbAdd() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());

        let adminHomePage = {pageName: 'Admin', items: menuItems};

        this.addToBreadCrumbs(adminHomePage);
    }

    private adminHomePageBCItems() {
        let menuItem = {label:'Admin', routerLink: 'app/body/admin'};

        return menuItem;
    }
    // Admin Form Builder Home Page
    private adminFormBuilderPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminHomePageBCItems());
        menuItems.push(this.adminFormBuilderPageBCItems());

        let bcInfoItems: IBreadCrumbsInfo;
        bcInfoItems = {pageName: 'FormBuilderHomePage', items: menuItems };
        this.addToBreadCrumbs(bcInfoItems);
    }

    private adminFormBuilderPageBCItems() {
        let menuItem = {label:'Form Builder', routerLink:'app/body/Admin/formBuilders'};
        return menuItem;
    }
    // Admin Form Builder Add Bread Crumbs
    private adminFormBuilderAddFormPage() {
        let menuItems = [];
        menuItems.push(this.homeBreadCrumbItem());
        menuItems.push(this.adminFormBuilderPageBCItems());
        menuItems.push(this.adminFormBuilderAddFormPageBCItems());

        let bcInfoItems = [];
        bcInfoItems.push({ pageName: 'FormBuilderAddForm', items: this.adminFormBuilderAddFormPageBCItems() });

        this.addToBreadCrumbs(bcInfoItems);

    }

    private adminFormBuilderAddFormPageBCItems() {
        let menuItem = { label: 'Add Form', routerLink: 'app/body/Admin/FormBuilder/add/'};

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
        let menuItem = { label: 'Details Form', routerLink: 'app/body/Admin/FormBuilder/details/'};

        return menuItem;
    }

    public getBreadCrumbs() {
        return this.breadCrumbs;
    }


    private addToBreadCrumbs(item) {
        this.breadCrumbs.push(item);
    }
}