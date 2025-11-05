# SellGenius Website V2

Projekt oparty na nowoczesnych technologiach:

- **Next.js 14** - Framework React z App Router
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Komponenty UI zbudowane na Radix UI
- **Radix UI** - Niskopoziomowe, dostępne komponenty UI
- **Framer Motion** - Biblioteka animacji
- **Lucide Icons** - Nowoczesne ikony

## Rozpoczęcie

Zainstaluj zależności:

```bash
npm install
```

Uruchom serwer deweloperski:

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Struktura projektu

```
├── src/
│   ├── app/          # App Router (Next.js 14)
│   ├── components/   # Komponenty React
│   ├── lib/          # Utilities i helpers
│   └── hooks/        # Custom hooks
├── components.json   # Konfiguracja shadcn/ui
└── tailwind.config.ts # Konfiguracja Tailwind
```

## Dodawanie komponentów shadcn/ui

```bash
npx shadcn-ui@latest add [component-name]
```

## Build

```bash
npm run build
```
