import { Component, OnInit } from '@angular/core';

//Importar el sevicio
import { FirebaseService } from 'src/app/services/firebase.service';
//Importar las intercaes
import { Personajes, Controles, Items, Mercancia, Datos } from 'src/app/interfaces/interfaces';



@Component({
  selector: 'app-yoli',
  templateUrl: './yoli.page.html',
  styleUrls: ['./yoli.page.scss'],
})
export class YoliPage implements OnInit {

  personajes: Datos[] = [];

  //inicializar el objeto
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
