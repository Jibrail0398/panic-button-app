import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermohonanKunjunganMakodamkarPageRoutingModule } from './permohonan-kunjungan-makodamkar-routing.module';

import { PermohonanKunjunganMakodamkarPage } from './permohonan-kunjungan-makodamkar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermohonanKunjunganMakodamkarPageRoutingModule
  ],
  declarations: [PermohonanKunjunganMakodamkarPage]
})
export class PermohonanKunjunganMakodamkarPageModule {}
