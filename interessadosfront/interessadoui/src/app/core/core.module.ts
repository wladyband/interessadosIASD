import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [ NavbarComponent],
  exports: [ NavbarComponent ],
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
    ButtonModule,
    RouterModule

  ]
})
export class CoreModule { }
