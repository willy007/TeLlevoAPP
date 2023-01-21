import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarPassPagePageRoutingModule } from './recuperar-pass-page-routing.module';

import { RecuperarPassPagePage } from './recuperar-pass-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarPassPagePageRoutingModule
  ],
  declarations: [RecuperarPassPagePage]
})
export class RecuperarPassPagePageModule {}
