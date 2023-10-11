import { Component, inject } from '@angular/core';
import { Pessoa } from '../Pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoas-listar',
  templateUrl: './pessoas-listar.component.html',
  styleUrls: ['./pessoas-listar.component.scss'],
})
export class PessoasListarComponent {
  lista: Pessoa[] = [];
  pessoaSelecionadaParaEdicao: Pessoa = new Pessoa();
  indiceSelecionadoParaEdicao!: number;

  constructor(
    private modalService: NgbModal,
    private pessoaService: PessoaService
  ) {
    this.listAll();
  }

  delete(id: number) {
    this.pessoaService.delete(id).subscribe({
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

  listAll() {
    this.pessoaService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console.');
        console.error(erro);
      }
    });
  }

  adicionar(modal: any) {
    this.pessoaSelecionadaParaEdicao = new Pessoa();
    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, pessoa: Pessoa, indice: number) {
    this.pessoaSelecionadaParaEdicao = Object.assign({}, pessoa);
    this.indiceSelecionadoParaEdicao = indice;
    this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarPessoa(pessoa: Pessoa) {
    if (pessoa.id === 0) {
      this.pessoaService.create(pessoa).subscribe({
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
      this.pessoaService.update(pessoa, pessoa.id).subscribe({
        next: pessoaAtualizada => {
          this.lista[this.indiceSelecionadoParaEdicao] = pessoaAtualizada;
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
