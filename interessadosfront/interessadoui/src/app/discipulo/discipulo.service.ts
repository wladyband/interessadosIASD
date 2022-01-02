import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscipuloService {


  discipulosURL = 'http://localhost:8080/discipulos';

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(): Promise<any> {
    const headers = new HttpHeaders()

    return this.http.get(`${this.discipulosURL}`)
    .toPromise()
    .then((response: any) => response['content']);
  }

}
