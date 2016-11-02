import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTable, LazyLoadEvent} from 'primeng/primeng';

@Component({
    selector: 'grid-data',
    templateUrl: 'app/shared/UIComponents/GridComponent/grid.component.html',
    inputs: ['title', 'gridValues', 'colsData', 'confInfos'],
    outputs:['lazyLoad', 'navigateData']
})
export class GridComponent {
    title:string;
    gridValues: any;
    colsData: any;
    confInfos: any;
    selectedItem:any;

    lazyLoad = new EventEmitter();
    navigateData = new EventEmitter();

    constructor(){}

    ngOnInit() { }
    onRowSelect(event) {
        var id = this.colsData.filter(x => x.Header === "Id");
        var data = this.selectedItem[id[0].Field];
        this.navigateData.emit(data);
    }
    lazyLoadUpdate(event: LazyLoadEvent) {
        this.lazyLoad.emit(event);
    }
}