import { Component } from '@angular/core';
import { Input } from '../../components/input/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InfoCard } from "../../components/info-card/info-card";
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [Input, ReactiveFormsModule, InfoCard, AnimateOnScrollDirective]
})
export default class Contact {
  contactForm = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    subject: new FormControl<string>(''),
    message: new FormControl<string>(''),
  })


}
