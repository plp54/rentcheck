#!/bin/bash

# Script de déploiement manuel sur Cloudflare Pages

echo "🚀 Déploiement de RentCheck sur Cloudflare Pages"
echo ""

# Vérifier les variables d'environnement
if [ -z "$STRIPE_SECRET_KEY" ]; then
  echo "❌ STRIPE_SECRET_KEY n'est pas défini"
  exit 1
fi

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "❌ CLOUDFLARE_API_TOKEN n'est pas défini"
  exit 1
fi

# Build
echo "📦 Build en cours..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build échoué"
  exit 1
fi

# Déployer
echo ""
echo "🚀 Déploiement sur Cloudflare Pages..."
npx wrangler pages deploy dist --project-name=rentcheck

echo ""
echo "✅ Déploiement terminé !"
echo "🌐 URL: https://rentcheck.pages.dev"
