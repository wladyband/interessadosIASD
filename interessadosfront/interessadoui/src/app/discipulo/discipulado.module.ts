import { DiscipuladoCadastroComponent } from './discipulado-cadastro/discipulado-cadastro.component';
import { DiscipuloRoutingModule } from './discipulo-routing.module';
import { SharedModule } from './../shared/shared.module';

import { NgModule, LOCALE_ID } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { PanelModule } from "primeng/panel";
import { RippleModule } from "primeng/ripple";

import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { MessageModule } from 'primeng/message';
import { PesquisaDiscipuloComponent } from './pesquisa-discipulo/pesquisa-discipulo.component';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DropdownModule } from 'primeng/dropdown';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    DiscipuladoCadastroComponent,
    PesquisaDiscipuloComponent

  ],
  exports: [
  ],
  providers: [
    DatePipe,
    {provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    RippleModule,
    SidebarModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    FormsModule,
    InputTextareaModule,
    InputMaskModule,
    MessageModule,
    SharedModule,
    DiscipuloRoutingModule,
    DropdownModule,
    HttpClientModule
  ]
})
export class DiscipuladoModule { }
