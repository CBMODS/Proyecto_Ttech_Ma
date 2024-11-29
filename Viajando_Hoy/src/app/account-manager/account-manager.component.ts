import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-manager',
  imports: [
    FormsModule,
    CommonModule,
    ],
  standalone: true,
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.css']
})
export class AccountManagerComponent {
  miFuncion() {
    console.log('¡Botón clickeado!');
  }

  // Usamos @ViewChild para obtener las referencias a los elementos
  @ViewChild('t_layout') t_layout!: ElementRef<HTMLElement>;
  @ViewChild('mjs') mjs!: ElementRef<HTMLElement>;
  @ViewChild('btn_anim') btn!: ElementRef<HTMLElement>;

  isRegistering = false;

  toggleLayout() {
  // Alternar las clases para mover el layout de izquierda a derecha
  this.t_layout.nativeElement.classList.toggle('left-0');
  this.btn.nativeElement.classList.toggle('mr-60');
  

  // Alternar las clases de bordes
  this.t_layout.nativeElement.classList.toggle('rounded-tl-[30%]');
  this.t_layout.nativeElement.classList.toggle('rounded-bl-[30%]');
  this.t_layout.nativeElement.classList.toggle('rounded-tr-2xl');
  this.t_layout.nativeElement.classList.toggle('rounded-br-2xl');

  // Cambiar el contenido del mensaje y el texto del botón
  if (this.mjs.nativeElement.innerHTML.includes('puedes unirte a nosotros')) {
    this.mjs.nativeElement.innerHTML = 'Ya tienes cuenta <br> inicia sesión';
    this.btn.nativeElement.innerHTML = 'Inicia Sesion';
  } else {
    this.mjs.nativeElement.innerHTML = 'No tienes cuenta <br> puedes unirte a nosotros';
    this.btn.nativeElement.innerHTML = 'Crear Cuenta';
  }

  // Cambiar el estado de isRegistering
  this.isRegistering = !this.isRegistering;
}

}

