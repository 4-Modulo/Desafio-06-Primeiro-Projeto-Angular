import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Livro } from './livro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  API: string = 'http://localhost:8080/api/livro';
  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API);
  }

  create(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.API, livro);
  }

  update(livro:Livro, id: Number):Observable<Livro>{
    return this.http.put<Livro>(this.API+"/"+id, livro);
  } 
  delete(id: Number): Observable<void>{
    return this.http.delete<void>(this.API+"/"+id);
  } 

  exemploErro(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API + '/erro');
  }




}
