import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Carro } from '../carro';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carros-details',
  templateUrl: './carros-details.component.html',
  styleUrls: ['./carros-details.component.scss']
})
export class CarrosDetailsComponent {
  errorMessage!: string;
  isError: boolean = false;

  @Input() carro: Carro = new Carro();
  @Output() retorno = new EventEmitter<Carro>();

  carroService = inject(CarroService);


  constructor() {  }
  create() {

    this.carroService.create(this.carro).subscribe({
      next: carro => { // QUANDO DÁ CERTO
        this.retorno.emit(carro);
        this.isError = false;
      },
      error: erro => { // QUANDO DÁ ERRO
        this.isError = true;
        this.errorMessage = erro; // Set the error message
        console.error(erro);
      }
    });
  }

  update() {
    this.carroService.update(this.carro, this.carro.id).subscribe({
      next: carro => { // QUANDO DÁ CERTO
        this.retorno.emit(carro);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }
}
