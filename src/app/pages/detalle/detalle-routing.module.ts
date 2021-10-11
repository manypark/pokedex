import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './index/detalle.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: ''  , component: DetalleComponent },
      { path: '**', redirectTo: '' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleRoutingModule { }
