# Strategia Branching dla SellGenius Website V2

## Główne gałęzie

### `main` (produkcja)
- Zawsze gotowa do deployu na produkcję
- Chroniona przed bezpośrednimi commitami
- Tylko merge przez Pull Request z `develop` lub `hotfix/*`

### `develop` (główna gałąź deweloperska)
- Główna gałąź do pracy deweloperskiej
- Zawiera najnowszy kod z wszystkich funkcjonalności
- Stabilna baza do tworzenia nowych feature branchy

## Gałęzie pomocnicze

### `feature/*` - Nowe funkcjonalności
Nazewnictwo: `feature/nazwa-funkcjonalnosci`

Przykłady:
- `feature/homepage-design`
- `feature/contact-form`
- `feature/product-catalog`
- `feature/user-authentication`
- `feature/dark-mode-toggle`

**Workflow:**
```bash
git checkout develop
git pull origin develop
git checkout -b feature/nazwa-funkcjonalnosci
# ... praca nad funkcjonalnością ...
git checkout develop
git merge feature/nazwa-funkcjonalnosci
git push origin develop
```

### `fix/*` - Poprawki bugów
Nazewnictwo: `fix/krotki-opis-buga`

Przykłady:
- `fix/button-hover-state`
- `fix/mobile-responsive-issue`
- `fix/loading-spinner`
- `fix/form-validation`

**Workflow:**
```bash
git checkout develop
git checkout -b fix/krotki-opis-buga
# ... naprawa błędu ...
git checkout develop
git merge fix/krotki-opis-buga
```

### `release/*` - Przygotowanie do wydania
Nazewnictwo: `release/v1.0.0` lub `release/2024-11-05`

Przykłady:
- `release/v1.0.0`
- `release/v1.1.0`
- `release/2024-11-05`

**Workflow:**
```bash
git checkout develop
git checkout -b release/v1.0.0
# ... przygotowanie release (version bump, changelog, etc.) ...
git checkout main
git merge release/v1.0.0
git tag v1.0.0
git checkout develop
git merge release/v1.0.0
```

### `hotfix/*` - Szybkie poprawki produkcyjne
Nazewnictwo: `hotfix/krotki-opis-problemu`

Przykłady:
- `hotfix/critical-security-patch`
- `hotfix/urgent-typo-fix`
- `hotfix/performance-issue`

**Workflow:**
```bash
git checkout main
git checkout -b hotfix/krotki-opis-problemu
# ... szybka naprawa ...
git checkout main
git merge hotfix/krotki-opis-problemu
git tag v1.0.1
git checkout develop
git merge hotfix/krotki-opis-problemu
```

### `refactor/*` - Refaktoryzacja kodu
Nazewnictwo: `refactor/co-refaktoryzujemy`

Przykłady:
- `refactor/component-structure`
- `refactor/api-integration`
- `refactor/styling-system`

### `docs/*` - Dokumentacja
Nazewnictwo: `docs/co-dokumentujemy`

Przykłady:
- `docs/readme-update`
- `docs/api-documentation`
- `docs/setup-guide`

## Rekomendowane gałęzie do stworzenia

### Podstawowe:
1. ✅ `main` - gałąź produkcyjna
2. ✅ `develop` - gałąź deweloperska

### Opcjonalne (do stworzenia w razie potrzeby):
- `feature/*` - tworzone ad-hoc dla nowych funkcji
- `fix/*` - tworzone ad-hoc dla bugów
- `release/*` - tworzone przed wydaniem
- `hotfix/*` - tworzone w przypadku krytycznych problemów

## Konwencje commitów

Zalecany format commitów:
```
type(scope): krótki opis

- type: feat, fix, docs, style, refactor, test, chore
- scope: opcjonalny, np. component, page, api
```

Przykłady:
- `feat(homepage): add hero section with animations`
- `fix(button): correct hover state styling`
- `docs(readme): update installation instructions`
- `refactor(components): reorganize component structure`

## Workflow Git Flow

```
main          ●───────────────●───────────────●
               \             /                 \
                \           /                   \
develop          ●───●───●──●───●───●───●───●──●
                   / \       / \     / \
feature/          ●   ●     ●   ●   ●   ●
```

## Quick Start

1. Stwórz gałąź `develop`:
```bash
git checkout -b develop
git push -u origin develop
```

2. Zabezpiecz `main` w repozytorium (GitHub/GitLab):
   - Settings → Branches → Add rule
   - Branch: `main`
   - Require pull request reviews
   - Require status checks to pass

3. Rozpocznij pracę nad funkcjonalnością:
```bash
git checkout develop
git pull origin develop
git checkout -b feature/moja-funkcjonalnosc
```
