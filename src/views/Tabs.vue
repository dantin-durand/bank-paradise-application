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

        <ion-tab-button tab="dashboard" @click="openinNewTab">
          <ion-icon src="/assets/icon/banque.svg" />
          <ion-label>Banque</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="articles" href="/articles">
          <ion-icon src="/assets/icon/news.svg" />
          <ion-label>News</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="account" href="/account">
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
  methods: {
    openinNewTab() {
      window.location = "http://bank-paradise-site.herokuapp.com/dashboard";
    },
  },
};
</script>

<style scoped>
ion-tab-button {
  --background-focused: var(--main-color);
  --color-selected: var(--main-color);
}
</style>