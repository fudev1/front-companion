import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLinks } from '../../config/nav-links.model';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [
    RouterLink,
    RippleModule
  ],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss'
})
export class NavLinksComponent {
  @Input() links: NavLinks[] = []	
}
