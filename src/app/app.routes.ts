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
			{ path: 'services-it', loadComponent: () => import('./pages/services-it/services-it') },
			{ path: 'contact', loadComponent: () => import('./pages/contact/contact') },
			{ path: '', redirectTo: 'home', pathMatch: 'full' }
		]
	}
];
