import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormOtherEmergencyPageRoutingModule } from './form-other-emergency-routing.module';

import { FormOtherEmergencyPage } from './form-other-emergency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormOtherEmergencyPageRoutingModule
  ],
  declarations: [FormOtherEmergencyPage]
})
export class FormOtherEmergencyPageModule {}
