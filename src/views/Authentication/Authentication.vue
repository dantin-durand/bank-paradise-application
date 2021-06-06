<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-card class="ion-padding">
        <h2>Connexion</h2>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Adresse mail*</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Mot de passe*</ion-label>
          <ion-input type="password"></ion-input>
        </ion-item>
        <br />
        <ion-button @click="login" class="ion-margin-top">Connexion</ion-button>
      </ion-card>
      <p class="loginOrInscription">OU</p>
      <ion-card class="ion-padding">
        <h2>Inscription</h2>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Pseudo</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Adresse mail</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Prénom RP</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Nom RP</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input type="password"></ion-input>
        </ion-item>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Confirmez le mot de passe</ion-label>
          <ion-input type="password"></ion-input>
        </ion-item>
        <br />
        <ion-button @click="register" class="ion-margin-top"
          >Inscription</ion-button
        >
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonCard,
  IonLabel,
  IonInput,
  IonItem,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "News",
  components: {
    IonContent,
    IonPage,
    IonCard,
    IonLabel,
    IonInput,
    IonItem,
    IonButton,
  },
  methods: {
    login() {
      this.$router.push({ path: "/account" });
    },
    register() {
      this.$router.push({ name: "RegisterStep2" });
    },
  },
});
</script>

<style scoped>
.newslist {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 10px;
}
.loginOrInscription {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.loginOrInscription::before {
  height: 1px;
  width: 30px;
  background-color: grey;
  content: "";
}
.loginOrInscription::after {
  height: 1px;
  width: 30px;
  background-color: grey;
  content: "";
}
</style>