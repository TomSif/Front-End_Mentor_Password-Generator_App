## Session 2026-02-25 — Setup environnement

### ✅ Étapes accomplies
- Scaffolding Vite + React (JavaScript) dans `Password-generator/`
- Installation et configuration Tailwind v4 (`@tailwindcss/vite` + `@import "tailwindcss"`)
- Vérification Tailwind fonctionnel (classes couleur + font testées)
- Git init + 2 commits (`init:` et `chore:`)
- Copie assets depuis `starter-code/` : fonts woff2 → `public/fonts/`, SVG/favicon → `public/images/`
- Déclaration `@font-face` JetBrains Mono Bold 800
- Design tokens Figma → `@theme` Tailwind v4 (13 couleurs + `--font-mono`)
- Styles de base `body` via `var(--color-*)` et `var(--font-mono)`
- `App.jsx` nettoyé avec `<main>` sémantique
- ESLint configuré : ajout règle `no-console: warn`

### 🧠 Notions de code vues
| Notion | Statut | Commentaire |
|--------|--------|-------------|
| Tailwind v4 : plugin Vite + `@import "tailwindcss"` | Révisée | Différent de v3, assimilé correctement |
| Tailwind v4 : `@theme` pour design tokens | Nouvelle | Spontanément anticipé, bonne intuition |
| Convention `--color-*` dans `@theme` (singulier) | Nouvelle | Gap détecté — voir section faussement acquises |
| `@font-face` avec woff2 | Révisée | Structure correcte, extension `.woff2` oubliée dans src |
| Fragment React vs élément sémantique | Révisée | Compris rapidement, raisonnement juste |
| Conventional Commits (`feat/fix/chore`) | Nouvelle | Assimilé en une explication |
| ESLint flat config | Révisée | Lu et modifié sans difficulté |

### ⚠️ Notions faussement acquises détectées
- **Convention `--color-*` Tailwind v4** : après explication explicite du préfixe singulier, l'utilisateur a retapé `--colors-*` (pluriel, copie du Figma). La règle n'était pas encore intégrée au moment d'écrire — corrigée sur deuxième indication.

### 🔄 Étapes restantes
- Structurer les composants React (`App.jsx`, composants enfants)
- Implémenter la logique de génération de mot de passe
- Implémenter le slider (longueur) et les checkboxes (options)
- Copier dans le presse-papiers (`navigator.clipboard`)
- Indicateur de force du mot de passe
- Responsive layout + états hover/focus

### 📈 Évaluation de session
- **Points solides :** vite.config.js modifié correctement sans aide, @font-face structure juste du premier coup, @theme anticipé spontanément, raisonnement fragment/sémantique rapide
- **Points fragiles :** nommage des variables CSS dans @theme (convention Tailwind vs convention Figma), attention aux détails dans les URL (extension manquante)
- **Priorité pour la prochaine session :** commencer la structure des composants — identifier les composants de l'UI à partir de la maquette avant d'écrire du code

### 💬 Notes de contexte
- Stack finale : React 19 + Vite + Tailwind v4 + ESLint (sans TypeScript — décision délibérée pour ancrer les bases)
- Projet Vite dans `Password-generator/` (sous-dossier de `password-generator-app/`)
- Font : JetBrains Mono Bold 800 woff2 uniquement (seul poids utilisé dans le design)
- `body` fond : `--color-grey-950` (#08070b)

---

## Project Kickoff — 2026-02-25 — Password Generator App

### Challenge
Frontend Mentor — Password Generator App (premium)
Stack : React 19 + Vite + Tailwind CSS v4 + ESLint (pas de TypeScript — ancrage React/Tailwind prioritaire)

### User stories (source : README.md)
- Générer un mot de passe selon les options cochées (uppercase, lowercase, numbers, symbols)
- Copier le mot de passe dans le presse-papiers
- Afficher un indicateur de force du mot de passe
- Layout responsive (mobile / desktop)
- États hover et focus sur tous les éléments interactifs

### Concepts clés identifiés pour ce projet

| Concept | Auto-évaluation initiale |
|---------|--------------------------|
| Architecture de composants React (composition, props) | — |
| `useState` — gestion d'état multiple (checkboxes, slider) | — |
| Génération de mot de passe (logique pure TS) | — |
| Clipboard API (`navigator.clipboard`) | — |
| Tailwind v4 — classes utilitaires, responsive | — |
| Stylisation custom d'un `<input type="range">` | — |
| Stylisation custom de checkboxes | — |
| Classes conditionnelles avec `cn()` / `clsx` | — |
| Accessibilité — sémantique HTML, états focus | — |

> Auto-évaluation à compléter en session : **confident / rusty / don't remember**

### Décision de session 1
Mise en place de l'environnement : outillage, dépendances, git, CSS custom, ressources.
Aucune logique métier prévue pour cette session.