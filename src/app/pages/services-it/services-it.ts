import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { InfoCard } from '../../components/info-card/info-card';

@Component({
  selector: 'app-services-it',
  standalone: true,
  templateUrl: './services-it.html',
  styleUrls: ['./services-it.css'],
  imports: [RouterLink, InfoCard],
})
export default class ServicesIT { }
