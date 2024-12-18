import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
	private readonly scrollThreshold = 2000; // Réduit le seuil pour une réaction plus rapide
	private lastScrollPosition = 0;
	private readonly navbarVisibleSignal = signal(true);
	private readonly hasScrolledSignal = signal(false);
	readonly navbarVisible$ = toObservable(this.navbarVisibleSignal);
	readonly hasScrolled$ = toObservable(this.hasScrolledSignal);

  	constructor() {
		// Initialiser la position de départ
		this.lastScrollPosition = window.scrollY;
		this.hasScrolledSignal.set(window.scrollY > 0);
		
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

		this.hasScrolledSignal.set(currentScroll > 0);
	
		// Toujours visible avant 2000px
		if (currentScroll < 2000) {
		  	this.navbarVisibleSignal.set(true);
		  	this.lastScrollPosition = currentScroll;
		  	return;
		}
	
		// Au-delà de 2000px
		if (scrollDelta > 0) {  // Scroll vers le bas
		  	this.navbarVisibleSignal.set(false);
		} else if (scrollDelta < 0) {  // Scroll vers le haut
		  	this.navbarVisibleSignal.set(true);
		}
		
		this.lastScrollPosition = currentScroll;
	  }
	

	
}
