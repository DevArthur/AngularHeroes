import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {

  @Input() heroe : any = {};
  @Input() index : number = 0;

  @Output() heroeSeleccionado : EventEmitter<number>;

  constructor(private _router : Router){ 
    this.heroeSeleccionado = new EventEmitter();
  }

  gnOnInit() {}
   
  verHeroe() {    
    this._router.navigate(['/heroe', this.index]);
    //this.heroeSeleccionado.emit( this.index );
  }
}

