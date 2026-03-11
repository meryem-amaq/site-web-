# CreativiAI - Plateforme de Services IA

Un site web moderne et responsive pour une plateforme de services d'intelligence artificielle.

## 🎯 Fonctionnalités

- ✨ Design moderne et attrayant avec gradients
- 📱 Totalement responsive (mobile, tablet, desktop)
- ⚡ Animations fluides et interactions utilisateur
- 🎨 Interface intuitive et facile à naviguer
- 🚀 Prêt pour l'intégration d'APIs IA

## 📁 Structure du Projet

```
site web/
├── index.html          # Page principale HTML
├── src/
│   ├── style.css      # Feuilles de style CSS
│   └── script.js      # Logique JavaScript
└── README.md          # Ce fichier
```

## 🚀 Comment Utiliser

### Option 1 : Ouvrir directement
1. Double-cliquez sur `index.html` pour ouvrir le site dans votre navigateur par défaut
2. Le site s'affichera complètement fonctionnel

### Option 2 : Avec un serveur local (recommandé)
Si vous avez Python installé :
```bash
# Python 3
python -m http.server 8000

# Puis ouvrez : http://localhost:8000
```

Si vous avez Node.js :
```bash
# Installer live-server globalement
npm install -g live-server

# Lancer le serveur
live-server
```

## 📋 Sections du Site

### 1. Navigation
- Menu sticky avec liens de navigation
- Scroll smooth vers les sections

### 2. Hero Section
- Titre accrocheur : "Creativity, Unleashed"
- Appel à l'action
- Box gradient animée

### 3. Services
- Chat IA 🤖
- Génération d'Images 🎨
- Rédaction IA 📝
- Analyse de Données 🎯

### 4. À Propos
- Présentation de la plateforme
- Liste des avantages

### 5. Contact
- Formulaire de contact
- Validations basiques

### 6. Footer
- Liens sociaux
- Droits d'auteur

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `src/style.css` :
```css
:root {
    --primary-color: #7c3aed;      /* Violet principal */
    --secondary-color: #ec4899;    /* Rose */
    --text-color: #1f2937;         /* Gris foncé */
    --light-bg: #f9fafb;           /* Gris clair */
    --white: #ffffff;              /* Blanc */
}
```

### Contenu
- Éditez le texte directement dans `index.html`
- Changez les emojis pour d'autres symboles ou icônes
- Personnalisez les couleurs du gradient hero

## 🔧 Développement Futur

### À Ajouter
- [ ] Backend pour les APIs IA (Node.js/Express ou Flask)
- [ ] Authentification utilisateur
- [ ] Intégration ChatGPT/OpenAI
- [ ] Intégration génération d'images
- [ ] Système de paiement (Stripe/PayPal)
- [ ] Dashboard utilisateur
- [ ] Historique des utilisations
- [ ] Analytics

### Exemple Backend (Node.js)
```javascript
// Création d'une API pour les services IA
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    // Appel à OpenAI API
    // res.json({ response: aiResponse });
});
```

## 📦 Dépendances

Actuellement, **aucune dépendance externe** - Pur HTML/CSS/JavaScript !

Pour les fonctionnalités futures IA, vous aurez besoin de :
- OpenAI API
- ou Hugging Face API
- ou autre service IA

## 🔐 Sécurité

⚠️ **Important pour la production :**
- Ne mettez jamais vos clés API directement dans le code
- Utilisez un backend pour gérer les appels API
- Validez les données utilisateur côté serveur
- Utilisez HTTPS en production

## 📞 Support et Contact

Pour des questions ou problèmes :
- Email: contact@creativiai.com
- Utilisez le formulaire de contact sur le site

## 📄 Licence

Libre d'utilisation pour projets personnels et commerciaux.

---

**Dernier mise à jour:** Mars 2025
**Version:** 1.0.0
