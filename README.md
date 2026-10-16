# Marchica Trips

Site vitrine pour **Marchica Trips**, une agence d'activités touristiques autour de la lagune de Marchica (Nador, Maroc) : kayak, balades en bateau, randonnée au Gourougou et découverte culinaire.

## Pages

- `index.html` — Accueil
- `activity.html` — Activités
- `faq.html` — Questions fréquentes
- `reservation.html` — Réservation


## Démarrer en local

Aucune installation n'est nécessaire pour simplement consulter le site : ouvrez `index.html` dans un navigateur.

Pour modifier le style (classes Tailwind) :

```bash
npm install @tailwindcss/cli
npx @tailwindcss/cli -i src/input.css -o src/output.css --watch
```

Puis éditez les fichiers `.html` et/ou `src/input.css` — le CSS se recompile automatiquement.

## Structure

```
Marchica-Trips-/
├── index.html
|
├── faq.html
├── reservation.html
|
├── images/                     # photos et logos
├── src/
│   ├── input.css               # thème Tailwind
│   └── output.css              # CSS compilé

```

## Couleurs principales 

| Rôle       | Valeur     |
|------------|------------|
| Primary    | `#194D45` / `#0F3D3E` |
| Accent     | `#E9C46A` |
| Secondary  | `#2A9D8F` |
| Background | `#F8FAFC` |



## Team project

-Mohamed
-Amina
-youssef
-Anass