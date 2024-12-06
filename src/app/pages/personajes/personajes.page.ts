import { Component, OnInit } from '@angular/core';
import { Datos, Personajes } from 'src/app/interfaces/interfaces';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  personajes: Datos[] = [];

  constructor(private servicioFirebase: FirebaseService) { }

  async verDetalle(id: string) {

  }

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

}
