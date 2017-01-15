/// <reference path="../typings/globals/core-js/index.d.ts" />
/// <reference path="../typings/shim.d.ts" />
/// <reference path="../typings/fullcalendar/fullcalendar.d.ts" />
///// <reference path="../typings/globals/node/index.d.ts" />
/// <reference path="./../resources/spreadjs/GC.Spread.Sheets.d.ts"/>
/// <reference path="./../typings/jquery/jquery.d.ts"/>
/// <reference path="./../typings/qtip2/index.d.ts"/>
/// <reference path="./../typings/jqueryContextMenu/index.d.ts"/>



import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';
enableProdMode();

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);