export interface Character {
    id: number;
    name: string;
    server: string;
    mainClass: string;
    mainWeapon: string;
    secondaryWeapon: string;
    level?: number;
    userId: string; // ID Discord de l'utilisateur
    companyId?: number; // Optionnel car le personnage peut ne pas être dans une compagnie
    createdAt: Date;
    updatedAt: Date;
}