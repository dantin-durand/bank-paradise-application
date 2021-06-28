# Bank Paradise

# Installation

1.  `npm install`
2.  `npm run serve`

# Liens

#### API : https://bank-paradise-site.herokuapp.com/api

#### App Mobile: https://bank-paradise-application.web.app/home

# Technologies:

- Vue.js
- Vuelidate
- Ionic

# Architecture:

- Utilisation des composants mais sans atomique design, le sujet n'étant pas assez conséquent pour que l'atomique design soit utilisé dans tout son potentiel.
- Externalisation des fonctions réutilisées entre les composants dans la partie "utils"

# API

|          URL          | Method | Description                                        | Payload attendue                                                                                                                                    |
| :-------------------: | :----: | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
|    /auth/register     |  POST  | Enregistrement                                     | `{ "firstname": "prénom", "lastname": "nom", "email": "test@gmail.com", "password": "motDePasse123?", "device_name": "bank-paradise-application" }` |
|      /auth/login      |  POST  | Connexion                                          | `{ "email": "test@gmail.com", "password": "motDePasse123?", "device_name": "bank-paradise-application" }`                                           |
|     /auth/logout      |  POST  | Déconnexion                                        | ---------------- \*                                                                                                                                 |
|    /checkout/plans    |  GET   | Liste des plans                                    | ----------------                                                                                                                                    | ---------------- |
|       /articles       |  GET   | Liste des articles                                 | ----------------                                                                                                                                    |
|     /articles/:id     |  GET   | Obtenir un article via son ID                      | ----------------                                                                                                                                    |
|      /community       |  POST  | Créer une communauté                               | X                                                                                                                                                   |
|   /checkout/intent    |  POST  | Preparer les informations de paiement d'abonnement | X                                                                                                                                                   |
|  /checkout/subscribe  |  POST  | S'abonner                                          | X                                                                                                                                                   |
|     /auth/account     |  POST  | Obtenir les informations du compte                 | _Token à fournir_                                                                                                                                   |
| /auth/getSubscription |  GET   | Obtenir les détails de notre abonnement            | _Token à fournir_                                                                                                                                   |
|         /user         |  PUT   | Mettre à jour son compte                           | _Token à fournir_                                                                                                                                   |
|     /customerCare     |  POST  | Envoyer un email au service client                 |                                                                                                                                                     |
|   /customerCareInfo   |  GET   | Obtenir les coordonnées de l'entrepris             | ----------------                                                                                                                                    |
|   /customerCareInfo   |  GET   | Obtenir les coordonnées de l'entrepris             | ----------------                                                                                                                                    |
