// src/app/pages/sign-up/sign-up.ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Input } from '../../components/input/input';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [Input, AnimateOnScrollDirective, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export default class SignUp {

  // Estados para mostrar feedback al usuario
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  // Inyectamos el UserService y el Router por constructor
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  // Formulario con todos los campos necesarios
  singUpForm = new FormGroup({
    username: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    confirmPassword: new FormControl<string>('', [Validators.required]),
  });

  // Método que se ejecuta al hacer clic en "Registrarse"
  onSubmit() {


    // 1. Si el formulario tiene errores de validación, no hacemos nada
    if (this.singUpForm.invalid) {
      this.singUpForm.markAllAsTouched(); // Muestra los errores en pantalla
      return;
    }

    // 2. Verificamos que las contraseñas coincidan
    const password = this.singUpForm.value.password!;
    const confirmPassword = this.singUpForm.value.confirmPassword!;
    if (password !== confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    // 3. Activamos el estado de "cargando" y limpiamos mensajes anteriores
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    // 4. Llamamos al servicio para enviar los datos al backend
    this.userService.register({
      username: this.singUpForm.value.username!,
      email: this.singUpForm.value.email!,
      password: password,
    }).subscribe({
      // Si el backend responde con 201 Created:
      next: (response) => {
        this.isLoading = false;
        this.successMessage = `¡Registro exitoso! Bienvenido, ${response.username}. Redirigiendo al login...`;
        // Redirigimos al login después de 2 segundos
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      // Si el backend responde con un error (400, 500, etc.):
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message ?? 'Ocurrió un error. Inténtalo de nuevo.';
      }
    });
  }
}
