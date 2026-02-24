# RentCheck.be

Application Next.js pour vérifier si un loyer est illégal selon le Code du Logement belge.

## Fonctionnalités

- ✅ Calcul du loyer maximum légal selon la ville
- ✅ Coefficients PEB (Performance Énergétique des Bâtiments)
- ✅ Coefficient ancienneté
- ✅ Paiement Stripe (0,50€ pour le rapport PDF)
- ✅ Génération de PDF avec lettre de mise en demeure
- ✅ Multi-villes (Bruxelles, Anvers, Liège)

## Régions supportées

| Ville | Prix de référence | Législation |
|-------|------------------|-------------|
| Bruxelles | 15,80€/m² | Arrêté royal du 22 décembre 2023 |
| Anvers | 13,50€/m² | Code flamand du logement |
| Liège | 12,50€/m² | Code wallon du logement |

## Stack technique

- **Framework**: Next.js 15 avec App Router
- **Styling**: Tailwind CSS + shadcn/ui
- **Paiement**: Stripe Checkout
- **PDF**: HTML-to-PDF (côté serveur)
- **Déploiement**: Cloudflare Pages

## Installation

```bash
# Cloner le repo
git clone https://github.com/votre-username/rentcheck.git
cd rentcheck

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos clés Stripe

# Lancer en dev
npm run dev
```

## Déploiement

### Cloudflare Pages

```bash
# Build
npm run build

# Déployer (via wrangler ou interface web)
npx wrangler pages deploy dist
```

### Vercel

```bash
npx vercel --prod
```

## Structure du projet

```
app/
├── page.tsx              # Landing page
├── [city]/page.tsx       # Page formulaire par ville
├── merci/page.tsx        # Page confirmation paiement
└── api/
    ├── create-checkout-session/  # API Stripe
    └── generate-pdf/             # API génération PDF

components/
├── Navbar.tsx
├── Hero.tsx
├── HowItWorks.tsx
├── LegalInfo.tsx
├── Testimonials.tsx
├── CTA.tsx
├── Footer.tsx
└── RentCalculator.tsx    # Formulaire principal

lib/
├── data.ts               # Données villes/coefficients
└── utils.ts
```

## Calcul du loyer

La formule utilisée est :

```
Loyer max = Surface × Prix de référence × Coefficient PEB × Coefficient ancienneté
```

### Coefficients PEB

| Label | Coefficient |
|-------|-------------|
| A+ | 1.15 |
| A | 1.10 |
| B | 1.05 |
| C | 0.95 |
| D | 0.90 |
| E | 0.85 |
| F | 0.80 |

### Coefficients ancienneté

| Âge | Coefficient |
|-----|-------------|
| < 5 ans | 1.00 |
| 5-10 ans | 0.95 |
| 10-15 ans | 0.92 |
| 15-20 ans | 0.90 |
| 20-25 ans | 0.88 |
| > 25 ans | 0.85 |

## Licence

MIT
