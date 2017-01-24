"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var LoggerService = (function () {
    function LoggerService() {
        this.show = true;
    }
    LoggerService.prototype.logConsole = function (message, data) {
        if (this.show) {
            this.log(message, data);
        }
    };
    LoggerService.prototype.log = function (message, data) {
        if (this.show) {
            console.log(message, data);
        }
    };
    LoggerService.prototype.setShow = function (showing) {
        this.show = showing;
    };
    LoggerService.prototype.error = function (message, data) {
        if (this.show) {
            console.error(message, data);
        }
    };
    LoggerService.prototype.info = function (message, data) {
        if (this.show) {
            console.info(message, data);
        }
    };
    LoggerService.prototype.warn = function (message, data) {
        if (this.show) {
            console.warn(message, data);
        }
    };
    LoggerService = __decorate([
        core_1.Injectable()
    ], LoggerService);
    return LoggerService;
}());
exports.LoggerService = LoggerService;
