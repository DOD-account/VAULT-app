# 🚀 Guide Déploiement GitHub → Netlify - VAULT

Ce guide vous accompagne pas à pas pour déployer VAULT sur Netlify via GitHub.

## ✅ Prérequis

- ✅ Compte GitHub créé
- ✅ Code VAULT uploadé sur GitHub
- ✅ Compte Netlify (gratuit) : https://app.netlify.com/signup

---

## 📦 ÉTAPE 1 : Uploader le code sur GitHub

### Option A : Via GitHub Desktop (Recommandé)

1. **Télécharger GitHub Desktop**
   - https://desktop.github.com/
   - Installer et se connecter

2. **Créer un nouveau repository**
   - File → New Repository
   - Name : `vault-saas`
   - Description : `Plateforme SaaS Expert Retraite`
   - Local path : Sélectionner le dossier contenant les fichiers
   - Create Repository

3. **Publier sur GitHub**
   - Cliquer sur "Publish repository"
   - Décocher "Keep this code private" si vous voulez un repo public
   - Publish repository

✅ **Votre code est maintenant sur GitHub !**

### Option B : Via ligne de commande

```bash
# Dans le dossier contenant les fichiers
cd /chemin/vers/vault-saas

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - VAULT v1.0"

# Créer le repository sur GitHub.com d'abord, puis :
git remote add origin https://github.com/VOTRE-USERNAME/vault-saas.git
git branch -M main
git push -u origin main
```

---

## 🌐 ÉTAPE 2 : Connecter GitHub à Netlify

### 1. Se connecter à Netlify

- Aller sur https://app.netlify.com
- Cliquer sur "Sign up" si nouveau compte
- Choisir "Sign up with GitHub" (recommandé)
- Autoriser Netlify à accéder à vos repositories

### 2. Importer le projet

1. **Cliquer sur "Add new site"**
   - Sélectionner "Import an existing project"

2. **Choisir GitHub**
   - Cliquer sur "Deploy with GitHub"
   - Autoriser l'accès si demandé

3. **Sélectionner le repository**
   - Chercher et sélectionner `vault-saas`
   - Cliquer sur le repository

### 3. Configuration du build

Netlify détecte automatiquement Vite ! Les paramètres devraient être :

```
Build command:       npm run build
Publish directory:   dist
```

**Si Netlify ne les détecte pas automatiquement, entrez-les manuellement.**

### 4. Variables d'environnement (Optionnel)

Si vous avez des variables d'environnement :
- Cliquer sur "Show advanced"
- Cliquer sur "New variable"
- Ajouter vos variables (ex: `VITE_API_URL`)

### 5. Déployer !

- Cliquer sur "Deploy site"
- Attendre 1-2 minutes ⏳
- ✅ Votre site est en ligne !

---

## 🎯 ÉTAPE 3 : Configurer votre site

### 1. Nom de domaine personnalisé

**Changer le nom par défaut** (random-name-123.netlify.app) :
1. Site settings → Domain management
2. Cliquer sur "Options" → "Edit site name"
3. Entrer : `vault-retraite` (ou votre choix)
4. Save
5. **Nouveau URL** : `vault-retraite.netlify.app`

**Ajouter votre propre domaine** (si vous en avez un) :
1. Domain management → "Add custom domain"
2. Entrer votre domaine (ex: `vault-app.com`)
3. Suivre les instructions pour configurer le DNS

### 2. HTTPS (SSL)

- ✅ **Automatique et gratuit** avec Netlify !
- Activé par défaut avec Let's Encrypt
- Votre site sera accessible en `https://`

### 3. Notifications de déploiement

1. Site settings → Build & deploy → Deploy notifications
2. Ajouter une notification (Email, Slack, Discord, etc.)
3. Être notifié à chaque déploiement

---

## 🔄 ÉTAPE 4 : Déploiements automatiques

### Comment ça marche ?

**Netlify surveille votre repository GitHub** :
- ✅ Chaque `git push` sur la branche `main` → déploiement automatique
- ✅ Build et déploiement en 1-2 minutes
- ✅ Rollback possible en 1 clic

### Workflow typique

```bash
# Faire des modifications localement
# Exemple : modifier src/VaultApp.jsx

# Committer les changements
git add .
git commit -m "feat: Ajouter nouvelle fonctionnalité"

# Pousser vers GitHub
git push

# 🎉 Netlify déploie automatiquement !
```

### Preview Deployments

Pour chaque Pull Request, Netlify crée un **preview deployment** :
- URL unique pour tester avant de merger
- Idéal pour valider les changements
- Automatique avec les branches

---

## 📊 ÉTAPE 5 : Vérifications post-déploiement

### ✅ Checklist de vérification

Après le déploiement, testez :

