import { Component } from '@angular/core';
import { NavBarRoutes } from './nav-bar-routes/nav-bar-routes';
import { NavBarButtons } from './nav-bar-buttons/nav-bar-buttons';



@Component({
  selector: 'app-nav-bar',
  imports: [NavBarRoutes, NavBarButtons],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

}
