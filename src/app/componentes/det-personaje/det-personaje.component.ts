import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Personajes, RespuestaDetalle } from 'src/app/interfaces/interfaces';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-det-personaje',
  templateUrl: './det-personaje.component.html',
  styleUrls: ['./det-personaje.component.scss'],
})
export class DetPersonajeComponent implements OnInit {

  @Input() id: any;

  personaje = {} as Personajes;
  respuestaDetalle = {} as RespuestaDetalle; //id

  constructor(private detalle: FirebaseService,
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.detalle.getDetalle(this.id).subscribe(data => {
      if (data) {
        this.personaje = data;
      }
    })
  }
  regresar() {
    this.modal.dismiss();
  }

}
