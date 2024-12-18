import { Character } from '../models/character.model';

export const mockCharacters: Character[] = [
    {
        id: 1,
        name: 'dev1luna',
        server: 'Asgard',
        mainClass: 'DPS',
        mainWeapon: 'Sword & Shield',
        secondaryWeapon: 'Hatchet',
        level: 60,
        userId: '123456789',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        name: 'Migi',
        server: 'Asgard',
        mainClass: 'Healer',
        mainWeapon: 'Life Staff',
        secondaryWeapon: 'Rapier',
        level: 60,
        userId: '987654321',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    }
];
