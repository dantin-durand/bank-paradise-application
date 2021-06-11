<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header>
        <img src="/assets/logo.svg" alt="offline" />
      </header>
      <div>
        <img src="/assets/icon/offline.svg" alt="offline" />
        <p>Vous êtes hors ligne.</p>

        <ion-button @click="reload" class="ion-margin-top"
          >Réessayer</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonButton } from "@ionic/vue";

export default {
  name: "Offline",
  components: {
    IonContent,
    IonPage,
    IonButton,
  },
  methods: {
    reload() {
      window.location.href = "/";
    },
  },
};
</script>

<style>
header > img {
  width: 105px;
}
div > img {
  width: 56px;
}
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 20px;
}
div {
  height: 100vh;
  widows: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>