import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'login-page',
    loadChildren: () => import('./view/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'registro-page',
    loadChildren: () => import('./view/registro-page/registro-page.module').then( m => m.RegistroPagePageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./view/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
