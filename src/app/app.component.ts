import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/navigation/components/navbar/navbar.component";
import { LoginButtonComponent } from './core/navigation/components/login-button/login-button.component';
import { LogoComponent } from "./core/navigation/components/logo/logo.component";
import { NavLinksComponent } from "./core/navigation/components/nav-links/nav-links.component";
import { PrimeNGConfig } from 'primeng/api';
import { ScrollService } from './core/services/scroll.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    LoginButtonComponent,
    LogoComponent,
    NavLinksComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-companion';

  constructor(
    private primengConfig: PrimeNGConfig,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
      this.primengConfig.ripple = true;

      
  }

}
