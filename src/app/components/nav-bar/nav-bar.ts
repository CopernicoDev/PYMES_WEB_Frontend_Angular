import { Component } from '@angular/core';
import { NavBarRoutes } from './nav-bar-routes/nav-bar-routes';
import { NavBarButtons } from './nav-bar-buttons/nav-bar-buttons';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  imports: [NavBarRoutes, NavBarButtons, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

}
