import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home',         
    loadChildren: () => import('../app/pages/home/home.module').then( m => m.HomeModule )
  },
  { 
    path: 'detalle/:id',
    loadChildren: () => import('../app/pages/detalle/detalle.module').then( m => m.DetalleModule )
  },
  { 
    path: 'perfil',
    loadChildren: () => import('../app/pages/perfil/perfil.module').then( m => m.PerfilModule )
  },
  {
    path      : '**',
    redirectTo: 'home',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}