import { createReducer, on } from '@ngrx/store';
import { Pokemon } from 'src/app/interfaces/interfaces';
import * as actions from '../actions';

export interface PokemonState {
    pokemon : Pokemon[],
};

const initialState: PokemonState = {
    pokemon : [],
};

const _PokemonReducer = createReducer(initialState,
    on( actions.detallePokemon , (state) => ( { ...state } ) ),

    on( actions.cargarUnPokemon    , (state, { pokemon }) => ({
        ...state,
        pokemon : [pokemon]
    })),

);

export const PokemonReducer = (state:any, action:any) => {
    return _PokemonReducer(state, action);
}