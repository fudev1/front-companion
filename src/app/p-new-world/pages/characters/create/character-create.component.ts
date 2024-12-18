import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Character } from '../../../models/character.model';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-character-create',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './character-create.component.html'
})
export class CharacterCreateComponent {
  characterForm: FormGroup;

  // Mock data - À remplacer par des appels API
  readonly servers = ['Abaton', 'Aaru', 'Barri', 'Delos', 'Dry Tree'];
  readonly roles = ['DPS', 'Tank', 'Healer'];
  readonly weapons = ['Sword', 'Great Axe', 'War Hammer', 'Spear', 'Bow', 'Musket', 'Fire Staff', 'Life Staff', 'Ice Gauntlet', 'Void Gauntlet'];

  private readonly authService = inject(AuthService);

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.characterForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      server: ['', Validators.required],
      mainClass: ['', Validators.required],
      mainWeapon: ['', Validators.required],
      secondaryWeapon: ['', Validators.required],
      level: [1, [Validators.required, Validators.min(1), Validators.max(60)]]
    });
  }

  onSubmit() {
    if (this.characterForm.valid) {
      const character: Partial<Character> = {
        ...this.characterForm.value,
        userId: this.authService.user()?.id, // Récupérer l'ID de l'utilisateur connecté
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // TODO: Appeler le service pour créer le personnage
      console.log('Creating character:', character);
      
      // Rediriger vers la liste des personnages
      this.router.navigate(['/new-world/characters']);
    }
  }
}
