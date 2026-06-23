import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { HeroSection } from '../../components/hero-section/hero-section';
import { AboutUsSection } from '../../components/about-us-section/about-us-section';

/**
 * 🏠 Componente de la Página Home
 * 
 * Este es un componente de "Página". Su único trabajo es juntar varios
 * componentes más pequeños (HeroSection, AboutUsSection) para formar 
 * la vista completa de la página de inicio.
 */
@Component({
  selector: 'app-home',
  
  // standalone: true significa que este componente no necesita pertenecer 
  // a un "NgModule" (la forma antigua de hacer apps en Angular).
  // Es la forma moderna recomendada en Angular 14+.
  standalone: true,
  
  // importamos los sub-componentes que vamos a usar en su HTML (home.html)
  imports: [HeroSection, AboutUsSection],
  
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export default class Home { }
