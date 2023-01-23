import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'login-page',
    loadChildren: () => import('./view/login-page/login-page.module').then( m => m.LoginPagePageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'registro-page',
    loadChildren: () => import('./view/registro-page/registro-page.module').then( m => m.RegistroPagePageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'recuperar-pass-page',
    loadChildren: () => import('./view/recuperar-pass-page/recuperar-pass-page.module').then( m => m.RecuperarPassPagePageModule),
    canActivate: [AuthGuardGuard]
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
