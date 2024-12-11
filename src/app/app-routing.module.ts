import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'yoli',
    loadChildren: () => import('./pages/yoli/yoli.module').then(m => m.YoliPageModule)
  },
  {
    path: '',
    redirectTo: 'yoli',
    pathMatch: 'full'
  },
  {
    path: 'personajes',
    loadChildren: () => import('./pages/personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'controles',
    loadChildren: () => import('./pages/controles/controles.module').then( m => m.ControlesPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./pages/items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'mercancia',
    loadChildren: () => import('./pages/mercancia/mercancia.module').then( m => m.MercanciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
