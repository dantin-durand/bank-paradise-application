<template>
  <ion-page>
    <ion-header>
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
      <Login :currentform="currentform" v-if="currentform === 'login'" />
      <Register :currentform="currentform" v-else />
    </ion-content>
  </ion-page>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonSegmentButton,
  IonSegment,
  IonToolbar,
  IonHeader,
} from "@ionic/vue";
import Login from "./Login/Login.vue";
import Register from "./Register/Register.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "News",
  components: {
    Login,
    Register,
    IonContent,
    IonPage,
    IonLabel,
    IonSegmentButton,
    IonSegment,
    IonToolbar,
    IonHeader,
  },
  data() {
    return {
      form: {
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        password2: "",
      },
      currentform: "login",
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      form: {
        email: { required, email },
        firstname: { required },
        lastname: { required },
        password: { required, minLength: minLength(12) },
        confirmPassword: { required, sameAsPassword: sameAs("password") },
      },
    };
  },
  created() {
    if (!this.$store.getters["auth/token"]) {
      console.log("echec d'authentification");
    } else {
      console.log("authentification avec succès");
      this.$router.push({ path: "/account" });
    }
  },

  methods: {
    segmentChanged(event) {
      this.currentform = event.detail.value;
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
/* ion-card {
  animation: fadeIn 0.5s forwards ease;
} */
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