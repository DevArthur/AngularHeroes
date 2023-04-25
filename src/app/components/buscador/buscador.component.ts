import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {

  heroes : Heroe[] = [];
  termino : string = '';

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _heroesService : HeroesService) {
      
      this._activatedRoute.params.subscribe(params => {        
        this.termino = params['nombre'];
        this.heroes = this._heroesService.buscarHeroes(params['nombre']);
        console.log(this.heroes);
      });
  }
}
