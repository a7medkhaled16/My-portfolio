import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from "./component/navbar-component/navbar-component";


@Component({ changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [ NavbarComponent , RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
