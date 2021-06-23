<template>
  <ion-page>
    <ion-content :fullscreen="true" v-if="user.id">
      <div class="container">
        <div class="d-flex">
          <h2>Mon compte</h2>

          <ion-button
            @click.prevent="logout"
            size="small"
            class="ion-margin-top secondary-btn"
            >Déconnexion</ion-button
          >
        </div>
      </div>
      <ion-card class="ion-padding">
        <h3>Informations</h3>
        <p>Adresse mail: {{ user.email }}</p>
        <p>Nom RP: {{ user.lastname }}</p>
        <p>Prénom RP: {{ user.firstname }}</p>
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
    <ion-content v-else>
      <div class="container">
        <div class="d-flex">
          <ion-skeleton-text
            animated
            style="width: 150px; height: 40px"
          ></ion-skeleton-text>
        </div>
      </div>
      <ion-card class="ion-padding">
        <ion-skeleton-text
          animated
          style="width: 50%; height: 20px"
        ></ion-skeleton-text>
        <p>
          <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 30%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 40%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
        <ion-skeleton-text
          animated
          style="width: 90px; height: 40px"
        ></ion-skeleton-text>
      </ion-card>
      <ion-card class="ion-padding">
        <ion-skeleton-text
          animated
          style="width: 60%; height: 20px"
        ></ion-skeleton-text>
        <p>
          <ion-skeleton-text animated style="width: 100%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 90%"></ion-skeleton-text>
        </p>
        <ion-skeleton-text
          animated
          style="width: 150px; height: 40px"
        ></ion-skeleton-text>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonCard,
  IonButton,
  IonSkeletonText,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "Account",
  components: {
    IonContent,
    IonPage,
    IonCard,
    IonButton,
    IonSkeletonText,
  },
  computed: {
    ...mapGetters({ user: "auth/data" }),
  },
  created() {
    if (!this.$store.getters["auth/token"]) {
      this.$router.push({ name: "authentication" });
    } else {
      this.$store.dispatch("auth/account");
    }
  },
  methods: {
    ...mapActions({ logout: "auth/logout" }),
  },
});
</script>

<style scoped>
.d-flex {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;
}
.secondary-btn {
  --background: transparent;
  --color: var(--main-color);
  border: 1px solid var(--main-color);
  border-radius: 8px;
}
.container {
  padding: 20px 30px;
}
</style>