import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  fotos: Object[] = [];

  constructor(http: Http) {
    http.get('http://localhost:3000/v1/fotos')
        .map(resposta => resposta.json())
        .subscribe(
          jsonFotos => this.fotos = jsonFotos,
          erro => console.log(erro)
        );
  }

}
