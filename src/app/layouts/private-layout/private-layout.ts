import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './private-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PrivateLayout { }
