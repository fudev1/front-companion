import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Company, Faction } from '../../../models/company.model';
import { NavLinks } from '../../../../core/navigation/config/nav-links.model';
import { LogoComponent } from '../../../../core/navigation/components/logo/logo.component';
import { UserLinksComponent } from '../../../../core/navigation/components/user-links/user-links.component';
import { LoginButtonComponent } from '../../../../core/navigation/components/login-button/login-button.component';
import { AuthService } from '../../../../core/auth/auth.service';
import { NavbarService } from '../../../../core/navigation/services/navbar.service';
import { NgClass, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tenant-nav',
  standalone: true,
  imports: [
    RouterLink,
    LogoComponent,
    UserLinksComponent,
    LoginButtonComponent,
    NgClass,
    AsyncPipe
  ],
  templateUrl: './tenant-nav.component.html',
  styleUrls: ['./tenant-nav.component.scss']
})
export class TenantNavComponent {
  @Input({ required: true }) company!: Company;
  @Input({ required: true }) navLinks!: NavLinks[];
  @Input({ required: true }) userLinks!: NavLinks[];

  private readonly authService = inject(AuthService);
  readonly navbarService = inject(NavbarService);
  readonly isAuthenticated = this.authService.isAuthenticated;

  getNavbarClass(): string {
    switch (this.company.faction) {
      case Faction.MARAUDERS:
        return 'bg-marauders';
      case Faction.SYNDICATE:
        return 'bg-syndicate';
      case Faction.COVENANT:
        return 'bg-covenant';
      default:
        return '';
    }
  }

  getTextClass(): string {
    return this.company.faction === Faction.COVENANT ? 'text-gray-800' : 'text-white';
  }
}
