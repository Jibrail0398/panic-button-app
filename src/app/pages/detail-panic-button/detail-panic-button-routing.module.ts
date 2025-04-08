import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPanicButtonPage } from './detail-panic-button.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPanicButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPanicButtonPageRoutingModule {}
