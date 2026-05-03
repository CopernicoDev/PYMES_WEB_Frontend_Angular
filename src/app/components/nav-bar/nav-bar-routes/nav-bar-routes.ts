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
      estilos: ' p-4 text-center font-extrabold col-start-1 text-2xl'
    },
    {
      label: 'Servicio',
      route: '/servicios',
      estilos: ' p-4 text-center font-bold col-start-2'

    },
    {
      label: 'Contacto',
      route: '/contacto',
      estilos: ' p-4 text-center font-bold col-start-3'
    }
  ]

}
