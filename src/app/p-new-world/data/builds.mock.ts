import { Build } from '../models/build.model';

export const mockBuilds: Build[] = [
    {
        id: 1,
        name: 'Tank War Build',
        type: 'PvP',
        role: 'Tank',
        isWarReady: true,
        mainWeapon: 'Sword & Shield',
        secondaryWeapon: 'Hatchet',
        attributes: {
            strength: 5,
            dexterity: 5,
            intelligence: 5,
            focus: 5,
            constitution: 290
        },
        gear: {
            head: 'Heavy Plate Helm',
            chest: 'Heavy Plate Chest'
        },
        characterId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        name: 'Tank PvE Build',
        type: 'PvE',
        role: 'Tank',
        mainWeapon: 'Sword & Shield',
        secondaryWeapon: 'Great Axe',
        attributes: {
            strength: 50,
            dexterity: 5,
            intelligence: 5,
            focus: 5,
            constitution: 250
        },
        gear: {
            head: 'Heavy Plate Helm',
            chest: 'Heavy Plate Chest'
        },
        characterId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 3,
        name: 'Healer War Build',
        type: 'PvP',
        role: 'Healer',
        isWarReady: true,
        mainWeapon: 'Life Staff',
        secondaryWeapon: 'Rapier',
        attributes: {
            strength: 5,
            dexterity: 5,
            intelligence: 5,
            focus: 300,
            constitution: 200
        },
        gear: {
            head: 'Medium Helm',
            chest: 'Medium Chest'
        },
        characterId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    }
];
