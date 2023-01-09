import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPagePage } from './registro-page.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPagePageRoutingModule {}
