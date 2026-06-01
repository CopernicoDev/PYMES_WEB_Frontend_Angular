import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./layouts/public-layout/public-layout'),
		children: [
			{
				path: 'home',
				loadComponent: () => import('./pages/home/home')
			},
			{
				path: 'services-it',
				loadComponent: () => import('./pages/services-it/services-it')
			},
			{
				path: 'contact',
				loadComponent: () => import('./pages/contact/contact')
			},
			{
				path: 'sign-up',
				loadComponent: () => import('./pages/sign-up/sign-up')
			},
			{
				path: 'login',
				loadComponent: () => import('./pages/login/login')
			},
			{
				path: '', redirectTo: 'home', pathMatch: 'full'
			}
		]
	},
	{
		path: 'dashboard',
		loadComponent: () => import('./layouts/private-layout/private-layout'),
		// canActivate: [authGuard], // <-- Más adelante protegerás esto con un Guard de autenticación
		children: [
			{
				path: 'desktop', // URL: /dashboard/desktop
				loadComponent: () => import('./pages/dashboard/desktop/desktop')
			},
			{
				path: 'tickets', // URL: /dashboard/tickets
				loadComponent: () => import('./pages/dashboard/tickets/tickets')
			},
			{
				path: 'profile', // URL: /dashboard/profile
				loadComponent: () => import('./pages/dashboard/profile/profile')
			},
			{
				path: '',
				redirectTo: 'desktop',
				pathMatch: 'full'
			}
		]
	},

	{
		path: '**',
		redirectTo: 'home'
	}

];
