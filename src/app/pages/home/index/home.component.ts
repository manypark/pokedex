import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Pokemons } from 'src/app/models/pokemons.model';
import { cargarPokemon } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  pokemons:Pokemons[] = [];
  urlImagenPokemon:string = '';
  breakpoint: number = 12;

  length = 1118;
  pageSize = 20;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  pageEvent: PageEvent = new PageEvent();

  constructor(
    private store   :Store<AppState>,
    private router  :Router
  ){ }

  onResize(event:any) {
    console.log(this.breakpoint);
    this.breakpoint = (window.innerWidth <= 400) ? 2 
    : this.breakpoint = (window.innerWidth <= 650) ? 8 : 12;
  }

  changeItems(ev:any) {
    this.pageEvent.pageSize = ev.pageSize;
    this.pageEvent.pageIndex = ev.pageIndex;
    
    this.store.dispatch( cargarPokemon({ paginator: this.pageEvent.pageSize, tabIndex: this.pageEvent.pageIndex }) );
  }

  async ngOnInit() {

    this.breakpoint = (window.innerWidth <= 400) ? 2 : 12;

    this.store.dispatch( cargarPokemon({ paginator: this.pageEvent.pageSize, tabIndex: this.pageEvent.pageIndex }) );

    this.store.select('pokemons').pipe( 
      filter( data => data.pokemons.length > 0 ),
    ).subscribe( ({ pokemons }) => {
      
      this.pokemons = [...pokemons];

    });

  }

  goPokemonDetail( namePokemon:string ) {
    this.router.navigate( ['/detalle', namePokemon ] );
  }

}