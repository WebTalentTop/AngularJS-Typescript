import { DataService } from './../../shared/services/data.services';
import { LoggerService } from './../../shared/services/logger.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { GridComponent } from '../../shared/UIComponents/GridComponent/grid.component';

@Component({
    selector: 'project',
    templateUrl: 'project-temp.component.html'
})

export class ProjectComponent {
    title = "Project Grid";
    gridData = [];
    confInfo: any = {};
    cols = [];
    gridFilter = {};

    constructor(private dataService: DataService, private router:Router, private logger: LoggerService) {

    }

    onProjectDetailsClick(){ 
        let projectId = '53FE9592-1A9B-07D0-85D7-006A30BCD348';
        console.log(projectId);
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        //this.router.navigate(['/hero', hero.id]);
        this.router.navigate(['/details', { projectId: projectId }]);
    }

    ngOnInit() {
        let resData: any;
        this.dataService.postProjectGridData()
            .subscribe(res => {
                resData = res;
                this.gridData = res.Data;
                this.cols = res.Configuration.Columns;
                this.confInfo = res.Configuration;
            });
    }

    loadFreshDepartments(event: LazyLoadEvent) {
        setTimeout(() => {
//            this.logger.logConsole("----------insede settimeout: ", event);
            let gf = this.getGridFilterValues(event);
            console.log("GF--------", gf);

            let js = JSON.stringify(gf);
                console.log("JS--------", js);

  //          this.logger.logConsole("----------- GridFilter ---------", this.gridFilter);
    //        this.logger.logConsole("-------- Grid Filter JS --------", JSON.parse(js));
            this.dataService.postProjectGridDataFilter(JSON.parse(js))
                .subscribe(res => {
                    this.logger.logConsole("------ ResData in postCustomersFilterSummary -----", res);
                    let resData = res;
                    this.gridData = res.Data;
                    this.confInfo = res.Configuration;
                    this.cols = res.Configuration.Columns;
                });
        },
            250);
      //  console.log("---------- Event ---------", event);

    }

    private getGridFilterValues(event: LazyLoadEvent) {
        console.log("----- GridFilterValues Called -------");
        let sortColumn = (typeof event.sortField === 'undefined') ? [] : [{ columnId: event.sortField, sortOrder: event.sortOrder }];
        let pageNumber = event.first === 0 ? 1 : (event.first / 5) + 1;
        let filters = [];
        let eFilters = event.filters;
        if (eFilters) {
            for (var key in eFilters) {
                let fil = eFilters[key].value;
                let matchMode = eFilters[key].matchMode;
                if (fil) {
                    filters.push({
                        columnId: key,
                        operator: matchMode,
                        value: fil
                    });
                }
                this.logger.logConsole("------- filters ----------", filters);
            }
        }
        //this.gridFilter = { sortColumns: sortColumn, pageNumber: pageNumber, pageSize: 5, whereConditions: filters };
        return this.gridFilter = {
            isPaging: true,
            sortColumns: sortColumn,
            locale: "en-us",
            defaultLocale: "en-us",pageNumber: pageNumber, pageSize: 5};
    }
}