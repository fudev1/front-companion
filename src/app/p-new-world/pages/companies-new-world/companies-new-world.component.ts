import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Company, Faction } from '../../models/company.model';
import { mockCompanies } from '../../data/companies.mock';

@Component({
  selector: 'app-companies-new-world',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './companies-new-world.component.html',
  styleUrl: './companies-new-world.component.scss'
})
export class CompaniesNewWorldComponent {
  allCompanies = mockCompanies;
  companies = mockCompanies;
  searchTerm = '';
  selectedFaction: Faction | 'all' = 'all';
  selectedServer: string | 'all' = 'all';

  readonly factions = Object.values(Faction);
  readonly servers = [...new Set(mockCompanies.map(c => c.server))];

  getFactionColor(faction: Faction): string {
    switch (faction) {
      case Faction.MARAUDERS:
        return 'bg-green-600';
      case Faction.SYNDICATE:
        return 'bg-purple-600';
      case Faction.COVENANT:
        return 'bg-yellow-500';
      default:
        return 'bg-gray-600';
    }
  }

  getFactionTextColor(faction: Faction): string {
    switch (faction) {
      case Faction.MARAUDERS:
        return 'text-green-600';
      case Faction.SYNDICATE:
        return 'text-purple-600';
      case Faction.COVENANT:
        return 'text-yellow-500';
      default:
        return 'text-gray-600';
    }
  }

  applyFilters(): void {
    let filtered = this.allCompanies;

    // Appliquer le filtre de recherche
    if (this.searchTerm) {
      const search = this.searchTerm.toLowerCase();
      filtered = filtered.filter(company => 
        company.name.toLowerCase().includes(search) ||
        (company.description?.toLowerCase() || '').includes(search)
      );
    }

    // Appliquer le filtre de faction
    if (this.selectedFaction !== 'all') {
      filtered = filtered.filter(company => company.faction === this.selectedFaction);
    }

    // Appliquer le filtre de serveur
    if (this.selectedServer !== 'all') {
      filtered = filtered.filter(company => company.server === this.selectedServer);
    }

    this.companies = filtered;
  }
}
