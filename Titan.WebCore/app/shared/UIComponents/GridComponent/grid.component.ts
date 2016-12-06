import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTable, LazyLoadEvent} from 'primeng/primeng';
import { SpinnerComponent } from '../SpinnerComponent/spinner.component';

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
         /* let resData:any;
          console.log("DataService passed on ------------", this.dataServices);
        this.dataService.postGridData()
            .subscribe(res => {
                resData = res;
                console.log("-------- ResData ------", resData);
                this.gridData = res.Data;
                this.cols = res.Configuration.Columns;
                //console.log("-------- Cols --------", this.cols);
                this.confInfo = res.Configuration;
                //console.log("------- Configuration --------", this.confInfo);
            });
        console.log("The Whole MyValues After Service Call: ", this.gridData);
        console.log("The Whole configuration Info values: ", this.confInfo);*/
    }
    onRowSelect(event) {
        let id = this.cols.filter(x => x.Header === "Id");
        let data = this.selectedItem[id[0].Field];
        this.navigateToDetails.emit(data);
    }

    navigateTo(id){
        console.log("------ navigateTo is called with -------", id);
        this.navigateToDetails.emit(id);
    }

    checkLinkable(fieldId){
        let item:any;
        let found = false;
        this.cols.filter(x=> { if(x.Field === fieldId && x.DisplayOrder === "1"){item = x; found = true;}})
        /*for(item of this.cols) {
            console.log("---- Item checkLinkable ----", item);
            if(item.DisplayOrder === "1"){
                if(item.Field === fieldId){
                    return true;
                }
            }
            return false;
        };*/
        /*this.linkableFields.forEach(function(item){
            if(item.id === fieldId){
                return true;
            }
        })
        return false;*/
        return found;
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