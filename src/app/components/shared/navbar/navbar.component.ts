import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',  
})
export class NavbarComponent {

  constructor(private _router : Router ){ }

  ngOnInit(){

  }
  
  buscarHeroe(nombre:string) {    
    this._router.navigate(['/buscador', nombre]);
  }
}
