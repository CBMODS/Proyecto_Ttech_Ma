import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
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

  @ViewChild('t_layout') t_layout!: ElementRef<HTMLElement>;
  @ViewChild('mjs') mjs!: ElementRef<HTMLElement>;
  @ViewChild('btn_anim') btn!: ElementRef<HTMLElement>;



  isRegistering = false;

  constructor(private renderer: Renderer2) {}

  toggleLayout() {
    // Alternar las clases de posición
    this.toggleClass(this.t_layout.nativeElement, 'left-0');
    this.toggleClass(this.btn.nativeElement, 'mr-60');

    // Cambiar bordes dependiendo del estado de registro
    if (this.isRegistering) {
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderTopLeftRadius', '30%');
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderBottomLeftRadius', '30%');
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderTopRightRadius', '1rem');
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderBottomRightRadius', '1rem');
      this.mjs.nativeElement.innerHTML = 'puedes unirte a nosotros';
      this.mjs.nativeElement.innerHTML = 'No tienes cuenta <br> puedes unirte a nosotros'; 
      this.btn.nativeElement.innerHTML = 'Crear Cuenta';
    } else {
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderTopLeftRadius', '1rem');
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderBottomLeftRadius', '1rem');
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderTopRightRadius', '30%');
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderBottomRightRadius', '30%');
      this.mjs.nativeElement.innerHTML = 'Ya tienes cuenta <br> inicia sesión'; 
      this.btn.nativeElement.innerHTML = 'Inicia Sesion';
    }

    // Cambiar el estado de isRegistering
    this.isRegistering = !this.isRegistering;
  }

  private toggleClass(element: HTMLElement, className: string) {
    if (element.classList.contains(className)) {
      this.renderer.removeClass(element, className);
    } else {
      this.renderer.addClass(element, className);
    }
  }
}
