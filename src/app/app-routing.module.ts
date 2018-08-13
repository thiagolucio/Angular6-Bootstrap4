import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { PessoalComponent } from './pessoal/pessoal.component';
import { ObrasComponent } from './obras/obras.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'obras', component: ObrasComponent },
  { path: 'pessoal', component: PessoalComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
