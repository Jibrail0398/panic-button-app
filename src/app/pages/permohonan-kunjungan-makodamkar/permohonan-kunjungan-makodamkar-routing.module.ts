import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermohonanKunjunganMakodamkarPage } from './permohonan-kunjungan-makodamkar.page';

const routes: Routes = [
  {
    path: '',
    component: PermohonanKunjunganMakodamkarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermohonanKunjunganMakodamkarPageRoutingModule {}
