// import { ModuleWithProviders }  from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// // export const routes: Routes = [
// //   { path: '', redirectTo: 'department', pathMatch: 'full'},
// //   { path: 'project', loadChildren: 'app/body/body.module#CrisisModule' },
// //   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
// // ];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

import { RouterModule } from '@angular/router';


const appRoutes = [
  {
    path: '',
    loadChildren: 'app/body/body.module'
    },
  //  ,
  //{
  //    path: 'equipment',
  //    loadChildren: 'app/body/equipment/equipment.module'
  //},
  //{
  //  path: 'project',
  //  loadChildren: "app/body/project/project.module"
  //},
  {
    path: '',
    redirectTo: '/project',
    pathMatch: 'full'
  }
];

export default RouterModule.forRoot(appRoutes);


