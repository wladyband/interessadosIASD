import { DiscipuloService, DiscipuloFiltro } from './../discipulo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-discipulo',
  templateUrl: './pesquisa-discipulo.component.html',
  styleUrls: ['./pesquisa-discipulo.component.css']
})
export class PesquisaDiscipuloComponent implements OnInit {

  filtro = new DiscipuloFiltro();
  discipulos =[];


  constructor(
    private discipuloService: DiscipuloService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

    pesquisar(): void {

      this.discipuloService.pesquisar(this.filtro)
        .then(resultado => {
          this.discipulos = resultado.discipulos
        });
    }



}
