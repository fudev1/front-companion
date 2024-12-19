import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Character } from '../../models/character.model';
import { mockCharacters } from '../../data/characters.mock';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { Build } from '../../models/build.model';
import { mockBuilds } from '../../data/builds.mock';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-characters-new-world',
	standalone: true,
	imports: [
		ReactiveFormsModule, 
		DialogModule,
		ButtonModule,
		Ripple,
		NgClass
	],
	templateUrl: './characters-new-world.component.html',
	styleUrl: './characters-new-world.component.scss'
})

export class CharactersNewWorldComponent implements OnInit {
	characters: Character[] = [];
	showCreateModal = false;
	characterForm: FormGroup;
	selectedCharacter: Character | null = null;
	characterBuilds: Build[] = [];
	selectedBuild: Build | null = null;

	constructor(private fb: FormBuilder) {
		this.characterForm = this.fb.group({
			name: ['', Validators.required],
			server: ['', Validators.required],
			mainClass: ['', Validators.required],
			mainWeapon: ['', Validators.required],
			secondaryWeapon: ['', Validators.required],
			level: [60, [Validators.required, Validators.min(1), Validators.max(60)]]
		});
	} 

	ngOnInit() {
		// Pour le moment, utiliser les données mockées
		this.characters = [...mockCharacters];
	}

  	openCreateModal() {
    	this.showCreateModal = true;
  	}

	onSubmit() {
		if (this.characterForm.valid) {
			const newCharacter: Character = {
				...this.characterForm.value,
				id: this.characters.length + 1,
				userId: '123456789', // Simulé pour le moment
				companyId: 1, // Simulé pour le moment
				createdAt: new Date(),
				updatedAt: new Date()
			};

			this.characters.push(newCharacter);
			this.showCreateModal = false;
			this.characterForm.reset();
		}
	}

	onSelectCharacter(character: Character) {
		this.selectedCharacter = character;
		this.selectedBuild = null;
		// Filtrer les builds pour ce personnage
		this.characterBuilds = mockBuilds.filter(build => build.characterId === character.id);
	}

	onSelectBuild(build: Build) {
		this.selectedBuild = build;
	}
}
