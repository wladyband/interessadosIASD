import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';


@NgModule({
  declarations: [ NavbarComponent],
  exports: [ NavbarComponent ],

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