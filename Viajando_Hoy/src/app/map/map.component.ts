import { Component } from '@angular/core';
@Component({
  selector: 'app-map',
  standalone: true, // Asegura que este componente es standalone
  imports: [], // Solo importa RouterLink si lo necesitas para este componente
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {}
