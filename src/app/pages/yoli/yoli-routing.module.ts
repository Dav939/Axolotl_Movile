import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoliPage } from './yoli.page';

const routes: Routes = [
  {
    path: '',
    component: YoliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoliPageRoutingModule {}
