import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoInteresseService {

  interessadosUrl = 'http://localhost:8080/tipoInteressados';

  constructor(private http: HttpClient) { }

  listarTodas(): Promise<any> {

    return this.http.get(this.interessadosUrl)
      .toPromise();
  }

}
