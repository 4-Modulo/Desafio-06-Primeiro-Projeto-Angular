import { HttpClient } from '@angular/common/http';
import {Injectable, inject } from '@angular/core';
import { Carro } from './carro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  API: string = 'http://localhost:8080/api/carro';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API);
  }

  create(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.API, carro);
  }

  update(carro:Carro, id: Number):Observable<Carro>{
    return this.http.put<Carro>(this.API+"/"+id, carro);
  } 
  delete(id: Number): Observable<void>{
    return this.http.delete<void>(this.API+"/"+id);
  } 

  exemploErro(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API + '/erro');
  }



}
