import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './index/perfil.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: ''  , component: PerfilComponent },
      { path: '**', redirectTo: '' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
