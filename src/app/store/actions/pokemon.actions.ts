import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/interfaces/interfaces';

export const detallePokemon = createAction('[Pokemon] detalle pokemon', props<{ namePokemon:string }>() );
export const cargarUnPokemon  = createAction('[Pokemon] cargar pokemon', props<{ pokemon:Pokemon }>() );