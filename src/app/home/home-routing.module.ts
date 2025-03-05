import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { GuardService } from '../service/guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate:[GuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
