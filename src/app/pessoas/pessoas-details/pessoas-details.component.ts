import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Pessoa } from '../Pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoas-details',
  templateUrl: './pessoas-details.component.html',
  styleUrls: ['./pessoas-details.component.scss']
})
export class PessoasdetailsComponent {
  errorMessage!: string;
  isError: boolean = false;

  @Input() pessoa: Pessoa = new Pessoa();
  @Output() retorno = new EventEmitter<Pessoa>();

  pessoaService = inject(PessoaService);


  constructor() {

  }
  create() {

    this.pessoaService.create(this.pessoa).subscribe({
      next: pessoa => { // QUANDO DÁ CERTO
        this.retorno.emit(pessoa);
        this.isError = false;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        this.isError = true;
        this.errorMessage = erro; // Set the error message
        console.error(erro);
      }
    });
  }

  update() {
    this.pessoaService.update(this.pessoa, this.pessoa.id).subscribe({
      next: pessoa => { // QUANDO DÁ CERTO
        this.retorno.emit(pessoa);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  




}

