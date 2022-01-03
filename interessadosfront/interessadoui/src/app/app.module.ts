import { HttpClient } from '@angular/common/http';
import { DiscipuladoModule } from './discipulo/discipulado.module';
import { CoreModule } from './core/core.module';
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

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    DiscipuladoModule,
    CoreModule,
    DiscipuladoModule,
    ToastModule,
    ConfirmDialogModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
      }),
    AppRoutingModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    DatePipe,
    {provide: LOCALE_ID, useValue: 'pt-BR' },
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
