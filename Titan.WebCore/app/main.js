/// <reference path="../typings/globals/core-js/index.d.ts" />
/// <reference path="../typings/shim.d.ts" />
/// <reference path="../typings/fullcalendar/fullcalendar.d.ts" />
///// <reference path="../typings/globals/node/index.d.ts" />
/// <reference path="./../resources/spreadjs/GC.Spread.Sheets.d.ts"/>
/// <reference path="./../typings/jquery/jquery.d.ts"/>
/// <reference path="./../typings/qtip2/index.d.ts"/>
/// <reference path="./../typings/jqueryContextMenu/index.d.ts"/>
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
