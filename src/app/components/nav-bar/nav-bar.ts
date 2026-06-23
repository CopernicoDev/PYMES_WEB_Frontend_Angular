import { Component } from '@angular/core';
import { NavBarRoutes } from './nav-bar-routes/nav-bar-routes';
import { NavBarButtons } from './nav-bar-buttons/nav-bar-buttons';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * 🧭 Componente Barra de Navegación (NavBar)
 * 
 * Este componente es "Standalone" (independiente).
 * Se encarga de mostrar el menú principal en la parte superior.
 */
@Component({
  selector: 'app-nav-bar',
  
  // En 'imports' declaramos qué otros componentes o directivas necesita este NavBar.
  // - NavBarRoutes / NavBarButtons: Son sub-componentes del menú.
  // - RouterLink: Directiva para navegar sin recargar la página (reemplaza href="").
  // - RouterLinkActive: Aplica una clase CSS al enlace si el usuario está en esa ruta.
  imports: [NavBarRoutes, NavBarButtons, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  // 💾 Estado del componente
  // Esta variable controla si el menú móvil (hamburguesa) está abierto o cerrado.
  isMenuOpen = false;

  // 🖱️ Evento para alternar el menú (abrir/cerrar)
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // 🖱️ Evento para forzar el cierre del menú (ej. al hacer clic en un enlace)
  closeMenu() {
    this.isMenuOpen = false;
  }
}
