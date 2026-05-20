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
      estilos: 'p-4 font-extrabold text-4xl  '
    },
    {
      label: 'Servicio',
      route: '/services-it',
      estilos: 'p-4 font-semibold text-xl btn btn-ghost bg-bg-dark rounded-xl'

    },
    {
      label: 'Contacto',
      route: '/contact',
      estilos: 'p-4 font-semibold- text-xl btn btn-ghost bg-bg-dark rounded-xl'
    }
  ]

}
