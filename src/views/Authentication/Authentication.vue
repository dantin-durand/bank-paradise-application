<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-segment :value="currentform" @ionChange="segmentChanged">
          <ion-segment-button value="login">
            <ion-label>Connexion</ion-label>
          </ion-segment-button>
          <ion-segment-button value="register">
            <ion-label>Inscription</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card class="ion-padding" v-if="currentform === 'login'">
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

      <ion-card class="ion-padding" v-if="currentform === 'register'">
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
  IonSegmentButton,
  IonSegment,
  IonToolbar,
  IonHeader,
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
    IonSegmentButton,
    IonSegment,
    IonToolbar,
    IonHeader,
  },
  data() {
    return {
      currentform: "login",
    };
  },
  methods: {
    segmentChanged(event) {
      this.currentform = event.detail.value;
    },
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
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
ion-card {
  animation: fadeIn 0.5s forwards ease;
}
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