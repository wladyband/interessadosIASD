import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export class DiscipuloFiltro {
  nome: string = "";
  pagina = 0;
  itensPorPagina = 2;
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

    let params = new HttpParams()
      .set('page', filtro.pagina.toString())
      .set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }


    return this.http.get(`${this.discipulosURL}`,  { params })
    .toPromise()
    .then((response: any) => {
       const responseJson = response;
       const discipulos = responseJson.content;

       const resultado = {
        discipulos,
        total: responseJson.totalElements

      };

      return resultado;

      });
  }

}
