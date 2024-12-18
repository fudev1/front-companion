export interface Character {
    id?: number;       
    name: string;
    server: string;
    mainClass: string;    
    mainWeapon: string;    
    secondaryWeapon: string;
    level?: number;
    userId: string;         
    companyId?: number;
    gearscore?: number;
    createdAt?: Date;
    updatedAt?: Date;
}