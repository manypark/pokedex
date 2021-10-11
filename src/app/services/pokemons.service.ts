import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, } from 'rxjs/operators';
import { Pokemons } from '../models/pokemons.model';
import { Pokemon } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private urlPokemon      = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http:HttpClient
  ) { }

  getPokemons( paginator:number, tabIndex:number ) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${tabIndex * paginator}&limit=${paginator}`;

    return this.http.get<Pokemons>( `${url}`).pipe(
      pluck('results'),
    );
  }

  getPokemonsByIdorName( idPokemon :number | string ) {
    return this.http.get<Pokemons>( `${this.urlPokemon}/${idPokemon}` );
  }

  getDetallePokemon( idPokemon :number | string ) {
    return this.http.get<Pokemon>( `${this.urlPokemon}/${idPokemon}` );
  }

}