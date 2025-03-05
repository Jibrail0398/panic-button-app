import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanicButtonPageRoutingModule } from './panic-button-routing.module';

import { PanicButtonPage } from './panic-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanicButtonPageRoutingModule
  ],
  declarations: [PanicButtonPage]
})
export class PanicButtonPageModule {}
