import { DiscipuladoCadastroComponent } from './discipulado-cadastro/discipulado-cadastro.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PesquisaDiscipuloComponent } from './pesquisa-discipulo/pesquisa-discipulo.component';


const routes: Routes = [
  { path: 'discipulo/novo', component: DiscipuladoCadastroComponent },
  { path: 'discipulos', component: PesquisaDiscipuloComponent }
];



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DiscipuloRoutingModule { }
