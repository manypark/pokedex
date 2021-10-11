import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, filter, tap, } from 'rxjs/operators';
import {fromEvent } from 'rxjs';
import { buscarPokemon, cargarPokemon } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector    : 'app-toolbar',
  templateUrl : './toolbar.component.html',
  styleUrls   : ['./toolbar.component.css']
})

export class ToolbarComponent {

  @ViewChild('input', { static: true }) input?: ElementRef;

  constructor( 
    private store:Store<AppState>,
    private router:Router
  ) {}

  ngAfterViewInit(): void {
    this.buscarPokemon();
  }

  buscarPokemon() {

    fromEvent(this.input?.nativeElement,'keyup').pipe(
      filter(Boolean),
      debounceTime(500),
      distinctUntilChanged(),
      tap( (text) => {
        this.store.dispatch( buscarPokemon({ IdOrNamePokemon: this.input?.nativeElement.value }) );

        this.input?.nativeElement.value == '' ? this.store.dispatch( cargarPokemon( { paginator: 20, tabIndex: 1 } ) ) : null;
      })
    ).subscribe();
  }

  goPerfil() {
    this.router.navigateByUrl('/perfil');
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }

}
