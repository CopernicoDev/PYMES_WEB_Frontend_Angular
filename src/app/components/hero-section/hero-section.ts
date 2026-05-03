import { Component } from '@angular/core';
import { InfoCard } from '../info-card/info-card';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [InfoCard, RouterLinkActive, RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

}
