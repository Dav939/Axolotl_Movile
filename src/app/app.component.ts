import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Elemento {
  icono: string;
  nombre: string;
  active: boolean,
  ruta: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  profile = {
    name: 'Axolotl Games',
    email: 'Axolotl_Games@gmail.com',
  }


  elementos: Elemento[] = [
    {
      icono: 'home',
      nombre: 'Yoli',
      active: true,
      ruta: '/yoli'
    },
    {
      icono: 'happy-outline',
      nombre: 'Personajes',
      active: false,
      ruta: '/personajes'
    },
    {
      icono: 'game-controller-outline',
      nombre: 'Controles',
      active: false,
      ruta: '/controles'
    },
    {
      icono: 'heart-circle-outline',
      nombre: 'Items',
      active: false,
      ruta: '/items'
    },
    {
      icono: 'hourglass-outline',
      nombre: 'Mercancia',
      active: false,
      ruta: '/mercancia'
    },
  ];


  constructor(private menuController: MenuController) {
    this.menuController.enable(true);
  }


  onItemTap(page: any) {
    if (!page?.active) {
      const index = this.elementos.findIndex(x => x.active);
      this.elementos[index].active = false;
      page.active = true;
    }
  }


}
