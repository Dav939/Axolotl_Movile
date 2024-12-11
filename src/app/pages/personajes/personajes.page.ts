import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Datos, Personajes } from 'src/app/interfaces/interfaces';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DetPersonajeComponent } from 'src/app/componentes/det-personaje/det-personaje.component';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  personajes: Datos[] = [];

  constructor(
    private servicioFirebase: FirebaseService,
    private modalCtrl: ModalController
  ) { }


  ngOnInit() {


    this.servicioFirebase.getDatos().subscribe((response) => {
      console.log(response[0].payload.doc)
      response.forEach(obj => {
        this.personajes.push({
          id: obj.payload.doc.id,
          data: <Personajes>obj.payload.doc.data(),
        });
      });
    });
  }



  async verDetalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetPersonajeComponent,
      componentProps: { id }
    });
    modal.present();
  }



}
