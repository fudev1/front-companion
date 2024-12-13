import { Component } from '@angular/core';
import { NavbarComponent } from '../core/navigation/components/navbar/navbar.component';
import { NAV_LINKS_NEW_WORLD } from '../core/navigation/config/nav-links';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-new-world',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
  ],
  templateUrl: './layout-new-world.component.html',
  styleUrl: './layout-new-world.component.scss'
})
export class LayoutNewWorldComponent {
  navigationNewWorld  = NAV_LINKS_NEW_WORLD
}
