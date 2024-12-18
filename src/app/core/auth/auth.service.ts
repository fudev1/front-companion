import { computed, Injectable, Signal, signal } from '@angular/core';
import { DiscordUser } from '../models/auth.model';
import { environment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly userSignal = signal<DiscordUser | null>(null);                                // Signal : Stocker l'utilisateur
  private readonly tokensSignal = signal<{ access: string; refresh: string } | null>(null);      // Signal : Stocker les token
  private readonly apiUrl = environment.apiUrl;                                                  // URL de l'API


  readonly isAuthenticated = computed(() => !!this.tokensSignal());
  readonly avatarUrl = computed(() => {
    const user = this.userSignal();
    return user?.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` : null;
  });


  constructor(
    private readonly http: HttpClient, 
    private readonly router: Router
  ) {
    this.loadUserFromLocalStorage(); 
  }      


  private loadUserFromLocalStorage(): void {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    const user = localStorage.getItem('user_data'); 

    if (accessToken && refreshToken && user) {
      this.tokensSignal.set({ access: accessToken, refresh: refreshToken });
      this.userSignal.set(JSON.parse(user));
    }
  }

  setTokens(tokens: { access: string; refresh: string }): void {
    localStorage.setItem('access_token', tokens.access);
    localStorage.setItem('refresh_token', tokens.refresh);
    this.tokensSignal.set(tokens);
  }

  setUser(user: DiscordUser): void {
    this.userSignal.set(user);
    localStorage.setItem('user_data', JSON.stringify(user));
  }

  login(): void {
    window.location.href = `${this.apiUrl}/users/discord/login`;
  }

  private clearStorage(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_data');
  }
  
  private clearState(): void {
    this.tokensSignal.set(null);
    this.userSignal.set(null);
  }
  
  private clearAll(): void {
    this.clearStorage();
    this.clearState();
  }
  
  logout(): void {
    this.clearAll();
    this.router.navigate(['/']);
  }

  get user(): Signal<DiscordUser | null> {
    return this.userSignal;
  }

  hasAvatar = computed(() => !!this.userSignal()?.avatar);
  hasBanner = computed(() => !!this.userSignal()?.banner_color);

  getAvatarUrl(): string | null {
    const user = this.user();
    if (user?.avatar) {
      return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
    } 
    return null;
  }
}
