**Le fichier index.ts permet de centraliser les exports d'un dossier.**
➡️ Simplifie les imports dans les autres fichiers.


**EXEMPLE SANS :**

```ts
import { NavbarComponent } from './core/navigation/navbar.component';
import { NavigationService } from './core/navigation/navigation.service';
import { NAVIGATION_LINKS } from './core/navigation/navigation-links';
import { NavigationLink } from './core/navigation/navigation-link.model'
```

**EXEMPLE AVEC :**
```ts
export * from './components/navbar.component';
export * from './services/navigation.service';
export * from './config/navigation-links';
export * from './models/navigation-link.model';

import { NavbarComponent, NavigationService, NAVIGATION_LINKS, NavigationLink } from './core/navigation';
```


├── app/
│   ├── core/ 
│   │   ├── navigation/ 
│   │   │   ├──  components/
│   │   │   │      ├── login-button/ # pour le bouton login
│   │   │   │      ├── logo/    # pour le logo
│   │   │   │      ├── navbar/  # contient la structure de la navbar
│   │   │   │      └── nav-links/ # contient la partie lien
│   │   │   ├──  config/
│   │   │   │      ├── nav-links.models.ts/ # c'est là où je type les liens
│   │   │   │      └── nav-links.ts/ # c'est là où je déclare les liens dans une constante
│   │   ├── index.ts/ # pour les export
│   │   ├── services/ 
│   ├── p-main/ # le dossier principal pour la partie principale
│   │   ├── pages/
│   │   │   ├── about/
│   │   │   ├── updates/
│   │   │   ├── home/
│   │   ├── layout-main.component.html/ # c'est le point d'entrée pour la structure principale
│   │   ├── layout-main.component.scss/
│   │   ├── layout-main.component.ts/
│   ├── p-new-world/ # le dossier pour la partie new world
│   │   ├── pages/
│   │   │   ├── home-new-world/ # home /new-world
│   │   │   ├── companies-new-world/ # /new-world/companies
│   │   │   ├── wars-new-world/
│   │   │   ├── servers-new-world/
│   │   │   ├── forum-new-world/
│   │   ├── data/ # pour les mocks de donnée en attendant d'avoir une db
│   │   ├── models/ # pour les models
│   │   ├── services/
│   │   ├── layout-new-world.component.html/ # c'est le point d'entrée pour la structure new world
│   │   ├── layout-new-world.component.scss/
│   │   ├── layout-new-world.component.ts/