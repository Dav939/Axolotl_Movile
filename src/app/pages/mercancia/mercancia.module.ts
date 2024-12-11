import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MercanciaPageRoutingModule } from './mercancia-routing.module';

import { MercanciaPage } from './mercancia.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MercanciaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MercanciaPage]
})
export class MercanciaPageModule { }
