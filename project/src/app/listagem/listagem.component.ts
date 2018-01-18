import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent {
  fotos: FotoComponent[] = [];

  constructor(http: Http) {
    http.get('http://localhost:3000/v1/fotos')
        .map(resposta => resposta.json())
        .subscribe(
          jsonFotos => this.fotos = jsonFotos,
          erro => console.log(erro)
        );
  }

}
