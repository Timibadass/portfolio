import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  keyframes,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('displayNav',
  [
    state('hidden', style({
      'margin-left': '-100%',
    })),
    state('visible', style({
      'margin-left': '0',
      left: '0'
    })),
    transition('hidden <=> visible', animate('300ms ease-in-out')),
    ]),
    trigger('translateDiv', [
      state('straight', style({
        transform: 'rotate(180deg) translateY(0)'
      })),
      state('rotated',style({
        transform: 'rotate(45deg) translateY(11px) translateX(1px)'
      })),
      transition('straight <=> rotated', animate('0.3s ease-in-out')),
    ]),
    trigger('translateDivTwo', [
      state('straight', style({
        transform: 'rotate(180deg) translateY(0)'
      })),
      state('rotated',style({
        transform: 'rotate(-45deg) translateY(-3px) translateX(-7px)'
      })),
      transition('straight <=> rotated', animate('0.3s ease-in-out')),
    ]),
    trigger('disappearThree', [
      state('straight',style({
        display: 'block'
      })),
      state('rotated', style({
        display: 'none'
      })),
      transition('straight <=> rotated', animate('0.3s ease-in-out')),
    ]),
  ]
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
