import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoAtendimentoService {

  atendimentosUrl = 'http://localhost:8080/tipoAtendimentos';

  constructor(private http: HttpClient) { }

  listarTodas(): Promise<any> {

    return this.http.get(this.atendimentosUrl)
      .toPromise();
  }

}
