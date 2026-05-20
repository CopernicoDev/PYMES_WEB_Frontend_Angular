import { Component } from '@angular/core';
import { Option } from '../../../interface/menuOptions-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-buttons',
  imports: [RouterLink,],
  templateUrl: './nav-bar-buttons.html',
  styleUrl: './nav-bar-buttons.css',
})
export class NavBarButtons {

  buttonsOptions: Option[] = [
    {
      label: 'Log in',
      route: '/login',
      estilos: 'btn px-12 py-6 bg-text text-bg font-semibold text-lg hover:bg-text-muted '
    },
    {
      label: 'Registro',
      route: '/sign-up',
      estilos: 'btn px-12 py-6 font-semibold text-lg hover:bg-bg bg-bg-dark'
    }
  ]

}
