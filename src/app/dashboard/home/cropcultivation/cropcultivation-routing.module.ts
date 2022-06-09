import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropcultivationPage } from './cropcultivation.page';

const routes: Routes = [
  {
    path: '',
    component: CropcultivationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropcultivationPageRoutingModule {}
