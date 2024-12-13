import { Component } from '@angular/core';
import { NavbarComponent } from '../core/navigation/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { NAV_LINKS_MAIN } from '../core/navigation/config/nav-links';

@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss'
})
export class LayoutMainComponent {
  navigationMain = NAV_LINKS_MAIN;
}
