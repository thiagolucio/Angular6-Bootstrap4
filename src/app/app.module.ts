import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ContatoComponent } from './contato/contato.component';
import { PessoalComponent } from './pessoal/pessoal.component';
import { ObrasComponent } from './obras/obras.component';
import { EspeciaisComponent } from './obras/especiais/especiais.component';
import { HomeComponent } from './home/home.component';
import { SlidesComponent } from './slides/slides.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ContatoComponent,
    PessoalComponent,
    ObrasComponent,
    EspeciaisComponent,
    HomeComponent,
    SlidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
