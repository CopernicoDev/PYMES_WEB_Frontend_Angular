import { Component } from '@angular/core';
import { Option } from '../../../interface/menuOptions-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-buttons',
  imports: [RouterLink],
  templateUrl: './nav-bar-buttons.html',
  styleUrl: './nav-bar-buttons.css',
})
export class NavBarButtons {

  buttonsOptions: Option[] = [
    {
      label: 'Log in',
      route: '/login',
      estilos: 'pl-2 pr-2 bg-text text-bg-dark'
    },
    {
      label: 'Registro',
      route: '/sign-up',
      estilos: 'pl-2 pr-2'
    }
  ]

}
