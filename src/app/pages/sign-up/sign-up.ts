import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Input } from "../../components/input/input";


@Component({
  selector: 'app-sign-up',
  imports: [Input],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export default class SignUp {

  singUpForm = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
    confirmPassword: new FormControl<string>(''),
  })

}
