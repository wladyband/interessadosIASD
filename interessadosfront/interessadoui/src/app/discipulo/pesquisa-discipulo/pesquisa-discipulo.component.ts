import { DiscipuloService, DiscipuloFiltro } from './../discipulo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-pesquisa-discipulo',
  templateUrl: './pesquisa-discipulo.component.html',
  styleUrls: ['./pesquisa-discipulo.component.css']
})
export class PesquisaDiscipuloComponent implements OnInit {

  totalRegistros = 0;
  filtro = new DiscipuloFiltro();
  discipulos: any[] =[];
  @ViewChild('tabela') grid!: Table;

  constructor(
    private discipuloService: DiscipuloService) { }

  ngOnInit(): void {

  }

    pesquisar(pagina = 0) {
      this.filtro.pagina = pagina;

        this.discipuloService.pesquisar(this.filtro)
        .then(resultado => {
          this.totalRegistros = resultado.total;
          this.discipulos = resultado.discipulos
        });
    }


    aoMudarPagina(event: LazyLoadEvent) {
      const pagina = event.first / event.rows;
      this.pesquisar(pagina);
    }

    excluir(discipulo: any) {
      this.discipuloService.excluir(discipulo.codigo)
        .then(() => {
          this.grid.reset();
        })
    }

}
