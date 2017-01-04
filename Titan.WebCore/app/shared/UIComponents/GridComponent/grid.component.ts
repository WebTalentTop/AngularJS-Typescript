import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTable, LazyLoadEvent} from 'primeng/primeng';
import { TitanSpinnerComponent } from '../SpinnerComponent/spinner.component';

@Component({
    selector: 'grid-data',
    templateUrl: 'app/shared/UIComponents/GridComponent/grid.component.html',
    inputs: ['title', 'dataService', 'confInfo', "gridData", "cols"],
    outputs:['navigateToDetails']
})
export class GridComponent {
    title:string;
    dataService:any;
    gridData: any;
    cols: any;
    confInfo: any;
    selectedItem:any;
    idField:string;
    linkFieldId:string;
    linkableFields:any;
    navigateToDetails = new EventEmitter();
    lazyLoadingData:boolean = false;
    
    gridFilter = {};
    constructor(){}


    ngOnInit() { 

    }

    navigateTo(item){
        let idField = this.cols.filter(filter => filter.Header ==="Id")[0].Field;
        this.navigateToDetails.emit(item[idField]);
    }

     loadFresh(event: LazyLoadEvent) {
         console.log("Load Fresh Called at Grid Component ----");
         console.log("data service ---------", this.dataService);
        setTimeout(() => {
            console.log("----------insede settimeout: ", event);
            this.getGridFilterValues(event);
            let js = JSON.stringify(this.gridFilter);

                console.log("----------- GridFilter ---------", this.gridFilter);
                console.log("-------- Grid Filter JS --------", JSON.parse(js));
            this.dataService.postGridDataFilter(JSON.parse(js))
                .subscribe(res => {
                    console.log("------ ResData in postCustomersFilterSummary -----", res);
                    let resData = res;
                    this.gridData = res.Data;
                    this.confInfo = res.Configuration;
                    this.cols = res.Configuration.Columns;
                    this.lazyLoadingData = true;
                    this.cols.filter(x=> {if (x.Header === "Id") { this.idField = x.Field;} return x;});
                    this.cols.filter(x=> {if (x.Header === "Name"){ this.linkFieldId = x.Field} return x});
                });
        },
            250);
        console.log("---------- Event ---------",event);

    }
    private getGridFilterValues(event: LazyLoadEvent) {
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
                console.log("------- filters ----------", filters);
            }
        }
        this.gridFilter = {
            isPaging: true,
            sortColumns: sortColumn,
            locale: "en-us",
            defaultLocale: "en-us", pageNumber: pageNumber, pageSize: this.confInfo.PageSize, whereConditions: filters
        };
    }
}