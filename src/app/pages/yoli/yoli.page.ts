import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yoli',
  templateUrl: './yoli.page.html',
  styleUrls: ['./yoli.page.scss'],
})
export class YoliPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openPersonajes() {
    this.router.navigate(['personajes'])
  }
  openMecanicas() {
    this.router.navigate(['controles'])
  }
  openNosotros() {
    this.router.navigate(['items'])
  }
  openProductos() {
    this.router.navigate(['mercancia'])
  }

}
