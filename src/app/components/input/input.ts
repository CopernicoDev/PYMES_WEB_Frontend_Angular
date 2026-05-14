import { Component, input } from '@angular/core';
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

  control = input.required<FormControl>();


}
