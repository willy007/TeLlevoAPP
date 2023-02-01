import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductoPageRoutingModule } from './conducto-routing.module';

import { ConductoPage } from './conducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductoPageRoutingModule
  ],
  declarations: [ConductoPage]
})
export class ConductoPageModule {}
