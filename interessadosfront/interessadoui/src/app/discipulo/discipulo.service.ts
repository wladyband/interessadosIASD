import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface DiscipuloFiltro {
  nome: string;
}


@Injectable({
  providedIn: 'root'
})
export class DiscipuloService {


  discipulosURL = 'http://localhost:8080/discipulos';

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: DiscipuloFiltro): Promise<any> {
    const headers = new HttpHeaders()

    let params = new HttpParams();

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.discipulosURL}`,  { params })
    .toPromise()
    .then((response: any) => response['content']);
  }

}
