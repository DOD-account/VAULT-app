# 🚀 Guide : Publier VAULT sur GitHub

## 📋 Prérequis
- Un compte GitHub (gratuit) : https://github.com
- Le dossier **vault-netlify** extrait du ZIP

---

## 🌐 Méthode 1 : Via l'interface Web GitHub (LA PLUS SIMPLE)

### Étape 1 : Créer un nouveau repository

1. **Connectez-vous à GitHub** : https://github.com
2. Cliquez sur le bouton **"+"** en haut à droite
3. Sélectionnez **"New repository"**

### Étape 2 : Configurer le repository

Remplissez les informations :

```
Repository name: vault-app
Description: VAULT - Système de Gestion Intégré
```

Options :
- ✅ **Public** (pour que Netlify puisse y accéder gratuitement)
- ⬜ Ne cochez PAS "Add a README file" (on a déjà le nôtre)
- ⬜ Ne cochez PAS "Add .gitignore"
- ⬜ Ne cochez PAS "Choose a license"

4. Cliquez sur **"Create repository"**

### Étape 3 : Uploader les fichiers

Vous arrivez sur une page avec plusieurs options. Choisissez :

1. Cliquez sur **"uploading an existing file"** (en bleu dans le texte)

   OU directement sur le lien : "upload files"

2. **Glissez-déposez** TOUS les fichiers du dossier **vault-netlify** :
   - index.html
   - vault-application.jsx
   - README.md
   - GUIDE_DEPLOIEMENT.md

   ⚠️ **Important** : Glissez les FICHIERS, pas le dossier parent !

3. En bas de la page, dans "Commit changes" :
   ```
   Premier commit : Application VAULT v1.0
   ```

4. Cliquez sur **"Commit changes"**

### ✅ C'est fait ! Votre projet est sur GitHub !

---

## 💻 Méthode 2 : Via Git en ligne de commande (Pour utilisateurs avancés)

### Étape 1 : Installer Git (si pas déjà fait)

**Windows** : https://git-scm.com/download/win
**Mac** : `brew install git` (ou Xcode Command Line Tools)
**Linux** : `sudo apt-get install git` (Ubuntu/Debian)

### Étape 2 : Configurer Git (première fois uniquement)

Ouvrez un terminal/invite de commande et tapez :

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@exemple.com"
```

### Étape 3 : Créer le repository sur GitHub

1. Allez sur https://github.com
2. Cliquez sur **"+"** → **"New repository"**
3. Nommez-le **"vault-app"**
4. Choisissez **Public**
5. Ne cochez RIEN d'autre
6. Cliquez sur **"Create repository"**

### Étape 4 : Initialiser et pousser votre projet

Dans votre terminal, naviguez jusqu'au dossier **vault-netlify** :

```bash
# Se déplacer dans le dossier (adaptez le chemin)
cd chemin/vers/vault-netlify

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Premier commit : Application VAULT v1.0"

# Ajouter le remote (remplacez USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/vault-app.git

# Pousser sur GitHub
git branch -M main
git push -u origin main
```

### ✅ Votre projet est maintenant sur GitHub !

---

## 🔗 Connecter GitHub à Netlify

Maintenant que votre code est sur GitHub, vous pouvez le déployer sur Netlify :

### Étape 1 : Aller sur Netlify
1. Allez sur https://app.netlify.com
2. Cliquez sur **"New site from Git"**

### Étape 2 : Connecter GitHub
1. Cliquez sur **"GitHub"**
2. Autorisez Netlify à accéder à votre GitHub
3. Sélectionnez le repository **"vault-app"**

### Étape 3 : Configurer le déploiement
Laissez les paramètres par défaut :
```
Branch to deploy: main
Build command: (laissez vide)
Publish directory: (laissez vide ou mettez "./")
```

4. Cliquez sur **"Deploy site"**

### ✅ Votre site est déployé automatiquement !

---

## 🔄 Avantages du déploiement via GitHub

✅ **Déploiement automatique** : Chaque modification = mise à jour automatique
✅ **Historique des versions** : Git garde tout l'historique
✅ **Collaboration** : Possibilité d'inviter des collaborateurs
✅ **Sauvegarde** : Votre code est sauvegardé en ligne
✅ **Gratuit** : GitHub et Netlify sont gratuits pour les projets publics

---

## 📝 Faire des modifications après le déploiement

### Via l'interface Web GitHub (simple) :

1. Allez sur votre repository : https://github.com/USERNAME/vault-app
2. Cliquez sur le fichier à modifier (ex: vault-application.jsx)
3. Cliquez sur l'icône **crayon** (Edit)
4. Faites vos modifications
5. En bas, cliquez sur **"Commit changes"**
6. **Netlify redéploiera automatiquement** en 30 secondes !

### Via Git en ligne de commande :

```bash
# Modifier vos fichiers localement
# Puis :

git add .
git commit -m "Description des modifications"
git push

# Netlify redéploie automatiquement !
```

---

## 🎯 URL de votre projet GitHub

```
https://github.com/VOTRE_USERNAME/vault-app
```

---

## ❓ Troubleshooting

### Problème : "Permission denied" lors du push

**Solution** : Utilisez un Personal Access Token

1. Sur GitHub : Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Générez un nouveau token avec le scope "repo"
3. Copiez le token
4. Lors du push, utilisez le token comme mot de passe

### Problème : Les fichiers ne s'affichent pas correctement

**Solution** : Vérifiez la structure
```
vault-app/
├── index.html              (à la racine !)
├── vault-application.jsx
├── README.md
└── GUIDE_DEPLOIEMENT.md
```

Les fichiers doivent être à la **racine** du repository, pas dans un sous-dossier.

---

## 🎉 Félicitations !

Votre projet VAULT est maintenant :
- ✅ Sur GitHub (sauvegardé et versionné)
- ✅ Déployé sur Netlify (accessible en ligne)
- ✅ Avec déploiement automatique (chaque modification se déploie)

**Workflow complet** :
1. Modifiez le code sur GitHub
2. Commit les changements
3. Netlify redéploie automatiquement
4. Votre site est à jour ! 🚀

---

*Guide créé pour VAULT 2025*
