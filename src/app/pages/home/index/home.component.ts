import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
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

  constructor(
    private store   :Store<AppState>,
    private router  :Router
  ){ }

  onResize(event:any) {
    console.log(this.breakpoint);
    this.breakpoint = (window.innerWidth <= 400) ? 2 
    : this.breakpoint = (window.innerWidth <= 650) ? 8 : 12;
  }

  async ngOnInit() {

    this.breakpoint = (window.innerWidth <= 400) ? 2 : 12;

    this.store.dispatch( cargarPokemon() );

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