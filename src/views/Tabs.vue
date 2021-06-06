<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button tab="home" href="/home">
          <ion-icon src="/assets/icon/home.svg"></ion-icon>
          <ion-label>Accueil</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="contact" href="/contact">
          <ion-icon src="/assets/icon/contact.svg" />
          <ion-label>Contact</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="dashboard" href="">
          <ion-icon src="/assets/icon/banque.svg" />
          <ion-label>Banque</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="news" href="/news">
          <ion-icon src="/assets/icon/news.svg" />
          <ion-label>News</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="authentication" href="/authentication">
          <ion-icon src="/assets/icon/account.svg" />
          <ion-label>Compte</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { ellipse, square, triangle } from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse,
      square,
      triangle,
    };
  },
};
</script>