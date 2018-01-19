import { Component, Input, OnInit } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  @Input() titulo: string;

  ngOnInit() {
    if(this.titulo.length > 7) {
      this.titulo = `${this.titulo.substring(0, 7)}...`;
    }
  }
}
