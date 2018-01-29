import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent {
    foto: FotoComponent = new FotoComponent();
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    salvar(evento: Event) {
        evento.preventDefault();
        console.log(this.foto);

        const cabecalho = new Headers();
        cabecalho.append('Content-Type', 'application/json');

        this.http.post('http://localhost:3000/v1/fotos'
                        , JSON.stringify(this.foto)
                        , { headers: cabecalho }
                    )
                    .subscribe(
                        () => {
                            console.log('Foto salva com sucesso');
                        }
                        , erro => console.log(erro));
    }
}
