import { Component, OnInit } from '@angular/core';
import { Datosi, Items } from 'src/app/interfaces/interfaces';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items: Datosi[] = [];


  constructor(private servicioFirebase: FirebaseService) { }


  ngOnInit() {

    this.servicioFirebase.getItems().subscribe((response) => {
      console.log(response[0].payload.doc)
      response.forEach(obj => {
        this.items.push({
          id: obj.payload.doc.id,
          data: <Items>obj.payload.doc.data(),
        });
      });
    });
  }

}
