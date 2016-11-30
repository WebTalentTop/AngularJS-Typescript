/// <reference path="../typings/globals/core-js/index.d.ts" />
/// <reference path="../typings/shim.d.ts" />
/// <reference path="../typings/fullcalendar/fullcalendar.d.ts" />
///// <reference path="../typings/globals/node/index.d.ts" />
/// <reference path="./../resources/spreadjs/gcspread.sheets.d.ts"/>
/// <reference path="./../typings/jquery/jquery.d.ts"/>

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);