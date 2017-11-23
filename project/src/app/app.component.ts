import { Component, Inject } from '@angular/core'
import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular Project';
  fotos = []

  constructor(@Inject(Http) http) {

  }

}
