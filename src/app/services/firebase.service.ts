import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personajes } from '../interfaces/interfaces';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getDatos() {
    return this.firestore.collection('personajes').snapshotChanges();
  }

  getDetalle(id: string) {
    return this.firestore.collection('personajes').doc<Personajes>(id).valueChanges();
  }

  getControles() {
    return this.firestore.collection('controles').snapshotChanges();
  }
  getItems() {
    return this.firestore.collection('items').snapshotChanges();
  }
  getMercancia() {
    return this.firestore.collection('mercancia').snapshotChanges();
  }

}
