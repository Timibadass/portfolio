import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timi Omoyeni';

  state: string = 'hidden';
  position: string = 'straight' 

  animateMe() {
    this.state = (this.state === 'hidden' ? 'visible' : 'hidden');
    this.position = (this.position === 'rotated' ? 'straight' : 'rotated')
  }

  hideMe() {
    this.state = 'hidden',
    this.position = 'straight'
  }

}
