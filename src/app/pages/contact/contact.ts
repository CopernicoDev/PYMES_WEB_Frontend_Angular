import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Input } from '../../components/input/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [RouterLink, Input, ReactiveFormsModule]
})
export default class Contact {
  contactForm = new FormGroup({
    name: new FormControl(''),
    mail: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  })
}
