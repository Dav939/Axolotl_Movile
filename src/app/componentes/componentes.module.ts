import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HeaderComponent], //Modificado
  exports: [HeaderComponent], //Modificado
  imports: [
    CommonModule,
    IonicModule  //Modificado
  ]
})
export class ComponentesModule { }
