import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOtherEmergencyPage } from './form-other-emergency.page';

const routes: Routes = [
  {
    path: '',
    component: FormOtherEmergencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormOtherEmergencyPageRoutingModule {}
