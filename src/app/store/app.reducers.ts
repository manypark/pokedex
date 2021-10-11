
import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    pokemons: reducers.PokemonsState,
    pokemon: reducers.PokemonState,
    
};

export const appReducers:ActionReducerMap<AppState> = {
    pokemons: reducers.PokemonsReducer,
    pokemon : reducers.PokemonReducer
};