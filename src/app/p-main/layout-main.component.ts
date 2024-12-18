import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../core/navigation/components/navbar/navbar.component';
import { NAV_LINKS_MAIN } from '../core/navigation/config/nav-links';
import { FooterComponent } from '../core/footer/components/footer/footer.component';

@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent {
  navigationMain = NAV_LINKS_MAIN;
}