- [ ] Le site se charge correctement
- [ ] Navigation entre les sections (Profil, Carrières, etc.)
- [ ] Upload de documents fonctionne
- [ ] Calculs de pension s'affichent
- [ ] Responsive sur mobile (DevTools)
- [ ] Pas d'erreurs dans la console (F12)
- [ ] Toutes les icônes s'affichent
- [ ] Footer avec liens fonctionne

### 🐛 En cas de problème

**1. Build échoue ?**
- Vérifier les logs de build dans Netlify
- Vérifier que `package.json` est correct
- S'assurer que toutes les dépendances sont dans `dependencies`

**2. Page blanche ?**
- Vérifier la console du navigateur (F12)
- Vérifier que le fichier `netlify.toml` est bien présent
- Vérifier que `public/_redirects` existe

**3. Erreur 404 sur les routes ?**
- Le fichier `public/_redirects` règle ce problème
- Si absent, créer un fichier avec : `/*    /index.html   200`

---

## ⚡ OPTIMISATIONS Netlify

### 1. Build plus rapides

Dans `netlify.toml`, activer le cache :
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.processing]
  skip_processing = false

[build.processing.css]
  bundle = true
  minify = true

[build.processing.js]
  bundle = true
  minify = true

[build.processing.html]
  pretty_urls = true

[build.processing.images]
  compress = true
```

### 2. Préchargement des assets

Netlify précharge automatiquement vos assets critiques.

### 3. CDN Global

Votre site est automatiquement distribué sur le CDN de Netlify (150+ datacenters).

---

## 📈 Analytics et Monitoring

### Netlify Analytics (Payant - 9$/mois)

Ajouter des analytics :
1. Site → Analytics
2. Enable Analytics
3. Voir les visites, pages populaires, etc.

### Alternative gratuite : Google Analytics

1. **Créer une propriété GA4**
   - https://analytics.google.com

2. **Ajouter le script dans `index.html`** :
```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

3. **Commit et push**

---

## 🔒 Sécurité

### Headers de sécurité (Déjà configurés)

Le fichier `netlify.toml` inclut déjà :
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy

### Variables d'environnement sécurisées

Ne JAMAIS committer de clés API :
1. Ajouter `.env` dans `.gitignore` (déjà fait ✅)
2. Ajouter les variables dans Netlify :
   - Site settings → Environment variables
   - Add a variable
3. Utiliser dans le code : `import.meta.env.VITE_MA_VARIABLE`

---

## 🎨 Domaine personnalisé complet

### Acheter un domaine

Recommandations :
- **Namecheap** : https://www.namecheap.com
- **OVH** : https://www.ovhcloud.com
- **Google Domains** : https://domains.google

### Configurer le DNS

Dans votre registrar de domaine :

**Option A : CNAME (Sous-domaine)**
```
Type:  CNAME
Name:  www
Value: votre-site.netlify.app
```

**Option B : A Record (Domaine racine)**
```
Type:  A
Name:  @
Value: 75.2.60.5 (IP Netlify)
```

**Ajouter dans Netlify** :
1. Domain management → Add custom domain
2. Entrer votre domaine
3. Vérifier le DNS
4. Activer HTTPS

---

## 📱 Progressive Web App (PWA) - Bonus

Pour transformer VAULT en PWA :

1. **Installer le plugin Vite PWA**
```bash
npm install vite-plugin-pwa -D
```

2. **Configurer dans `vite.config.js`**
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'VAULT - Expert Retraite',
        short_name: 'VAULT',
        description: 'Plateforme Expert Retraite',
        theme_color: '#2563eb',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

---

## 🎯 Résumé - Checklist finale

- [ ] Code uploadé sur GitHub
- [ ] Repository connecté à Netlify
- [ ] Premier déploiement réussi
- [ ] Site accessible via URL Netlify
- [ ] Nom de domaine personnalisé (optionnel)
- [ ] HTTPS activé (automatique)
- [ ] Tests post-déploiement effectués
- [ ] Analytics configuré (optionnel)
- [ ] Variables d'environnement ajoutées (si besoin)

---

## 🆘 Support

**Documentation Netlify** : https://docs.netlify.com
**Support Netlify** : https://answers.netlify.com
**Discord Netlify** : https://netlifycommunity.slack.com

---

## 🎉 Félicitations !

Votre application VAULT est maintenant :
✅ En ligne 24/7
✅ Accessible partout dans le monde
✅ Avec HTTPS gratuit
✅ Sur un CDN ultra-rapide
✅ Avec déploiement automatique

**URL de votre app** : `https://votre-nom.netlify.app`

---

**Partagez votre création avec le monde ! 🌍**

---

VAULT 2025 © Tous droits réservés
