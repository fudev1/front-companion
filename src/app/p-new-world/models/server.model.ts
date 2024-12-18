export enum Region {
    EU_CENTRAL = 'eu-central',
    US_EAST = 'us-east',
    US_WEST = 'us-west',
    SA_EAST = 'sa-east',
    AP_SOUTHEAST = 'ap-southeast'
}

export interface Server {
    id: number;
    name: string;
    region: Region;
    population?: number;
    status: 'online' | 'offline' | 'maintenance';
    isActive: boolean;
}
