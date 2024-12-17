import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}


  ngOnInit(): void {
    // Récupérer les tokens JWT depuis les paramètres URL
    this.route.queryParams.subscribe((params) => {
      const accessToken = params['access'];
      const refreshToken = params['refresh'];

      console.log(accessToken, refreshToken);

      if (accessToken && refreshToken) {
        // Stocker les tokens dans le service Auth
        this.authService.setTokens({ access: accessToken, refresh: refreshToken });
        

        // Rediriger vers la page principale ou le dashboard
        this.router.navigate(['/']);
      } else {
        console.error('Tokens manquants ou invalides');
        this.router.navigate(['/login']); // Rediriger vers le login en cas d'erreur
      }
    });
  }
}


