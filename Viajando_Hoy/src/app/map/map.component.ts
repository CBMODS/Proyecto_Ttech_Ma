<<<<<<< HEAD
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-map',
  standalone: true, // Asegura que este componente es standalone
  imports: [
    CommonModule,
    GoogleMapsModule,
    MenuComponent,
    ],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {

  constructor() {}
        
    ngOnInit(): void {}
    
    display: any;
    center: google.maps.LatLngLiteral = {
        lat: 9.30472,
        lng: -75.39778
    };
    zoom = 6;
    
    /*------------------------------------------
    --------------------------------------------
    moveMap()
    --------------------------------------------
    --------------------------------------------*/
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    
    /*------------------------------------------
    --------------------------------------------
    move()
    --------------------------------------------
    --------------------------------------------*/
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }

=======
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
>>>>>>> huber
}
