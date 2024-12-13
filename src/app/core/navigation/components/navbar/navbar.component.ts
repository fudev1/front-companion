import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { NavLinks } from '../../config/nav-links.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LogoComponent,
    LoginButtonComponent,
    NavLinksComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() navLinks: NavLinks[] = [];
}
