# Bank Paradise

Bank Paradise est une plateforme en ligne de jeux de rôle, permettant aux utilisateurs de

# Liens

#### API : https://bank-paradise-site.herokuapp.com/api

#### App Mobile: https://bank-paradise-application.web.app/home

#### App Web: https://bank-paradise-site.herokuapp.com/

# API

|          URL          | Method | Description                                        | Payload attendue |
| :-------------------: | :----: | -------------------------------------------------- | ---------------- |
|    /auth/register     |  POST  | Enregistrement                                     | ---------------- |
|      /auth/login      |  POST  | Connexion                                          | ---------------- |
|     /auth/logout      |  POST  | Déconnexion                                        | ---------------- |
|    /checkout/plans    |  GET   | Liste des plans                                    | ---------------- |
|    /auth/register     |  GET   | Enregistrement                                     | ---------------- |
|       /articles       |  GET   | Liste des articles                                 | ---------------- |
|     /articles/:id     |  GET   | Obtenir un article via son ID                      | ---------------- |
|      /community       |  POST  | Créer une communauté                               | ---------------- |
|   /checkout/intent    |  POST  | Preparer les informations de paiement d'abonnement | ---------------- |
|  /checkout/subscribe  |  POST  | S'abonner                                          | ---------------- |
|     /auth/account     |  POST  | Obtenir les informations du compte                 | ---------------- |
| /auth/getSubscription |  GET   | Obtenir les détails de notre abonnement            | ---------------- |
|         /user         |  PUT   | Mettre à jour son compte                           | ---------------- |
|     /customerCare     |  POST  | Envoyer un email au service client                 | ---------------- |
|   /customerCareInfo   |  GET   | Obtenir les coordonnées de l'entrepris             | ---------------- |
|   /customerCareInfo   |  GET   | Obtenir les coordonnées de l'entrepris             | ---------------- |

# URL du site web

### Visiteurs

|      URL       | Method | Description    | Payload attendue |
| :------------: | :----: | -------------- | ---------------- |
| /auth/register |  POST  | Enregistrement | ---------------- |
|  /auth/login   |  POST  | Connexion      | ---------------- |

### Membres

|      URL       | Method | Description    | Payload attendue |
| :------------: | :----: | -------------- | ---------------- |
| /auth/register |  POST  | Enregistrement | ---------------- |
|  /auth/login   |  POST  | Connexion      | ---------------- |

### Admin

|      URL       | Method | Description    | Payload attendue |
| :------------: | :----: | -------------- | ---------------- |
| /auth/register |  POST  | Enregistrement | ---------------- |
|  /auth/login   |  POST  | Connexion      | ---------------- |
