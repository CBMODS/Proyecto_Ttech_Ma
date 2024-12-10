import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3002';

  constructor(private http: HttpClient) { }

  login(credentials: { correo: string, contrasena_hash: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuario/login`, credentials);
  }

  register(data: {
    nombre_usuario: string,
    nombre_1: string,
    nombre_2: string,
    apellido_1: string,
    apellido_2: string,
    correo: string,
    contrasena_hash: string,
    rol_id: number
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuario/registro`, data);
  }

  getUsuario(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuario/${userId}`);
  }

  subirFotoPerfil(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/imagenes`, formData);
  }

  getFotoPerfil(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/imagenes/usuario/${userId}`);
  }

  getRolUsuario(rolId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/rol/${rolId}`);
  }

  private getLoggedUserId(): number {
    const token = localStorage.getItem('token');
    const payload = token ? JSON.parse(atob(token.split('.')[1])) : null;
    return payload ? payload.userId : null;
  }
}
