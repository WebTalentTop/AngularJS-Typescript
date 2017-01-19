// import { ModuleWithProviders }  from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
"use strict";
exports.appRoutes = [
    {
        path: '',
        redirectTo: '/project',
        pathMatch: 'full'
    },
    {
        path: 'project',
        loadChildren: 'app/body/body.module'
    },
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.appRoutes;
