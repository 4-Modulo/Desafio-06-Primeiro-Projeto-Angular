import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livros-details',
  templateUrl: './livros-details.component.html',
  styleUrls: ['./livros-details.component.scss']
})
export class LivrosDetailsComponent {
  @Input() livro : Livro = new Livro();
  @Output() retorno = new EventEmitter<Livro>();

  livroService = inject(LivroService);

  constructor() {  }

  create(){
    this.livroService.create(this.livro).subscribe({
      next : livro => {
        this.retorno.emit(livro);
      },
      error : error => {
        console.error(error);
      }
    });
  }

  update() {
    this.livroService.update(this.livro, this.livro.id).subscribe({
      next: livro => { // QUANDO DÁ CERTO
        this.retorno.emit(livro);
      },
      error: erro => { // QUANDO DÁ ERRO
        console.error(erro);
      }
    });
  }



}
