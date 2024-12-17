import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DiscordUser } from '../../models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer les tokens JWT et les informations utilisateur depuis les paramètres URL
    this.route.queryParams.subscribe((params) => {
      console.log("Paramètres reçus:", params);
      const accessToken = params['access'];
      const refreshToken = params['refresh'];

      console.log("Access Token:", accessToken);
      console.log("Refresh Token:", refreshToken);
      
      if (accessToken && refreshToken) {
        // Stocker les tokens
        this.authService.setTokens({ access: accessToken, refresh: refreshToken });
        
        // Créer l'objet utilisateur à partir des paramètres
        const user: DiscordUser = {
          id: params['user_id'],
          username: params['username'],
          global_name: params['global_name'],
          avatar: params['avatar'],
          email: params['email'],
          locale: params['locale'],
          banner_color: params['banner_color'],
          last_login: params['last_login'],
          
        };
        
        // Stocker les informations utilisateur
        this.authService.setUser(user);
        
        // Rediriger vers la page principale
        this.router.navigate(['/']);
      } else {
        console.error('Tokens manquants ou invalides');
        this.router.navigate(['/login']); // Rediriger vers le login en cas d'erreur
      }
    });
  }
}
