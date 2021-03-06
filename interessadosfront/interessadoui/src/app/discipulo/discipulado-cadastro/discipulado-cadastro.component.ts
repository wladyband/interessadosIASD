import { MessageService } from 'primeng/api';
import { Discipulo } from './../../model/discipulo';
import { DiscipuloService } from './../discipulo.service';
import { DiscipuladoresService } from './../../discipulador/discipulador.service';
import { TipoInteresseService } from './../../tipoInteresse/tipoInteresse.service';
import { ErrorHandlerService } from './../../core/navbar/error-handler.service';
import { TipoAtendimentoService } from '../../tipoAtendimento/tipoAtendimento.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-discipulado-cadastro',
  templateUrl: './discipulado-cadastro.component.html',
  styleUrls: ['./discipulado-cadastro.component.css']
})
export class DiscipuladoCadastroComponent implements OnInit {

  discipulo: Discipulo = new Discipulo();
  ptbr: any;
  tipoAtendimentos: any[] = [];
  tipoInteressados: any[] = [];
  discipuladores: any[] = [];

    constructor(
    private messageService: MessageService,
    private discipuloService: DiscipuloService,
    private discipuladoresService: DiscipuladoresService,
    private tiipoInteresseService: TipoInteresseService,
    private tipoAtendimentoService: TipoAtendimentoService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.carregarTipoAtendimentos();
    this.carregarTipoInteressados();
    this.carregarDiscipuladores();
  }

  carregarTipoAtendimentos() {
    return this.tipoAtendimentoService.listarTodas()
      .then(tipoAtendimentos => {
        this.tipoAtendimentos = tipoAtendimentos.map((c: any) => ({ label: c.descricao, value: c.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarTipoInteressados() {
    return this.tiipoInteresseService.listarTodas()
      .then(tipoInteressados => {
        this.tipoInteressados = tipoInteressados.map((c: any) => ({ label: c.descricao, value: c.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarDiscipuladores() {
    return this.discipuladoresService.listarTodas()
      .then(discipuladores => {
        this.discipuladores = discipuladores.map((c: any) => ({ label: c.nome, value: c.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) {
    this.discipuloService.adicionar(this.discipulo)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Discipulo adicionado com sucesso!' });

        form.reset();
        this.discipulo = new Discipulo();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
