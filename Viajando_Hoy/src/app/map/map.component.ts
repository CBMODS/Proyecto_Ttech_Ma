import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    MenuComponent,
    GoogleMapsModule,
    CommonModule,
  ],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 9.3034,  // Coordenada de latitud para Sincelejo
    lng: -75.3953 // Coordenada de longitud para Sincelejo
  };
  zoom = 6;

  /*---------- Move Map ----------*/
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  /*---------- Move ----------*/
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
