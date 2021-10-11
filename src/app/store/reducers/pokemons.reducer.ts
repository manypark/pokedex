import { createReducer, on } from '@ngrx/store';
import { Pokemons } from 'src/app/models/pokemons.model';
import * as actions from '../actions';

export interface PokemonsState {
    pokemons    : Pokemons[],
    loaded      : boolean,
    loading     : boolean,
    error       : any
};

const initialState: PokemonsState = {
    pokemons    : [],
    loaded      : false,
    loading     : false,
    error       : null,
};

const _PokemonsReducer = createReducer(initialState,
    on( actions.cargarPokemon          , (state) => ( { ...state, loading: true } ) ),

    on( actions.cargarPokemonSuccess    , (state, { pokemons }) => ({
        ...state, 
        loading : false, 
        loaded  : true, 
        pokemons   : [ ...pokemons ]
    })),
    
    on( actions.cargarPokemonError     , (state, { payload } ) => ({
        ...state, 
        loading : false, 
        loaded  : true, 
        error   : {
            url     : payload.url,
            name    : payload.name,
            mesagge : payload.message
        }
    })),

    on( actions.buscarPokemon    , ( state ) => ({
        ...state, 
        loading : false, 
        loaded  : true,
    })),
);

export const PokemonsReducer = (state:any, action:any) => {
    return _PokemonsReducer(state, action);
}