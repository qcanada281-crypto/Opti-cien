# Opti-cien

**Opti-Look** — Plateforme moderne de Haute Lunetterie, Verres de Précision, Digital Eye-Care & Prise de Rendez-vous en ligne.

---

## ✨ Fonctionnalités Principales

- 👓 **Catalogue de Lunetterie Haut de Gamme** : Montures optiques, solaires et verres de précision avec filtres dynamiques (matériaux, styles, formes, prix).
- 📅 **Prise de Rendez-vous Optométrique** : Système interactif de réservation en ligne avec gestion de dates et créneaux horaires.
- 📱 **PWA & Support Hors-ligne** : Service Worker (`sw.js`) et IndexedDB pour une expérience fluide même sans connexion.
- 🌐 **Support Multilingue** : Interface disponible en Français, Arabe (avec support RTL), et Anglais.
- 🛠️ **Panneau d'Administration** : Dashboard pour la gestion des montures, des rendez-vous et des stocks (`admin.html`).
- ⚡ **Architecture Hybride** : Frontend modulaire Vanilla JS sans dépendances lourdes, couplé à une API backend PHP / MySQL.

---

## 🚀 Installation & Configuration Locale

1. **Cloner le dépôt dans votre serveur local (ex: XAMPP)** :
   ```bash
   git clone https://github.com/qcanada281-crypto/Opti-cien.git
   ```
   *Placez le dossier dans `htdocs/` (ex: `htdocs/Opti-Look`).*

2. **Base de données MySQL** :
   - Créez une base de données dans phpMyAdmin ou via CLI.
   - Importez le schéma SQL situé dans [`api/schema.sql`](api/schema.sql).
   - Ajustez les identifiants de connexion dans [`api/db.php`](api/db.php) si nécessaire.

3. **Accéder à l'application** :
   - Ouvrez votre navigateur sur : `http://localhost/Opti-Look`
   - Espace d'administration : `http://localhost/Opti-Look/admin.html`

---

## 📂 Structure du Projet

```text
Opti-Look/
├── admin.html             # Interface d'administration
├── index.html             # Page d'accueil & vitrine
├── index.php              # Point d'entrée PHP
├── manifest.json          # Configuration PWA
├── sw.js                  # Service Worker PWA
├── api/                   # Endpoints PHP & Schéma SQL
│   ├── appointments.php
│   ├── db.php
│   ├── products.php
│   └── schema.sql
├── css/                   # Feuilles de styles
│   └── styles.css
├── images/                # Galerie et visuels produits
└── js/                    # Architecture JavaScript modulaire
    ├── admin/
    ├── components/
    ├── data/
    ├── app.js
    └── offline-manager.js
```

---

## 📄 Licence
Ce projet est développé à des fins professionnelles. Tous droits réservés.
