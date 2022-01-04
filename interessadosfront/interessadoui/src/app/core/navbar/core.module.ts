import { TipoInteresseService } from './../../tipoInteresse/tipoInteresse.service';
import { TipoAtendimentoService } from '../../tipoAtendimento/tipoAtendimento.service';
import { ErrorHandlerService } from './error-handler.service';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}



@NgModule({
  declarations: [ NavbarComponent],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ],

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    RippleModule,
    SidebarModule,
    ButtonModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),

  ],
  providers: [
    TipoInteresseService,
    TipoAtendimentoService,
    ErrorHandlerService,
    MessageService,
    ConfirmationService,
    DatePipe,
    {provide: LOCALE_ID, useValue: 'pt-BR' },
    TranslateService
  ],
})
export class CoreModule { }
