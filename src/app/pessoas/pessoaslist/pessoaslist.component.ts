import { Component } from '@angular/core';
import { Pessoa } from '../Pessoa';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {
  lista: Pessoa[]=[];

  constructor(){
    let pessoa1: Pessoa = new Pessoa();
    pessoa1.nome = "andre";
    pessoa1.idade = 21;
    
    let pessoa2: Pessoa = new Pessoa();
    pessoa2.nome = "andre";
    pessoa2.idade = 21;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.nome = "pefnd";
    pessoa3.idade = 21;
    
    let pessoa4: Pessoa = new Pessoa();
    pessoa4.nome = "vmnwe";
    pessoa4.idade = 21;
    
    let pessoa5: Pessoa = new Pessoa();
    pessoa5.nome = "avie";
    pessoa5.idade = 21;
    
    let pessoa6: Pessoa = new Pessoa();
    pessoa6.nome = "ford";
    pessoa6.idade = 21;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.nome = "juvem";
    pessoa7.idade = 21;
    
    let pessoa8: Pessoa = new Pessoa();
    pessoa8.nome = "privae";
    pessoa8.idade = 21;

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.nome = "resinha";
    pessoa9.idade = 21;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.nome = "vandelei";
    pessoa10.idade = 21;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);

  }
}
