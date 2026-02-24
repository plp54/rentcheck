# Configuration du Domaine Personnalisé

## Domaine : loyerlegal.be

### Étape 1 : Ajouter le domaine dans Cloudflare Pages

1. Allez sur [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Cliquez sur **Pages** dans le menu de gauche
3. Sélectionnez le projet **rentcheck**
4. Allez dans l'onglet **Custom domains**
5. Cliquez sur **Set up a custom domain**
6. Entrez : `loyerlegal.be`
7. Cliquez sur **Continue**

### Étape 2 : Configuration DNS

Cloudflare va automatiquement configurer les DNS si le domaine est déjà géré par Cloudflare.

Si ce n'est pas le cas, ajoutez ces enregistrements DNS :

**Type A :**
```
Nom : @
Valeur : 192.0.2.1 (ou l'IP fournie par Cloudflare)
Proxy : Oui (orange)
```

**Type CNAME (alternative) :**
```
Nom : www
Valeur : rentcheck.pages.dev
Proxy : Oui (orange)
```

### Étape 3 : Variables d'environnement

Dans Cloudflare Dashboard > Pages > rentcheck > Settings > Environment variables :

Ajoutez/modifiez :
```
NEXT_PUBLIC_URL = https://loyerlegal.be
```

### Étape 4 : Redéploiement

Après avoir configuré le domaine, redeployez :

```bash
wrangler pages deploy dist --project-name=rentcheck
```

### Étape 5 : Vérification

Attendez quelques minutes que le SSL se configure, puis testez :
- https://loyerlegal.be
- https://www.loyerlegal.be (si configuré)

### Certificat SSL

Cloudflare génère automatiquement un certificat SSL pour votre domaine. Cela peut prendre quelques minutes.

### Dépannage

**Erreur "Invalid custom domain"**
- Vérifiez que le domaine est bien enregistré dans Cloudflare
- Vérifiez les enregistrements DNS

**Site ne charge pas**
- Vérifiez que les DNS sont propagés : `dig loyerlegal.be`
- Vérifiez le statut dans Cloudflare Dashboard

**Erreur SSL**
- Attendez 24h pour la propagation complète
- Vérifiez le statut du certificat dans SSL/TLS > Edge Certificates

## Contact Support

Si problème persiste : support@cloudflare.com
