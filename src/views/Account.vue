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
        <ion-button @click="goToUserEdition" class="ion-margin-top"
          >Modifier</ion-button
        >
      </ion-card>
      <ion-card v-if="subscription.stripe_url" class="ion-padding">
        <h3>Abonnemment</h3>
        <p>
          Formule actuelle: {{ subscription.plan.name }} ({{
            subscription.plan.price
          }})
        </p>
        <p>Depuis le: {{ subscription.plan.created_at }}</p>
        <p v-if="subscription.plan.ends_at">
          Prend fin le: {{ subscription.plan.ends_at }}
        </p>
        <ion-button
          class="ion-margin-top"
          @click.prevent="openStripe(subscription.stripe_url)"
          >Changer de formule</ion-button
        >
      </ion-card>
      <ion-card v-else class="ion-padding">
        <ion-button
          @click.prevent="goToSubscription"
          class="ion-margin-top secondary-btn"
          size="small"
          >Souscrire à un abonnement</ion-button
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
// import useVuelidate from "@vuelidate/core";
// import { required, email, minLength, sameAs } from "@vuelidate/validators";
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

  data() {
    return {
      userHasSubscribed: false,
    };
  },
  computed: {
    ...mapGetters({ user: "auth/data", subscription: "auth/subscription" }),
  },
  mounted() {
    if (this.user.stripe_id) {
      this.userHasSubscribed = true;
    }
  },
  created() {
    if (!this.$store.getters["auth/token"]) {
      this.$router.push({ name: "authentication" });
    } else {
      this.$store.dispatch("auth/account");
      this.$store.dispatch("auth/getSubscription");
    }
  },
  methods: {
    ...mapActions({ logout: "auth/logout" }),
    openStripe(stripe_url) {
      window.location = stripe_url;
    },
    goToSubscription() {
      this.$router.push({ name: "RegisterStep2" });
    },
    goToUserEdition() {
      this.$router.push({ name: "Settings" });
    },
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