import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, } from 'rxjs/operators';
import { Pokemons } from '../models/pokemons.model';
import { Pokemon } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private url             = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
  private urlPokemon      = 'https://pokeapi.co/api/v2/pokemon';
  private arrayIdPokemons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  public arrayPokemons:Pokemons[] = [];

  constructor(
    private http:HttpClient
  ) { }

  getPokemons() {
    return this.http.get<Pokemons>( this.url ).pipe(
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