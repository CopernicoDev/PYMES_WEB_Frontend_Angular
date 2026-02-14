import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { Contact } from './contact/contact';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'services', component: Services },
	{ path: 'login', component: Login },
{ path: 'sign-up', component: SignUp },
{ path: 'contacto', component: Contact }
];
