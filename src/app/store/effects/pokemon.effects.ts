import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, } from "rxjs/operators";
import { PokemonsService } from "src/app/services/pokemons.service";
import * as actions from "../actions";

@Injectable()
export class PokemonEffects {

    constructor(
        private actions$:Actions,
        private pokemonS:PokemonsService
    ){}

    detallePokemon$ = createEffect(
        () => this.actions$.pipe(
            ofType( actions.detallePokemon ),
            mergeMap(
                ( buscarPokemon ) => this.pokemonS.getDetallePokemon( buscarPokemon.namePokemon ).pipe(
                    map( ( pokemon:any ) => actions.cargarUnPokemon({ pokemon }) ,
                )
            )
        )
    ));

}