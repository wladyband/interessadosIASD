import { MessageComponent } from './../message/message.component';
import { DiscipuladoCadastroComponent } from './discipulado-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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


@NgModule({
  declarations: [
    DiscipuladoCadastroComponent,
    MessageComponent
  ],
  exports: [
    DiscipuladoCadastroComponent,
    MessageComponent
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
  ]
})
export class DiscipuladoModule { }
