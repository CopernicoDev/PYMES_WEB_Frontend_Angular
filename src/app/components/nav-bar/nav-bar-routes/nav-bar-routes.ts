import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Option {
  label: string;
  route: string;
}

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
