import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLinks } from '../../config/nav-links.model';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss'
})
export class NavLinksComponent {
  @Input() links: NavLinks[] = []	
}
