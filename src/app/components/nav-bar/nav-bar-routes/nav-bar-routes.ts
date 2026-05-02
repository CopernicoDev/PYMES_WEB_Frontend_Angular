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
      estilos: 'col-start-1 bg-bg-light border border-border-muted p-4 rounded-md'
    },
    {
      label: 'Servicio',
      route: '/servicios',
      estilos: 'col-start-4 bg-bg-light border border-border-muted p-4 rounded-md hover:bg-bg-dark transition-colors'

    },
    {
      label: 'Contacto',
      route: '/contacto',
      estilos: 'col-start-5 bg-bg-light border border-border-muted p-4 rounded-md hover:bg-bg-dark transition-colors'
    }
  ]

}
