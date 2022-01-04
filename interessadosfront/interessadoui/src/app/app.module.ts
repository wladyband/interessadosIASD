import { HttpClient } from '@angular/common/http';
import { DiscipuladoModule } from './discipulo/discipulado.module';
import { CoreModule } from './core/navbar/core.module';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { MessageService } from 'primeng/api';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData, DatePipe } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

registerLocaleData(localePt, 'pt-BR');


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    DiscipuladoModule,
    CoreModule,
    DiscipuladoModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
