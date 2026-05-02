import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Option } from '../../../interface/menuOptions-interface';



@Component({
  selector: 'app-nav-bar-routes',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar-routes.html',
  styleUrl: './nav-bar-routes.css',
})
export class NavBarRoutes {
  menuOptions: Option[] = [
    {
      label: 'ITSup',
      route: '/home',
      estilos: 'font-bold text-4xl'
    },
    {
      label: 'Servicio',
      route: '/servicios',

    },
    {
      label: 'Contacto',
      route: '/contacto',
    }
  ]

}
