import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPanicButtonPageRoutingModule } from './detail-panic-button-routing.module';

import { DetailPanicButtonPage } from './detail-panic-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPanicButtonPageRoutingModule
  ],
  declarations: [DetailPanicButtonPage]
})
export class DetailPanicButtonPageModule {}
