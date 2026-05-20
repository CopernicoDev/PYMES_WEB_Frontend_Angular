import { Component, input, signal } from '@angular/core'; // 👈 Añadimos 'signal'
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {

  label = input.required<string>();
  id = input.required<string>();
  type = input<string>('text');
  placeholder = input<string>('');
  password = input<string>();

  // 👈 1. Añadimos un input opcional para indicar qué icono usar (ej: 'email')
  icon = input<string>();

  control = input.required<FormControl>();

  // 👈 2. Señal para alternar la visibilidad de la contraseña
  isPasswordVisible = signal(false);

  togglePasswordVisibility() {
    this.isPasswordVisible.update(visible => !visible);
  }
}
