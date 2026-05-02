import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { HeroSection } from '../../components/hero-section/hero-section';
import { AboutUsSection } from '../../components/about-us-section/about-us-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBar, HeroSection, AboutUsSection],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export default class Home { }
