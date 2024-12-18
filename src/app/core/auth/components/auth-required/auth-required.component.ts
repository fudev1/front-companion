import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginButtonComponent } from '../../../navigation/components/login-button/login-button.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-auth-required',
  standalone: true,
  imports: [LoginButtonComponent],
  templateUrl: './auth-required.component.html',
  styleUrls: ['./auth-required.component.scss']
})
export class AuthRequiredComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  ngOnInit() {
    // Si l'utilisateur est déjà connecté, on le redirige
    if (this.authService.isAuthenticated()) {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'];
      if (returnUrl) {
        this.router.navigateByUrl(returnUrl);
      } else {
        this.router.navigate(['/new-world/characters']);
      }
    }
  }
}
