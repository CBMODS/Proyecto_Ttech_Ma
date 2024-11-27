import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from './menu/menu.component';


/*
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
*/

@Component({
  selector: 'app-root',
  standalone: true, // Asegura que es un componente standalone
  imports: [MenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Viajando Hoy';
}
