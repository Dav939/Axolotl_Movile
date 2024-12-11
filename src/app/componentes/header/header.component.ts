import { Component, Input, OnInit } from '@angular/core';

interface Elemento {
  icono: string;
  nombre: string;
  active: boolean,
  ruta: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string = '';


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


  constructor() { }


  onItemTap(page: any) {
    if (!page?.active) {
      const index = this.elementos.findIndex(x => x.active);
      this.elementos[index].active = false;
      page.active = true;
    }
  }

  ngOnInit() { }

}
