import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { TenantNavComponent } from '../navigation/tenant-nav/tenant-nav.component';
import { Company } from '../../models/company.model';
import { mockCompanies } from '../../data/companies.mock';
import { NavLinks } from '../../../core/navigation/config/nav-links.model';
import { COMPANY_LINKS_NEW_WORLD, USER_LINKS_NEW_WORLD } from '../../../core/navigation/config/nav-links';

@Component({
  selector: 'app-tenant-layout',
  standalone: true,
  imports: [RouterOutlet, TenantNavComponent],
  templateUrl: './tenant-layout.component.html',
  styleUrls: ['./tenant-layout.component.scss']
})
export class TenantLayoutComponent implements OnInit {
  company?: Company;
  navLinks: NavLinks[] = [];
  userLinks = USER_LINKS_NEW_WORLD;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.company = mockCompanies.find(c => c.id === companyId);
    
    if (this.company) {
      this.navLinks = COMPANY_LINKS_NEW_WORLD(this.company.id);
    }
  }
}