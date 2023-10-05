import { Component } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[] = [];


  constructor(){

    this.lista.push(new Carro("Wellington", 33));
    this.lista.push(new Carro("Wellington", 29));
    this.lista.push(new Carro("Wellington", 35));
    this.lista.push(new Carro("Wellington", 60));
    this.lista.push(new Carro("Wellington", 10));
    this.lista.push(new Carro("Wellington", 40));

  }

}
