import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoliPageRoutingModule } from './yoli-routing.module';

import { YoliPage } from './yoli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoliPageRoutingModule
  ],
  declarations: [YoliPage]
})
export class YoliPageModule {}
