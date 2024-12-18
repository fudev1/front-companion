import { Company, Faction } from '../models/company.model';
import { mockCharacters } from './characters.mock';

export const mockCompanies: Company[] = [
    {
        id: 1,
        name: 'Mascarade',
        faction: Faction.MARAUDERS,
        server: 'Asgard',
        description: 'One company to rule them all',
        members: mockCharacters,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        subdomain: 'mascarade',
        isActive: true
    },
    {
        id: 2,
        name: 'Black Town',
        faction: Faction.SYNDICATE,
        server: 'Asgard',
        description: 'Protecting the realms since 2021',
        members: [],
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        subdomain: 'black-town',
        isActive: true
    },
    {
        id: 3,
        name: 'Zoo Magique',
        faction: Faction.COVENANT,
        server: 'Valhalla',
        description: 'For the glory of the Spark!',
        members: [],
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        subdomain: 'zoo-magique',
        isActive: true
    }
];
