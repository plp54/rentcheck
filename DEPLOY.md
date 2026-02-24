# Guide de déploiement Cloudflare Pages

## Déploiement automatique (GitHub Actions)

Le projet est configuré pour se déployer automatiquement sur Cloudflare Pages à chaque push sur la branche `main`.

### Configuration des secrets GitHub

Dans votre repo GitHub, allez dans **Settings > Secrets and variables > Actions** et ajoutez :

| Secret | Description | Où le trouver |
|--------|-------------|---------------|
| `CLOUDFLARE_API_TOKEN` | Token API Cloudflare | Cloudflare Dashboard > My Profile > API Tokens |
| `CLOUDFLARE_ACCOUNT_ID` | ID du compte Cloudflare | Cloudflare Dashboard (dans l'URL) |
| `STRIPE_SECRET_KEY` | Clé secrète Stripe | Stripe Dashboard > Developers > API Keys |

### Variables d'environnement

Dans **Settings > Secrets and variables > Actions > Variables** :

| Variable | Valeur exemple |
|----------|----------------|
| `NEXT_PUBLIC_URL` | `https://rentcheck.pages.dev` |

## Déploiement manuel

### Prérequis

```bash
npm install -g wrangler
```

### Configuration

1. Connectez-vous à Cloudflare :
```bash
wrangler login
```

2. Configurez vos secrets :
```bash
wrangler secret put STRIPE_SECRET_KEY
```

### Déploiement

```bash
# Build
npm run build

# Deploy
wrangler pages deploy dist --project-name=rentcheck
```

## Configuration Cloudflare Pages

### Dans l'interface Cloudflare :

1. Allez sur **Cloudflare Dashboard > Pages**
2. Créez un nouveau projet
3. Connectez votre repo GitHub
4. Configuration du build :
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

### Variables d'environnement (Cloudflare)

Dans **Settings > Environment variables** :

- `NODE_VERSION`: `20`
- `STRIPE_SECRET_KEY`: votre clé
- `NEXT_PUBLIC_URL`: votre URL

## Configuration Stripe

### Webhook (optionnel)

Si vous voulez recevoir des notifications de paiement :

1. Dans Stripe Dashboard > Developers > Webhooks
2. Ajoutez un endpoint : `https://votre-site.pages.dev/api/webhook`
3. Sélectionnez les événements : `checkout.session.completed`

### Products et Prices

Le prix du rapport est configuré directement dans le code (0,50€ = 50 cents).

## Vérification du déploiement

1. Allez sur votre URL Cloudflare Pages
2. Testez le calculateur sur `/bruxelles`
3. Vérifiez le paiement Stripe (mode test d'abord !)
4. Vérifiez la génération du PDF sur `/merci`

## Dépannage

### Problèmes courants

**Build échoue**
- Vérifiez que `NODE_VERSION` est défini à 20
- Vérifiez les logs de build dans GitHub Actions

**API ne fonctionne pas**
- Vérifiez que `STRIPE_SECRET_KEY` est bien configuré
- Vérifiez les logs dans Cloudflare Dashboard > Pages > Functions

**PDF ne se génère pas**
- Vérifiez que le webhook Stripe fonctionne
- Vérifiez les logs Functions

## Support

En cas de problème :
- GitHub Issues: https://github.com/plp54/rentcheck/issues
- Email: contact@loyerlegal.be
