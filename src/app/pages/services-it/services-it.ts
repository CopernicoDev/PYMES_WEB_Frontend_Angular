import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { InfoCard } from '../../components/info-card/info-card';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-services-it',
  standalone: true,
  templateUrl: './services-it.html',
  styleUrls: ['./services-it.css'],
  imports: [RouterLink, InfoCard, AnimateOnScrollDirective],
})
export default class ServicesIT { }
