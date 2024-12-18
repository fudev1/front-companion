import { Server, Region } from '../models/server.model';

export const mockServers: Server[] = [
    {
        id: 1,
        name: 'Asgard',
        region: Region.EU_CENTRAL,
        population: 2000,
        status: 'online',
        isActive: true
    },
    {
        id: 2,
        name: 'Valhalla',
        region: Region.US_EAST,
        population: 1800,
        status: 'online',
        isActive: true
    },
    {
        id: 3,
        name: 'Midgard',
        region: Region.EU_CENTRAL,
        population: 1500,
        status: 'online',
        isActive: true
    }
];
