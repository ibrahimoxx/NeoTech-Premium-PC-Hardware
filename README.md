# 🖥️ NeoTech : Plateforme E-Commerce Premium & Configurateur PC

NeoTech est une solution complète de commerce électronique dédiée au matériel informatique de haute performance. Elle intègre un **Configurateur PC interactif**, un système de **Chatbot intelligent**, et une architecture backend robuste et sécurisée.

## 🚀 Fonctionnalités Clés
- **Configurateur PC de Rêve** : Interface intuitive pour choisir ses composants avec calcul de prix en temps réel.
- **Catalogue de Produits** : Affichage moderne des derniers composants (CPU, GPU, RAM, etc.).
- **Dashboard Admin** : Console de gestion pour suivre les commandes et les stocks.
- **Chatbot NeoSupport** : Assistant virtuel intégré pour guider les utilisateurs.
- **Design Premium** : Esthétique "Glassmorphism" avec mode sombre fluide et animations modernes.

## 🛠️ Stack Technique
- **Frontend** : React.js, CSS Vanille (Glassmorphism), Phosphor Icons, Bootstrap (Grilles).
- **Backend** : Laravel (API REST), MySQL.
- **Sécurité** : Hachage Bcrypt, validation stricte des entrées, protection CORS, désactivation du mode debug en production.

## 📁 Structure du Projet
- `/finalapp` : Application Frontend (React).
- `/neotech` : Application Backend / API (Laravel).

## ⚙️ Installation & Configuration

### 1. Backend (Laravel)
```bash
cd neotech
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### 2. Frontend (React)
```bash
cd finalapp/finalapp
npm install
npm start
```

## 🛡️ Sécurité
Le projet suit les meilleures pratiques de sécurité :
- Toutes les données sensibles sont isolées dans le fichier `.env`.
- Les mots de passe sont hachés avec `bcrypt`.
- Les entrées utilisateurs sont systématiquement validées côté serveur.

---
*Réalisé avec ❤️ par l'équipe NeoTech.*
