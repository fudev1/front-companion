import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private readonly scrollThreshold = 100; // Réduit le seuil pour une réaction plus rapide
  private lastScrollPosition = 0;
  private readonly navbarVisibleSignal = signal(true);
  readonly navbarVisible$ = toObservable(this.navbarVisibleSignal);

  constructor() {
    // Initialiser la position de départ
    this.lastScrollPosition = window.scrollY;
    
    // Utiliser un throttle pour optimiser les performances
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  private handleScroll(): void {
    const currentScroll = window.scrollY;
    const scrollDelta = currentScroll - this.lastScrollPosition;

    // Si on est tout en haut, toujours montrer la navbar
    if (currentScroll < 50) {
      this.navbarVisibleSignal.set(true);
      this.lastScrollPosition = currentScroll;
      return;
    }

    // Si on a scrollé suffisamment pour déclencher un changement
    if (Math.abs(scrollDelta) > 20) {
      // Scrolling vers le bas et pas tout en haut
      if (scrollDelta > 0 && currentScroll > this.scrollThreshold) {
        this.navbarVisibleSignal.set(false);
      }
      // Scrolling vers le haut
      else if (scrollDelta < 0) {
        this.navbarVisibleSignal.set(true);
      }
      
      this.lastScrollPosition = currentScroll;
    }
  }

  show(): void {
    this.navbarVisibleSignal.set(true);
  }

  hide(): void {
    this.navbarVisibleSignal.set(false);
  }
}
