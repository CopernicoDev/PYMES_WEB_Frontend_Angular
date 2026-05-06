import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'home',
		loadComponent: () => import('./pages/home/home'),
	},
	{
		path: 'login',
		loadComponent: () => import('./pages/login/login'),
	},
	{
		path: 'sign-up',
		loadComponent: () => import('./pages/sign-up/sign-up'),
	},
	{
		path: 'services',
		loadComponent: () => import('./pages/services/services'),
	},
	{
		path: 'contact',
		loadComponent: () => import('./pages/contact/contact'),
	},
	{
		path: '**',
		redirectTo: 'home',
	}
];
