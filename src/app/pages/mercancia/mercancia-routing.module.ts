import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MercanciaPage } from './mercancia.page';

const routes: Routes = [
  {
    path: '',
    component: MercanciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MercanciaPageRoutingModule {}
