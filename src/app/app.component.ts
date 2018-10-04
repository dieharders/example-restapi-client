import { Component } from '@angular/core';
import { animView } from './animations/transitions.animation'; // Anim file

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animView] // add our animations
})
export class AppComponent {
  title = 'app';
}