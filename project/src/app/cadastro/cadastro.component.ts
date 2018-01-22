import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent{
    foto: FotoComponent = new FotoComponent();

    salvar(evento: Event) {
        evento.preventDefault();
        console.log(this.foto);
    }
}