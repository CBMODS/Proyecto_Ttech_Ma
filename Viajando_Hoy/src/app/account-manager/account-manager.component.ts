import { Component, ElementRef, ViewChild, Renderer2, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';

// Función de validación personalizada
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
  const password = control.get('contrasena_hash');
  const confirmPassword = control.get('confirmPassword');
  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { 'mismatch': true };
  }
  return null;
};

@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AccountManagerComponent implements OnInit {

  @ViewChild('t_layout') t_layout!: ElementRef<HTMLElement>;
  @ViewChild('mjs') mjs!: ElementRef<HTMLElement>;
  @ViewChild('btn_anim') btn!: ElementRef<HTMLElement>;

  isRegistering = false;
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  loginError: string | null = null;

  constructor(private renderer: Renderer2, private fb: FormBuilder, private apiService: ApiService, private router: Router) { } // Inyectar Router

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena_hash: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      nombre_usuario: ['', Validators.required],
      nombre_1: ['', Validators.required],
      nombre_2: [''],
      apellido_1: ['', Validators.required],
      apellido_2: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena_hash: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      rol_id: [2]
    }, { validators: passwordMatchValidator });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value)
        .pipe(
          tap(response => {
            console.log('Login Successful', response);
            // Guardar el token en localStorage
            localStorage.setItem('token', response.token);
            localStorage.setItem('userId', response.userId.toString());
            this.loginError = null;
            this.router.navigate(['/user']);
          }),
          catchError(error => {
            console.error('Problemas', error);
            this.loginError = error.error || 'Error al iniciar sesión.'; return of(null);
          })
        )
        .subscribe();
    }
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const { confirmPassword, ...registerData } = this.registerForm.value; // Excluir confirmPassword
      this.apiService.register(registerData)
        .pipe(
          tap(response => {
            console.log('Registration Successful', response);
            // Guardar el token y redirigir al usuario si es necesario
            localStorage.setItem('token', response.token);
            localStorage.setItem('userId', response.userId.toString());
            this.router.navigate(['/user']); // Redirigir al usuario después del registro
          }),
          catchError(error => {
            console.error('Error en el registro', error);
            return of(null);
          })
        )
        .subscribe();
    }
  }

  toggleLayout(): void {
    this.toggleClass(this.t_layout.nativeElement, 'left-0');
    this.toggleClass(this.btn.nativeElement, 'mr-60');

    if (this.isRegistering) {
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderTopLeftRadius', '10%');
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderBottomLeftRadius', '10%');
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderTopRightRadius', '1rem');
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderBottomRightRadius', '1rem');
      this.mjs.nativeElement.innerHTML = '¿No tienes cuenta? Puedes unirte a nosotros';
      this.btn.nativeElement.innerHTML = 'Crear Cuenta';
    } else {
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderTopLeftRadius', '1rem');
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderBottomLeftRadius', '1rem');
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderTopRightRadius', '30%');
      this.renderer.setStyle(this.t_layout.nativeElement, 'borderBottomRightRadius', '30%');
      this.mjs.nativeElement.innerHTML = '¿Ya tienes cuenta? <br> Inicia Sesión';
      this.btn.nativeElement.innerHTML = 'Inicia Sesion';
    }

    this.isRegistering = !this.isRegistering;
  }

  private toggleClass(element: HTMLElement, className: string): void {
    if (element.classList.contains(className)) {
      this.renderer.removeClass(element, className);
    } else {
      this.renderer.addClass(element, className);
    }
  }
}
