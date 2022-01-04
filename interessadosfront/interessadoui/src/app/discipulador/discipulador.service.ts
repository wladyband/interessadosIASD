import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscipuladoresService {

  discipuladoresUrl = 'http://localhost:8080/discipuladores';

  constructor(private http: HttpClient) { }

  listarTodas(): Promise<any> {

    return this.http.get(this.discipuladoresUrl)
      .toPromise();
  }

}
