import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Character } from '../../../models/character.model';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {
  characters: Character[] = []; // TODO: Remplacer par un service

  constructor() {
    // Mock data
    this.characters = [
      {
        id: 1,
        name: 'Aragorn',
        server: 'Abaton',
        mainClass: 'DPS',
        mainWeapon: 'Sword',
        secondaryWeapon: 'Bow',
        level: 60,
        userId: '123456789',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  }
}
