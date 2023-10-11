import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  API: string = 'http://localhost:8080/api/pessoa';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API);
  }

  create(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.API, pessoa);
  }

  update(pessoa:Pessoa, id: Number):Observable<Pessoa>{
    return this.http.put<Pessoa>(this.API+"/"+id, pessoa);
  } 
  delete(id: Number): Observable<void>{
    return this.http.delete<void>(this.API+"/"+id);
  } 

  exemploErro(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API + '/erro');
  }



  /*
  CASO PRECISE ENVIAR REQUEST PARAMS, BASTA DECLARAR ASSIM E INCLUIR NA REQUISIÇÃO HTTP

  let params = new HttpParams()
      .set('empresaId', empresaId.toString())

  return this.http.get<Pessoa[]>(this.API, { params: params});

  
  
  SE PRECISAR COLOCAR COISAS NO HEADER DA REQUISIÇÃO


      let headers = new HttpHeaders()
      .set("Content-Type", "application/json");


        return this.http.get<Pessoa[]>(this.API, { headers: headers});



  */


}