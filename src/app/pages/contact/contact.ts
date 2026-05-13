import { Component } from '@angular/core';
import { Input } from '../../components/input/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [Input, ReactiveFormsModule]
})
export default class Contact {
  contactForm = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    subject: new FormControl<string>(''),
    message: new FormControl<string>(''),
  })


}
