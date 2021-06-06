<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <div class="d-flex">
          <h2>Mon compte</h2>
          <ion-button @click="create" size="small" class="ion-margin-top"
            >Déconnexion</ion-button
          >
        </div>
      </div>
      <ion-card class="ion-padding">
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Nom de la communauté</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Description</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <div class="t-center">
          <ion-button @click="create" class="ion-margin-top">Créer</ion-button>
        </div>
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
  name: "Account",
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
    create() {
      this.$router.push({ path: "/account" });
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
</style>