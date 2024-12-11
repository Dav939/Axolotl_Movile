import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { DetPersonajeComponent } from './det-personaje/det-personaje.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DetPersonajeComponent, //Agregado para modal
  ], //Modificado
  exports: [
    HeaderComponent,
    DetPersonajeComponent, //Agregado para modal
  ], //Modificado
  imports: [
    CommonModule,
    IonicModule  //Modificado
  ]
})
export class ComponentesModule { }
