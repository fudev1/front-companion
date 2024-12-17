import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {


  private authService = inject(AuthService);

  
  // ➡️✅ Observer si l'user est connecté 
  user = this.authService.user;
  isLoggedIn = computed(() => !!this.user());


  // ➡️✅ Récupérer les méthodes venant de l'AuthService
  login(): void {
    this.authService.login();
  }

  logout(): boolean {
    return false
  }

  avatarUrl(): string | null{
    return this.authService.getAvatarUrl();
  }

  globalName(): string | null{
    return this.user()?.global_name || '';
  }




}
