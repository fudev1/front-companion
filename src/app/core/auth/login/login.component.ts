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
		private readonly route: ActivatedRoute,
		private readonly authService: AuthService,
		private readonly router: Router
	) {}

	ngOnInit(): void {

		// ➡️✅ Depuis les paramètres URL : Récupérer les tokens JWT + Récupérer et les informations utilisateur 

		this.route.queryParams.subscribe((params) => {
			
			// 🎯 Console //
			console.log("Paramètres reçus:", params);

			const accessToken = params['access'];
			const refreshToken = params['refresh'];
			const returnUrl = params['returnUrl'];

			// 🎯 Console //
			console.log("Access Token:", accessToken);
			console.log("Refresh Token:", refreshToken);
			
			if (accessToken && refreshToken) {

				// ➡️ Stocker les tokens
				this.authService.setTokens({ access: accessToken, refresh: refreshToken });		
			
				
				
				// ➡️✅ Créer l'objet utilisateur à partir des paramètres trouvé dans l'URL
				// Qui est envoyé par le backend après authentification

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



			
				// ➡️✅ Puis appeler cette méthode `setUser`stocker les informations utilisateur dans `AuthService`
				this.authService.setUser(user);
			
				// Rediriger vers l'URL de retour ou vers les personnages
				if (returnUrl && !returnUrl.includes('login')) {
					this.router.navigateByUrl(returnUrl);
				} else {
					this.router.navigate(['/new-world/characters']);
				}
			} else {
				console.error('Tokens manquants ou invalides');
				this.router.navigate(['/login']); // Rediriger vers le login en cas d'erreur
			}
		});
	}
}
