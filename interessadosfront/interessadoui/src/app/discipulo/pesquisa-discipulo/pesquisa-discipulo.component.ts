import { DiscipuloService } from './../discipulo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-discipulo',
  templateUrl: './pesquisa-discipulo.component.html',
  styleUrls: ['./pesquisa-discipulo.component.css']
})
export class PesquisaDiscipuloComponent implements OnInit {


  discipulos =[];


  constructor(
    private discipuloService: DiscipuloService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

    pesquisar(): void {
      this.discipuloService.pesquisar()
        .then(discipulos => this.discipulos = discipulos);
    }



}
