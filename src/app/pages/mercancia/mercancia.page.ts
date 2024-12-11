import { Component, OnInit } from '@angular/core';
import { Datosm, Mercancia } from 'src/app/interfaces/interfaces';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.page.html',
  styleUrls: ['./mercancia.page.scss'],
})
export class MercanciaPage implements OnInit {

  constructor(private servicioFirebase: FirebaseService) { }

  mercancia: Datosm[] = [];

  ngOnInit() {

    this.servicioFirebase.getMercancia().subscribe((response) => {
      console.log(response[0].payload.doc)
      response.forEach(obj => {
        this.mercancia.push({
          id: obj.payload.doc.id,
          data: <Mercancia>obj.payload.doc.data(),
        });
      });
    });

  }

}
