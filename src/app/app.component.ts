import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/navigation/components/navbar/navbar.component";
import { LoginButtonComponent } from './core/navigation/components/login-button/login-button.component';
import { LogoComponent } from "./core/navigation/components/logo/logo.component";
import { NavLinksComponent } from "./core/navigation/components/nav-links/nav-links.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    NavbarComponent,
    LoginButtonComponent,
    LogoComponent,
    NavLinksComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-companion';
}
