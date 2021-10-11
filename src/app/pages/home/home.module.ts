import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './index/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ],
  exports: [
    HomeComponent,
  ]
})

export class HomeModule {}