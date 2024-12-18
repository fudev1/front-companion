import { Character } from '../models/character.model';

export const mockCharacters: Character[] = [
    {
        id: 1,
        name: 'Aragorn',
        server: 'Asgard',
        mainClass: 'DPS',
        mainWeapon: 'Sword',
        secondaryWeapon: 'Shield',
        level: 60,
        userId: '123456789',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        name: 'Legolas',
        server: 'Asgard',
        mainClass: 'DPS',
        mainWeapon: 'Bow',
        secondaryWeapon: 'Spear',
        level: 60,
        userId: '987654321',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    }
];
