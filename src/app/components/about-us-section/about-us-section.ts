import { Component } from '@angular/core';
import { InfoCard } from '../info-card/info-card';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';



@Component({
  selector: 'app-about-us-section',
  imports: [InfoCard],
  templateUrl: './about-us-section.html',
  styleUrl: './about-us-section.css',
})
export class AboutUsSection {

}
