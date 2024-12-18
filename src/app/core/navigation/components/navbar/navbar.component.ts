import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavLinks } from '../../config/nav-links.model';
import { NavbarService } from '../../services/navbar.service';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { LogoComponent } from '../logo/logo.component';
import { UserLinksComponent } from '../user-links/user-links.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoginButtonComponent,
    NavLinksComponent,
    LogoComponent,
    UserLinksComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() navLinks: NavLinks[] = [];
  @Input() userLinks: NavLinks[] = [];
  readonly navbarService = inject(NavbarService);
}
