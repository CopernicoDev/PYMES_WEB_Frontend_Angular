import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBar],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export default class Home { }
