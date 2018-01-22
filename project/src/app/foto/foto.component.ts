import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'foto',
  templateUrl: './foto.component.html'
})

export class FotoComponent{
  @Input() titulo: string  = '';
  @Input() url: string  = '';
  descricao: string = '';
}
