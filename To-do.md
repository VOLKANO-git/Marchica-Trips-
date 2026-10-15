## Compte rendu de Youssef : Sprint 1, Brief 2 (Marchica Trips)

**Date :** 15/10/2026
**Stories :** BRIEF-11 (FAQ) et BRIEF-12 (Menu mobile)

## 1. Maquettes Figma (terminé)
- Maquette haute fidélité de la page **FAQ** : bannière avec titre, 6 questions dépliables (icône +), footer.
- Maquette du **menu mobile** (375 px) en deux états : menu fermé (logo + icône ☰) et menu ouvert (icône ✕, liens Accueil, Activités, FAQ, Réserver).

## 2. Code (terminé)

### Page FAQ (`faq.html`, branche BRIEF-11)
- Bannière avec image de la lagune, titre et texte d'introduction.
- 6 questions/réponses avec les balises `<details>` / `<summary>`, sans JavaScript.
- Icône + qui devient - à l'ouverture (variante `group-open:` de Tailwind).
- Mise en page avec Flexbox : question à gauche, icône à droite.
- Focus visible au clavier (`focus-visible`) et `aria-hidden` sur les icônes décoratives.
- Style réalisé uniquement avec Tailwind CSS v4.

### Menu mobile (`menu-mobile.html`, branche BRIEF-12)
- Menu réalisé sans JavaScript avec `<details>` / `<summary>`.
- Affiché uniquement sur mobile (`md:hidden`), approche mobile-first.
- Icônes ☰ / ✕ avec `aria-label` sur le bouton sans texte.
- Liste de liens en colonne, pleine largeur sous le header, avec une flèche > à droite.
- Lien « Réserver » mis en avant (vert, plus grand).
- Balise `<nav>` avec `aria-label`.

## 3. Organisation et Git
- Projet cloné en local, travail sur les branches BRIEF-11 et BRIEF-12.
- Tailwind CSS v4 lancé avec le CLI (`--watch`).

## 4. Points à signaler à l'équipe
- `src/input.css` ne contient pas encore de `@theme` : les couleurs (gris, vert `#194D45`) sont provisoires et devront être remplacées par les variables du Design System.
- Le header de l'équipe contient des couleurs en dur et une faute (« Acceuil »), et manque de `aria-current` et de lien d'évitement.
- Pas de branche `develop` : à confirmer avec le scrum master (PR vers `main` ou `team-merge` ?).
- Tests restants : navigation clavier, axe DevTools, Lighthouse, affichage à 375 / 768 / 1280 px.

## 5. Reste à faire
- Faire les Pull Requests (BRIEF-11 et BRIEF-12) et demander une relecture.
- Remplacer les couleurs provisoires par le thème.
- Mettre à jour le board Jira.