import { Component } from '@angular/core';
import { NavbarComponent } from '../core/navigation/components/navbar/navbar.component';
import { NAV_LINKS_THRONES_LIBERTY } from '../core/navigation/config/nav-links';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-thrones-liberty',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './layout-thrones-liberty.component.html',
  styleUrl: './layout-thrones-liberty.component.scss'
})
export class LayoutThronesLibertyComponent {
  navigationThronesLiberty = NAV_LINKS_THRONES_LIBERTY;
}
