import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

//routing
import { AppRoutingModule } from './app-routing.module';

//modulos personalizados
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';

//NGRX
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effectArray } from './store/effects';
import { appReducers } from './store/app.reducers';
import { DetalleModule } from './pages/detalle/detalle.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    SharedModule,
    HomeModule,
    DetalleModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(effectArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }