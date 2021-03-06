import 'rxjs/add/operator/map';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { roteamento } from './app.routes';

import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule,
    PainelModule,
    roteamento,
    FormsModule
   ],
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
