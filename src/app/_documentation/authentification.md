# 1. Models
# 2. Services
    - Gére la redirection vers Discord pour l'authentification
    - Récupère et stocke les tokens (localStorage)
    - Émet l'état de connexion via `Signal` pour écouter les changements


### Utilisation du constructeur et `inject()'


```ts
// utilisation constructor pour injecter le service
constructor(private http: HttpClient) {}
```

```ts
// utilisation injection directe via une props
httpClient = inject(HttpClient);
```

=> Le *constructeur* est la méthode la plus traditionnelle mais l'injection directe est plus simple à lire



### Pourquoi window.location.href vs HttpClient.get() ?

`window.location.href` est une méthode de navigation dans le navigateur, elle redirige vers une URL.
    - But : Rediriger l'utilisateur directement vers l'URL d'authentification de Discord.
    - Avantage : Simple et rapide.
    - Inconvénient : Angular ne gère pas cette requête, car c'est une redirection navigateur. Tu sors de ton app Angular.

`HttpClient.get()` est une méthode de communication avec le serveur, elle envoie une requête HTTP et retourne une réponse.
    - But : Faire une requête HTTP sans rediriger, Angular reste maître du processus.
    - Problème ici : L'authentification Discord via OAuth nécessite une redirection utilisateur pour autoriser ton app. Donc HttpClient.get() ne remplace pas window.location.href ici.

    
# 3. Components
    - Injecter le service AuthService
    - Utiliser le signal 
# 4. Routing


