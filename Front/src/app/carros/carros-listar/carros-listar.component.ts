import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carros-listar',
  templateUrl: './carros-listar.component.html',
  styleUrls: ['./carros-listar.component.scss']
})
export class CarrosListarComponent {
  lista: Carro[] = [];
  carroSelecionadaParaEdicao: Carro = new Carro();
  indiceSelecionadoParaEdicao!: number;

  constructor(
    private modalService: NgbModal,
    private carroService: CarroService
  ) {
    this.listAll();
  }


  listAll() {
    this.carroService.listAll().subscribe({
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
    this.carroService.delete(id).subscribe({
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
    this.carroSelecionadaParaEdicao = new Carro();
    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, carro: Carro, indice: number) {
    this.carroSelecionadaParaEdicao = Object.assign({}, carro);
    this.indiceSelecionadoParaEdicao = indice;
    this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarPessoa(carro: Carro) {
    if (carro.id === 0) {
      this.carroService.create(carro).subscribe({
        next: carro => {
          this.lista.push(carro);
          this.modalService.dismissAll();
        },
        error: erro => {
          console.error('Erro ao criar a pessoa. Consulte o console para mais detalhes.');
          console.error(erro);
        }
      });
    } else {
      this.carroService.update(carro, carro.id).subscribe({
        next: carro => {
          this.lista[this.indiceSelecionadoParaEdicao] = carro;
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
