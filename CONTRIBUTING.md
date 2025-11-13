# 🤝 Guide de Contribution - VAULT

Merci de votre intérêt pour contribuer à VAULT ! Ce document vous guidera dans le processus de contribution.

## 📋 Code de Conduite

En participant à ce projet, vous vous engagez à :
- Être respectueux envers tous les contributeurs
- Accepter les critiques constructives
- Se concentrer sur ce qui est le mieux pour la communauté
- Faire preuve d'empathie envers les autres membres

## 🚀 Comment contribuer

### 1. Fork le projet

Cliquez sur le bouton "Fork" en haut à droite de la page GitHub.

### 2. Cloner votre fork

```bash
git clone https://github.com/votre-username/vault-saas.git
cd vault-saas
```

### 3. Créer une branche

```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
```

**Convention de nommage des branches** :
- `feature/` : Nouvelle fonctionnalité
- `fix/` : Correction de bug
- `docs/` : Modification de documentation
- `refactor/` : Refactorisation de code
- `test/` : Ajout de tests

### 4. Faire vos modifications

Assurez-vous de :
- ✅ Suivre les conventions de code existantes
- ✅ Tester vos modifications
- ✅ Documenter les nouvelles fonctionnalités
- ✅ Commenter le code complexe

### 5. Committer vos changements

```bash
git add .
git commit -m "feat: Ajouter la fonctionnalité X"
```

**Convention de commit** (Conventional Commits) :
- `feat:` : Nouvelle fonctionnalité
- `fix:` : Correction de bug
- `docs:` : Documentation
- `style:` : Formatage (pas de changement de code)
- `refactor:` : Refactorisation
- `test:` : Ajout de tests
- `chore:` : Maintenance

### 6. Pousser vers votre fork

```bash
git push origin feature/ma-nouvelle-fonctionnalite
```

### 7. Créer une Pull Request

1. Allez sur votre fork GitHub
2. Cliquez sur "Pull Request"
3. Remplissez le template de PR
4. Attendez la review

## 🎯 Types de contributions recherchées

### 🐛 Bugs
- Corriger les bugs existants
- Signaler de nouveaux bugs via les Issues

### ✨ Fonctionnalités
- Nouvelle section d'analyse
- Export PDF des rapports
- Graphiques de projection
- Import automatique de documents
- Mode sombre
- Internationalisation (i18n)

### 📝 Documentation
- Améliorer le README
- Ajouter des exemples de code
- Créer des tutoriels vidéo
- Traduire la documentation

### 🎨 Design
- Améliorer l'UI/UX
- Créer de nouveaux thèmes
- Optimiser le responsive
- Améliorer l'accessibilité

### 🧪 Tests
- Ajouter des tests unitaires
- Tests d'intégration
- Tests E2E

## 📐 Standards de code

### JavaScript/React

```javascript
// ✅ BON
const calculatePension = (points, value) => {
  return points * value;
};

// ❌ MAUVAIS
function calc(p, v) {
  return p * v;
}
```

**Règles** :
- Utiliser `const` et `let`, pas `var`
- Noms de variables descriptifs en camelCase
- Fonctions fléchées pour les composants fonctionnels
- Destructuration des props

### CSS/Tailwind

```jsx
// ✅ BON
<div className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">

// ❌ MAUVAIS (styles inline)
<div style={{display: 'flex', padding: '8px 16px'}}>
```

**Règles** :
- Utiliser exclusivement Tailwind
- Pas de styles inline
- Utiliser les classes utilitaires

### Structure des composants

```jsx
// ✅ BON
function MonComposant({ title, data }) {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // Effect logic
  }, []);
  
  const handleClick = () => {
    // Handler logic
  };
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

## 🧪 Tests

Avant de soumettre une PR, vérifiez que :
- [ ] L'application démarre sans erreur (`npm run dev`)
- [ ] Le build fonctionne (`npm run build`)
- [ ] Pas d'erreurs ESLint (`npm run lint`)
- [ ] Tests manuels effectués sur :
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Mobile (responsive)

## 📝 Template de Pull Request

```markdown
## Description
Brève description des changements

## Type de changement
- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Breaking change
- [ ] Documentation

## Checklist
- [ ] Mon code suit les conventions du projet
- [ ] J'ai testé mes modifications
- [ ] J'ai mis à jour la documentation
- [ ] Aucune erreur ESLint
- [ ] Tests passent
```

## 🐛 Signaler un bug

Utilisez le template d'issue :

```markdown
## Description du bug
Description claire et concise

## Étapes pour reproduire
1. Aller sur '...'
2. Cliquer sur '...'
3. Voir l'erreur

## Comportement attendu
Ce qui devrait se passer

## Captures d'écran
Si applicable

## Environnement
- OS: [ex: Windows 10]
- Navigateur: [ex: Chrome 120]
- Version: [ex: 1.0.0]
```

## 💡 Proposer une fonctionnalité

```markdown
## Fonctionnalité proposée
Description de la fonctionnalité

## Problème résolu
Quel problème cela résout-il ?

## Solution envisagée
Comment l'implémenter ?

## Alternatives considérées
Autres approches possibles

## Contexte additionnel
Screenshots, mockups, etc.
```

## 🏆 Contributeurs

Un grand merci à tous les contributeurs qui ont participé au projet ! 

Votre nom apparaîtra automatiquement dans la liste des contributeurs GitHub.

## 📧 Questions ?

- **Issues** : Pour les bugs et suggestions
- **Discussions** : Pour les questions générales
- **Email** : contact@vault-saas.com

## 📜 Licence

En contribuant, vous acceptez que vos contributions soient sous licence MIT.

---

**Merci de contribuer à VAULT ! 🚀**
