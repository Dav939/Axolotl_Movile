import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoliPageRoutingModule } from './yoli-routing.module';

import { YoliPage } from './yoli.page';
import { ComponentesModule } from "../../componentes/componentes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoliPageRoutingModule,
    ComponentesModule
  ],
  declarations: [YoliPage]
})
export class YoliPageModule { }
