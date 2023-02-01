import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConductoPage } from './conducto.page';

const routes: Routes = [
  {
    path: '',
    component: ConductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConductoPageRoutingModule {}
