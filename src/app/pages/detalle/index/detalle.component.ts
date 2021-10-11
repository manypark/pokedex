import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Pokemon } from 'src/app/interfaces/interfaces';
import { detallePokemon } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector    : 'app-detalle',
  templateUrl : './detalle.component.html',
  styleUrls   : ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pokemon?:Pokemon;

  constructor(
    private store :Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router  :Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({id}) => {
      this.store.dispatch( detallePokemon({ namePokemon: id }) );
    });

    this.store.select('pokemon').pipe( filter( p => p.pokemon.length > 0) ).subscribe(res => {
      this.pokemon = res.pokemon[0];
    });
  }

  backPage() {
    this.router.navigateByUrl("/home");
  }


}
