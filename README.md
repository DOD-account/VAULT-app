# 🏛️ VAULT - Plateforme Expert Retraite

VAULT est une application SaaS complète pour la gestion et l'analyse de dossiers de retraite. Elle permet aux experts en retraite de gérer les profils clients, analyser les carrières, calculer les projections de pension et suivre l'avancement des dossiers.

![VAULT Logo](https://img.shields.io/badge/VAULT-Expert%20Retraite-blue?style=for-the-badge)

## ✨ Fonctionnalités principales

### 📋 Gestion des Profils
- Informations personnelles complètes (civilité, nom, prénom, numéro de sécurité sociale)
- Gestion des enfants avec ajout/modification/suppression
- Édition en ligne des données avec validation

### 💼 Gestion des Carrières
- **Scénarios multiples** : Créez et comparez différents scénarios de carrière
- **Données détaillées** : Années, salaires (plafonnés/déplafonnés), trimestres validés
- **Régimes de retraite** : CNAV (régime de base) et AGIRC-ARRCO (complémentaire)
- **Détection d'incohérences** : Système intelligent d'alerte sur les anomalies
- **Édition en direct** : Modifiez les données directement dans le tableau

### 📊 Projections de Retraite
- Calcul automatique des pensions (base + complémentaire)
- Analyse détaillée avec valeur des points actualisée
- Trimestres requis vs trimestres validés
- Prélèvements sociaux et pension nette
- **6 modules d'analyse** :
  1. Situation du scénario
  2. Anomalies et incohérences
  3. Rachat de trimestres
  4. Retraite progressive
  5. Carrière longue
  6. Cumul emploi-retraite

### 📄 Gestion Documentaire
- Upload de documents par catégories
- Catégories : Relevés de carrière, Preuves de revenu, Documents familiaux, Notifications de pension
- Visualisation, téléchargement et suppression de documents
- Historique des uploads avec horodatage

### 📈 Suivi de Dossier
- Timeline interactive de l'avancement
- Statistiques en temps réel (temps écoulé, documents analysés, progression)
- Actions rapides accessibles
- Barre de progression visuelle

### 🔔 Système de Notifications
- Alertes réglementaires
- Notifications de capacité
- Badge de nouveaux messages
- Centre de notifications complet

### 👥 Multi-dossiers
- Gestion de plusieurs clients simultanément
- Sélecteur de dossiers dans le menu
- Données isolées par client

## 🚀 Installation & Déploiement

### Installation Locale

#### Prérequis
- Node.js 16+ 
- npm ou yarn

#### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/vault-saas.git
cd vault-saas
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer l'application en développement**
```bash
npm run dev
```

4. **Accéder à l'application**
```
http://localhost:5173
```

### ☁️ Déploiement sur Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

**Configuration automatique avec GitHub + Netlify** :
- ✅ Build command : `npm run build`
- ✅ Publish directory : `dist`
- ✅ Fichier `netlify.toml` inclus
- ✅ Redirections SPA configurées
- ✅ Headers de sécurité activés
- ✅ HTTPS gratuit et automatique

**Guide détaillé** : Voir [DEPLOIEMENT_NETLIFY.md](DEPLOIEMENT_NETLIFY.md)

## 📦 Structure du projet

```
vault-saas/
├── src/
│   ├── components/
│   │   └── VaultApp.jsx      # Composant principal
│   ├── App.jsx                # Point d'entrée
│   └── main.jsx               # Configuration React
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Technologies utilisées

- **React 18** - Framework JavaScript pour l'interface utilisateur
- **Tailwind CSS** - Framework CSS pour le styling
- **Lucide React** - Bibliothèque d'icônes moderne
- **Vite** - Outil de build ultra-rapide

## 📊 Calculs de retraite

L'application utilise les formules officielles françaises :

### Régime de base (CNAV)
```
Pension mensuelle = Nombre de points × Valeur du point (0,6734€)
```

### Régime complémentaire (AGIRC-ARRCO)
```
Pension mensuelle = Nombre de points × Valeur du point (1,4159€)
```

### Pension nette
```
Pension nette = Pension brute × 0,9 (après prélèvements sociaux ~10%)
```

### Trimestres requis
- **172 trimestres** pour le taux plein (réforme 2023)

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans Tailwind :
- Bleu : `blue-600` → `#2563eb`
- Indigo : `indigo-600` → `#4f46e5`
- Orange : `orange-600` → `#ea580c`
- Vert : `green-600` → `#16a34a`
- Violet : `purple-600` → `#9333ea`

### Modification des valeurs de points
Dans le fichier `VaultApp.jsx`, section projections :
```javascript
const valeurPointBase = 0.6734;          // Valeur du point CNAV
const valeurPointComplementaire = 1.4159; // Valeur du point AGIRC-ARRCO
```

## 🔐 Sécurité et RGPD

- ✅ Données stockées uniquement côté client (localStorage)
- ✅ Aucune transmission de données sensibles
- ✅ Conforme RGPD
- ✅ Footer avec mentions légales et politique de confidentialité

## 🐛 Détection d'erreurs

L'application détecte automatiquement :
- Trimestres invalides (< 0 ou > 4)
- Incohérences sur les salaires
- Anomalies dans les données de chômage
- Périodes avec 0 trimestre en activité salariée

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte à tous les écrans :
- 📱 Mobile
- 💻 Tablette
- 🖥️ Desktop

## 🚧 Roadmap

- [ ] Export PDF des rapports de retraite
- [ ] Graphiques de projection sur plusieurs années
- [ ] Système de connexion utilisateur
- [ ] Backend API pour la persistance des données
- [ ] Calcul automatique des points selon les salaires
- [ ] Import automatique depuis les relevés de carrière PDF
- [ ] Mode sombre
- [ ] Multi-langues (FR/EN)

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

Créé avec ❤️ pour simplifier la gestion des dossiers de retraite

## 📞 Contact

Pour toute question ou suggestion :
- 📧 Email : contact@vault-saas.com
- 🐛 Issues : [GitHub Issues](https://github.com/votre-username/vault-saas/issues)

---

**VAULT 2025** - Tous droits réservés
