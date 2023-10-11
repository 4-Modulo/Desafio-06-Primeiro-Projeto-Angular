import { Component, inject } from '@angular/core';
import { Livro } from '../livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livros-listar',
  templateUrl: './livros-listar.component.html',
  styleUrls: ['./livros-listar.component.scss']
})
export class LivrosListarComponent {
  lista: Livro[] = [];
  livroSelecionadoParaEdicao: Livro = new Livro();
  indiceSelecionadoParaEdiçao!: number;

  constructor(
    private modalService: NgbModal,
    private livroService: LivroService
  ) {
    this.listAll();
  }

  listAll() {
    this.livroService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console.');
        console.error(erro);
      }
    });
  }

  delete(id: number) {
    this.livroService.delete(id).subscribe({
      next: () => {
        console.error('Exclusão bem-sucedida!');
        this.listAll();
      },
      error: erro => {
        console.error('Erro ao excluir a pessoa. Consulte o console para mais detalhes.');
        console.error(erro);
      }
    });
  }

  
  adicionar(modal: any) {
    this.livroSelecionadoParaEdicao = new Livro();
    this.modalService.open(modal, { size: 'xd' });
  }

  editar(modal: any, pessoa: Livro, indice: number) {
    this.livroSelecionadoParaEdicao = Object.assign({}, pessoa);
    this.indiceSelecionadoParaEdiçao = indice;
    this.modalService.open(modal, { size: 'xd' });
  }
  addOuEditarLivros(livro: Livro) {
    if (livro.id === 0) {
      this.livroService.create(livro).subscribe({
        next: pessoaCriada => {
          this.lista.push(pessoaCriada);
          this.modalService.dismissAll();
        },
        error: erro => {
          console.error('Erro ao criar a pessoa. Consulte o console para mais detalhes.');
          console.error(erro);
        }
      });
    } else {
      this.livroService.update(livro, livro.id).subscribe({
        next: livroAtualizada => {
          this.lista[this.indiceSelecionadoParaEdiçao] = livroAtualizada;
          this.modalService.dismissAll();
        },
        error: erro => {
          console.error('Erro ao atualizar a pessoa. Consulte o console para mais detalhes.');
          console.error(erro);
        }
      });
    }
  }
}
