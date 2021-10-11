import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { PokemonsService } from "src/app/services/pokemons.service";
import * as actions from "../actions";

@Injectable()
export class PokemonsEffects {

    constructor(
        private actions$:Actions,
        private pokemonS:PokemonsService
    ){}

    cargarPokemons$ = createEffect(
        () => this.actions$.pipe(
            ofType( actions.cargarPokemon ),
            mergeMap(
                () => this.pokemonS.getPokemons().pipe(
                    map( ( pokemons:any ) => actions.cargarPokemonSuccess({ pokemons }) ),
                    catchError( err => of( actions.cargarPokemonError({payload: err} ) ) )
                )
            )
        )
    );

    buscarPokemon$ = createEffect(
        () => this.actions$.pipe(
            ofType( actions.buscarPokemon ),
            mergeMap(
                ( buscarPokemon ) => this.pokemonS.getPokemonsByIdorName( buscarPokemon.IdOrNamePokemon ).pipe(
                    map( ( pokemon:any ) => actions.cargarPokemonSuccess({ pokemons: [pokemon] }) ),
                    catchError( err => of( actions.cargarPokemonError({payload: err} ) ) )
                )
            )
        )
    );

}