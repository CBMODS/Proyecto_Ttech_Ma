import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'

@Component({
  selector: 'app-map',
  standalone: true, // Asegura que este componente es standalone
  imports: [
    CommonModule,
    GoogleMapsModule,
    ],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {

  constructor() {}
        
    ngOnInit(): void {}
    
    display: any;
    center: google.maps.LatLngLiteral = {
        lat: 22.2736308,
        lng: 70.7512555
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

}
