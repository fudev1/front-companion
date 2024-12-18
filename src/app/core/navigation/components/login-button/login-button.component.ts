import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [ButtonModule, MenuModule, AvatarModule],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})

export class LoginButtonComponent {


  private authService = inject(AuthService);
  isDropdownOpen = signal(false);
  user = this.authService.user;
  isLoggedIn = computed(() => !!this.user());
  globalName = computed(() => this.user()!.global_name);
  // avatarUrl = computed(() => this.user()?.avatar_url);
  items: MenuItem[] = [];


  ngOnInit() {
    this.items = [
      {
        label: 'Profile',
        icon: 'pi pi-user'
      },
      {
        separator: true
      },
      {
        label: 'Déconnexion',
        icon: 'pi pi-sign-out',
        command: () => this.logout()
      }
    ];
  }


  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

  avatarUrl(): string | null{
    return this.authService.getAvatarUrl();
  }


  toggleDropdown(): void { 
    this.isDropdownOpen.update(value => !value);
  } 


  closeDropdown(): void {
    this.isDropdownOpen.set(false);
  }

}
