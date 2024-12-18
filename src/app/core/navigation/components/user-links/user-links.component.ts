import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { NavLinks } from '../../config/nav-links.model';

@Component({
  selector: 'app-user-links',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-links.component.html',
  styleUrl: './user-links.component.scss'
})
export class UserLinksComponent {

  @Input() links: NavLinks[] = [];

  private authService = inject(AuthService);
  isLoggedIn = this.authService.user;
}
