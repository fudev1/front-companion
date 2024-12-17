import { computed, Injectable, Signal, signal } from '@angular/core';
import { DiscordUser } from '../models/auth.model';
import { environment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userSignal = signal<DiscordUser | null>(null);                // ☑️ Signal utilisé pour stocker l'utilisateur
  private apiUrl = environment.apiUrl;                                  // ☑️ URL de l'API

  constructor(private http: HttpClient, private router: Router) {}      // ☑️ Injection des services

  setTokens(tokens: { access: string; refresh: string }): void {
    localStorage.setItem('access_token', tokens.access);
    localStorage.setItem('refresh_token', tokens.refresh);
  }

  login(): void {
    window.location.href = `${this.apiUrl}/users/discord/login`;
  }

  logout(): void {
    localStorage.removeItem('access_token');  // ☑️ Supprime le token JWT
    this.userSignal.set(null);                // ☑️ Efface les infos users
    this.router.navigate(['/']);              // ☑️ Redirige vers la page d'accueil
  }


  // ➡️✅ Stocker l'utilisateur après le login
  setUser(user: DiscordUser): void {
    this.userSignal.set(user);
  }


  // ➡️✅ Récupérer les données user actuelles
  // - Utilise le Signal pour obtenir les infos au lieu de créer une méthode intermédiaire
  get user(): Signal<DiscordUser | null> {
    return this.userSignal;
  }


  // ➡️✅ Valeurs dérivées (computed) 
  // => Ne pas recalculer à chaque changement de valeur
  hasAvatar = computed(() => !!this.userSignal()?.avatar) 
  hasBanner = computed(() => !!this.userSignal()?.banner_color)

  getAvatarUrl(): string | null {
    const user = this.user();
    if (user?.avatar) {
      return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
    }
    return null;
  }
}
