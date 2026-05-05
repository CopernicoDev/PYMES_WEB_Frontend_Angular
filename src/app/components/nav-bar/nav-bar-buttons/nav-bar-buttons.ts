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
      estilos: 'h-12 w-30 bg-text text-bg font-semibold hover:bg-text-muted'
    },
    {
      label: 'Registro',
      route: '/sign-up',
      estilos: 'h-12 w-30 font-semibold hover:bg-bg'
    }
  ]

}
