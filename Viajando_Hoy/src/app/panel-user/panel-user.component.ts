import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ApiService } from '../api.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-user',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './panel-user.component.html',
  styleUrl: './panel-user.component.css'
})
export class PanelUserComponent implements OnInit {

  usuario: any = {};
  fotoPerfilUrl: SafeUrl | null = null;
  rolUsuario: number | null = null;
  // rolN: number | null = null;

  constructor(private apiService: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.cargarPerfil(parseInt(userId, 10));
    }
  }

  cargarPerfil(userId: number): void {
    this.apiService.getUsuario(userId).subscribe({
      next: data => {
        this.usuario = data[0];

        console.log('Datos del usuario:', data[0]);
        this.cargarFotoPerfil(userId);
        this.cargarRolUsuario(data[0].rol_id);
      },
      error: error => {
        console.error('Error al cargar el perfil del usuario:', error);
      }
    });
  }

  cargarFotoPerfil(userId: number): void {
    this.apiService.getFotoPerfil(userId).subscribe({
      next: data => {
        if (data[0] && data[0].url) {
          this.fotoPerfilUrl = this.sanitizer.bypassSecurityTrustUrl(data[0].url);
          console.log('URL de la foto de perfil:', data[0].url);
        } else {
          console.log('No se encontró una foto de perfil');
        }
      },
      error: error => {
        console.error('Error al cargar la foto de perfil:', error);
      }
    });
  }


  cargarRolUsuario(rolId: number): void {
    this.apiService.getRolUsuario(rolId).subscribe({
      next: data => {
        this.rolUsuario = data[0].tipo_administracion; // Ajusta esto según el nombre de la propiedad que recibas
        console.log('Rol del usuario:', this.rolUsuario);
      },
      error: error => {
        console.error('Error al cargar el rol del usuario:', error);
      }
    });
  }





  onFotoPerfilChange(event: any): void {
    const userId = localStorage.getItem('userId');
    const file = event.target.files[0];
    if (userId && file) {
      const formData = new FormData();
      formData.append('imagen', file);
      formData.append('usuario_id', userId);

      this.apiService.subirFotoPerfil(formData).subscribe({
        next: response => {
          if (response.url) {
            this.fotoPerfilUrl = this.sanitizer.bypassSecurityTrustUrl(response.url);
            console.log('Foto de perfil subida con éxito:', response.url);
          } else {
            console.error('Error: No se recibió una URL válida');
          }
        },
        error: error => {
          console.error('Error al subir la foto de perfil:', error);
        }
      });
    }
  }
}
