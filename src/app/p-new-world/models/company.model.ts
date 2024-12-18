import { Character } from "./character.model";

export enum Faction {
    MARAUDERS = 'marauders',
    SYNDICATE = 'syndicate',
    COVENANT = 'covenant'
}

export interface Company {
    id: number;
    name: string;
    faction: Faction;
    server: string;
    description?: string;
    members: Character[];
    ownerId: number; // ID du personnage propriétaire
    createdAt: Date;
    updatedAt: Date;
    
    // Pour le tenant system
    subdomain?: string; // ex: "zoomagique"
    isActive: boolean;
}