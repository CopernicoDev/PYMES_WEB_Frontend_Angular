import { Routes } from '@angular/router';

/**
 * 🗺️ Archivo de Configuración de Rutas (Router) de Angular
 * 
 * Este archivo define cómo los usuarios navegan por la aplicación.
 * Asocia una URL específica (ej. /home, /dashboard) con un componente
 * de Angular que se debe mostrar en pantalla.
 * 
 * Angular usa "Lazy Loading" (carga perezosa) a través de loadComponent().
 * Esto significa que el código de una página (ej. 'services-it') NO se descarga 
 * hasta que el usuario realmente navega hacia ella. Esto hace que la carga 
 * inicial de la aplicación sea mucho más rápida.
 */
export const routes: Routes = [
	{
		// Ruta raíz vacía ''.
		path: '',
		// Usamos un Layout público para las páginas que cualquiera puede ver (sin login).
		loadComponent: () => import('./layouts/public-layout/public-layout'),
		
		// Estas son las "páginas hijas" que se inyectan dentro del Layout Público.
		// Aparecerán dentro de un <router-outlet> en public-layout.html
		children: [
			{
				path: 'home',
				loadComponent: () => import('./pages/home/home') // Página principal
			},
			{
				path: 'services-it',
				loadComponent: () => import('./pages/services-it/services-it') // Catálogo de servicios IT
			},
			{
				path: 'contact',
				loadComponent: () => import('./pages/contact/contact') // Página de contacto
			},
			{
				path: 'sign-up',
				loadComponent: () => import('./pages/sign-up/sign-up') // Registro
			},
			{
				path: 'login',
				loadComponent: () => import('./pages/login/login') // Iniciar sesión
			},
			{
				// Si el usuario entra a la ruta raíz '/', lo redirigimos automáticamente a '/home'.
				path: '', redirectTo: 'home', pathMatch: 'full'
			}
		]
	},
	{
		// Ruta '/dashboard'
		path: 'dashboard',
		// Usamos un Layout Privado (con sidebar, menú de usuario, etc.) para estas rutas.
		loadComponent: () => import('./layouts/private-layout/private-layout'),
		
		// 🛡️ canActivate: [authGuard]
		// Aquí es donde más adelante pondremos un "Guardián de Rutas".
		// Si un usuario no ha iniciado sesión y trata de entrar a /dashboard,
		// el guardián lo expulsará de vuelta al /login.
		
		children: [
			{
				path: 'desktop', // URL completa: /dashboard/desktop
				loadComponent: () => import('./pages/dashboard/desktop/desktop')
			},
			{
				path: 'tickets', // URL completa: /dashboard/tickets
				loadComponent: () => import('./pages/dashboard/tickets/tickets')
			},
			{
				path: 'profile', // URL completa: /dashboard/profile
				loadComponent: () => import('./pages/dashboard/profile/profile')
			},
			{
				// Si el usuario entra solo a '/dashboard', lo redirigimos a '/dashboard/desktop'
				path: '',
				redirectTo: 'desktop',
				pathMatch: 'full'
			}
		]
	},
	{
		// 🚧 Ruta Comodín (Wildcard)
		// Si el usuario escribe una URL que no existe (ej. /pagina-falsa),
		// esta regla lo captura y lo redirige a 'home'.
		path: '**',
		redirectTo: 'home'
	}
];
