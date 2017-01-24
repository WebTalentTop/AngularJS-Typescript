"use strict";
var DraggableList = (function () {
    function DraggableList(formFieldDataTypeList, selectedInputList) {
        this.formFieldDataTypeList = formFieldDataTypeList;
        this.selectedInputList = selectedInputList;
        this.formFieldDataTypeList = [];
        this.selectedInputList = [];
    }
    return DraggableList;
}());
exports.DraggableList = DraggableList;
