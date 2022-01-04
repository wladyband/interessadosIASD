import { ErrorHandlerService } from './../../core/navbar/error-handler.service';
import { DiscipuloService, DiscipuloFiltro } from './../discipulo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
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
    private errorHandler: ErrorHandlerService,
    private discipuloService: DiscipuloService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
    ) { }

  ngOnInit(): void {

  }

    pesquisar(pagina = 0) {
      this.filtro.pagina = pagina;

        this.discipuloService.pesquisar(this.filtro)
        .then(resultado => {
          this.discipulos = resultado.discipulos;
          this.totalRegistros = resultado.total;
        })
        .catch(erro => this.errorHandler.handle(erro));
    }


    aoMudarPagina(event: LazyLoadEvent) {
      const pagina = event.first / event.rows;
      this.pesquisar(pagina);
    }

    excluir(discipulo: any) {
      this.discipuloService.excluir(discipulo.codigo)
        .then(() => {
          if (this.grid.first === 0) {
            this.pesquisar();
          } else {
            this.grid.reset();
          }
          this.messageService.add({ severity: 'success', detail: 'Discipulo excluído com sucesso!' })
        })
    }

    confirmarExclusao(discipulo: any): void {
      this.confirmationService.confirm({
        message: 'Tem certeza que deseja excluir?',
        accept: () => {
            this.excluir(discipulo);
        }
      });
    }

}
