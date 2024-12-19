export interface Build {
    id: number;
    name: string;
    type: 'PvP' | 'PvE';
    role: 'DPS' | 'Tank' | 'Healer';
    isWarReady?: boolean;
    mainWeapon: string;
    secondaryWeapon: string;
    attributes: {
        strength: number;
        dexterity: number;
        intelligence: number;
        focus: number;
        constitution: number;
    };
    gear: {
        head?: string;
        chest?: string;
        hands?: string;
        legs?: string;
        feet?: string;
    };
    characterId: number;
    createdAt: Date;
    updatedAt: Date;
}
