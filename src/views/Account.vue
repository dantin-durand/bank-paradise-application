<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <div class="d-flex">
          <h2>Mon compte</h2>
          <ion-button
            @click="logout"
            size="small"
            class="ion-margin-top secondary-btn"
            >Déconnexion</ion-button
          >
        </div>
      </div>
      <ion-card class="ion-padding">
        <h3>Informations</h3>
        <p>Adresse mail: pseudo123@gmail.com</p>
        <p>Nom RP: John</p>
        <p>Prénom RP: Dupont</p>
        <p>Mot de passe: **********</p>
        <ion-button class="ion-margin-top">Modifier</ion-button>
      </ion-card>
      <ion-card class="ion-padding">
        <h3>Abonnemment</h3>
        <p>Formule actuelle: Communauté (3.99€)</p>
        <p>Prochain paiement: 02/11/2021</p>
        <ion-button class="ion-margin-top">Changer de formule</ion-button>
        <ion-button class="ion-margin-top secondary-btn" size="small"
          >Annuler l'abonnement</ion-button
        >
        <ion-button class="ion-margin-top secondary-btn" size="small"
          >Mettre en pause</ion-button
        >
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Account",
  components: {
    IonContent,
    IonPage,
    IonCard,
    IonButton,
  },
  methods: {
    logout() {
      this.$router.push({ path: "/auth" });
    },
  },
});
</script>

<style scoped>
.d-flex {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.secondary-btn {
  --background: transparent;
  --color: var(--main-color);
  border: 1px solid var(--main-color);
  border-radius: 8px;
}
.container {
  padding: 20px 40px;
}
</style>