## La syntaxe `[links]="navLinks"` et le rôle de `@Input()`

**[links]=navLinks**
- Liaison de props Angular
- Les [ ] indiquent que c'est un @Input() 
- Sert à passer des valeurs entre composants (parent vers enfant)

```html
<app-nav-links [links]="navLinks"></app-nav-links>
```

**Signification :**
Passe la variable `navLinks` (définie dans le parent : `layout-main.component.ts`) à la variable `links` à une propriété du composant `app-nav-links`

**@Input() dans le composant enfant :**

Dans `nav-links.component.ts` : déclarer une propriété avec le décorateur `@Input()` pour recevoir cette donnée : 

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
})
export class NavLinksComponent {
  @Input() links: { name: string; path: string }[] = [];
}
```

`@Input()` permet au composant **parent** (layout-main.component.ts) de passer des valeurs à **l'enfant** (nav-links.component.ts)

`links` est maintenant dispo dans `nav-links.component.ts` et peut être utilisé dans le template HTML.

```html
<nav>
  <ul>
    <li *ngFor="let link of links">
      <a [routerLink]="link.path">{{ link.name }}</a>
    </li>
  </ul>
</nav>
```