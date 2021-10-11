import { createAction, props } from '@ngrx/store';
import { Pokemons } from 'src/app/models/pokemons.model';

export const cargarPokemon          = createAction('[Pokemon] cargar pokemons', props<{ paginator:number, tabIndex:number }>() );
export const cargarPokemonSuccess   = createAction('[Pokemon] cargar pokemons Succes', props<{ pokemons:Pokemons[] }>() );
export const cargarPokemonError     = createAction('[Pokemon] cargar pokemons Error', props<{ payload:any }>() );

export const buscarPokemon          = createAction('[Pokemon] buscar pokemon', props<{ IdOrNamePokemon:string }>() );