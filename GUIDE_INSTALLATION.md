# 📘 Guide d'Installation Complet - VAULT

## 🎯 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 16 ou supérieure)
  - Vérifiez avec : `node --version`
  - Téléchargement : https://nodejs.org/

- **npm** ou **yarn** (gestionnaire de paquets)
  - npm est inclus avec Node.js
  - Vérifiez avec : `npm --version`

- **Git** (pour cloner le repository)
  - Vérifiez avec : `git --version`
  - Téléchargement : https://git-scm.com/

## 📦 Installation Locale

### Étape 1 : Cloner le repository

```bash
# Via HTTPS
git clone https://github.com/votre-username/vault-saas.git

# Ou via SSH
git clone git@github.com:votre-username/vault-saas.git

# Accéder au dossier
cd vault-saas
```

### Étape 2 : Installer les dépendances

```bash
# Avec npm
npm install

# Ou avec yarn
yarn install
```

Cette commande va installer :
- React 18
- Lucide React (icônes)
- Tailwind CSS (styling)
- Vite (bundler)
- Et toutes les dépendances de développement

### Étape 3 : Lancer en mode développement

```bash
# Avec npm
npm run dev

# Ou avec yarn
yarn dev
```

L'application sera accessible sur : **http://localhost:5173**

Le serveur de développement se recharge automatiquement à chaque modification.

## 🏗️ Build pour la Production

### Créer le build de production

```bash
# Avec npm
npm run build

# Ou avec yarn
yarn build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

### Prévisualiser le build de production

```bash
# Avec npm
npm run preview

# Ou avec yarn
yarn preview
```

## 🌐 Déploiement

### Option 1 : Vercel (Recommandé)

1. **Créer un compte sur Vercel** : https://vercel.com
2. **Importer le projet GitHub**
3. **Déployer** : Vercel détecte automatiquement Vite
4. **URL** : Votre app sera disponible sur `https://votre-app.vercel.app`

```bash
# Alternative CLI
npm i -g vercel
vercel
```

### Option 2 : Netlify

1. **Créer un compte sur Netlify** : https://netlify.com
2. **Connecter GitHub**
3. **Configuration** :
   - Build command : `npm run build`
   - Publish directory : `dist`

```bash
# Alternative CLI
npm install -g netlify-cli
netlify deploy --prod
```

### Option 3 : GitHub Pages

1. **Installer gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Ajouter dans package.json**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://votre-username.github.io/vault-saas"
}
```

3. **Déployer**
```bash
npm run deploy
```

### Option 4 : Serveur personnalisé

1. **Créer le build**
```bash
npm run build
```

2. **Servir les fichiers statiques** (dossier `dist/`)

Exemple avec Apache :
```apache
<VirtualHost *:80>
    DocumentRoot /path/to/vault-saas/dist
    <Directory /path/to/vault-saas/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

Exemple avec Nginx :
```nginx
server {
    listen 80;
    server_name votre-domaine.com;
    root /path/to/vault-saas/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔧 Dépannage

### Problème : Port 5173 déjà utilisé

**Solution** : Modifier le port dans `vite.config.js`
```javascript
export default defineConfig({
  server: {
    port: 3000 // Changer ici
  }
})
```

### Problème : Erreur lors de l'installation

**Solution** : Nettoyer le cache et réinstaller
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Problème : Tailwind CSS ne fonctionne pas

**Vérifiez** :
1. `tailwind.config.js` existe
2. `postcss.config.js` existe
3. `src/index.css` contient les directives Tailwind
4. Le fichier CSS est importé dans `main.jsx`

### Problème : Icônes Lucide ne s'affichent pas

**Solution** : Vérifier l'import
```javascript
import { User, Bell } from 'lucide-react';
```

## 🎨 Personnalisation

### Changer les couleurs

Modifier `tailwind.config.js` :
```javascript
theme: {
  extend: {
    colors: {
      primary: '#votre-couleur',
    }
  }
}
```

### Modifier le logo

Remplacer le logo dans `public/` et mettre à jour `index.html`

## 📱 Tests

### Test du responsive

1. Ouvrir Chrome DevTools (F12)
2. Activer le mode responsive (Ctrl+Shift+M)
3. Tester sur différentes tailles :
   - Mobile : 375px
   - Tablette : 768px
   - Desktop : 1920px

## 🔐 Variables d'environnement (pour production)

Créer un fichier `.env` :
```
VITE_APP_NAME=VAULT
VITE_API_URL=https://api.votre-domaine.com
```

Utiliser dans le code :
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📊 Performance

### Analyser la taille du bundle

```bash
npm run build
npx vite-bundle-visualizer
```

## 🆘 Aide et Support

- **Issues GitHub** : https://github.com/votre-username/vault-saas/issues
- **Documentation Vite** : https://vitejs.dev/
- **Documentation React** : https://react.dev/
- **Documentation Tailwind** : https://tailwindcss.com/

## ✅ Checklist de déploiement

- [ ] Build de production créé sans erreurs
- [ ] Tests effectués sur tous les navigateurs
- [ ] Responsive testé sur mobile/tablette/desktop
- [ ] Performance vérifiée (Lighthouse)
- [ ] SEO optimisé (meta tags)
- [ ] Analytics configuré (Google Analytics)
- [ ] Domaine personnalisé configuré
- [ ] SSL/HTTPS activé
- [ ] Sauvegarde du code sur GitHub
- [ ] Documentation mise à jour

---

**Besoin d'aide ?** Ouvrez une issue sur GitHub ! 🚀
