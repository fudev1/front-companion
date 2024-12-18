import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  // Rediriger vers le composant auth-required avec l'URL de retour
  return router.createUrlTree(['/auth-required'], { 
    queryParams: { returnUrl: state.url } 
  });
};
