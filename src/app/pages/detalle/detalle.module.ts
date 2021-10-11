import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './index/detalle.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    DetalleComponent
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule,
    MaterialModule
  ]
})
export class DetalleModule { }
