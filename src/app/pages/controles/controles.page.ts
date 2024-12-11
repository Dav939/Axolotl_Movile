import { Component, OnInit } from '@angular/core';
import { Controles, Datosc } from 'src/app/interfaces/interfaces';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.page.html',
  styleUrls: ['./controles.page.scss'],
})
export class ControlesPage implements OnInit {

  controles: Datosc[] = [];

  constructor(private servicioFirebase: FirebaseService) { }

  ngOnInit() {
    this.servicioFirebase.getControles().subscribe((response) => {
      console.log(response[0].payload.doc)
      response.forEach(obj => {
        this.controles.push({
          id: obj.payload.doc.id,
          data: <Controles>obj.payload.doc.data(),
        });
      });
    });
  }

}
