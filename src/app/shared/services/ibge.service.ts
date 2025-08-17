import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

export interface Estado {
  id: Number;
  sigla: string;
  nome: string;
}

export interface Cidade {
  id: Number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class IbgeService {
private readonly API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades';

  constructor(private httpClient: HttpClient) { }

  getEstados(): Observable<Estado[]> {
    return this.httpClient
      .get<Estado[]>(`${this.API_URL}/estados?orderBy=nome`)
      .pipe(retry(2));
  }

  getCidadesPorEstado(uf: string): Observable<Cidade[]> {
    return this.httpClient
      .get<Cidade[]>(`${this.API_URL}/estados/${uf}/municipios?orderBy=nome`)
      .pipe(retry(2));
  }
}