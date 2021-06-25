<template>
  <ion-card class="ion-padding">
    <h2>Inscription</h2>
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Adresse mail</ion-label>
      <ion-input v-model="form.email"></ion-input>
    </ion-item>
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Prénom RP</ion-label>
      <ion-input v-model="form.firstname"></ion-input>
    </ion-item>
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Nom RP</ion-label>
      <ion-input v-model="form.lastname"></ion-input>
    </ion-item>
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Mot de passe</ion-label>
      <ion-input type="password" v-model="form.password"></ion-input>
    </ion-item>
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Confirmez le mot de passe</ion-label>
      <ion-input type="password" v-model="form.password2"></ion-input>
    </ion-item>
    <br />
    <ion-button @click="register" class="ion-margin-top"
      >Inscription</ion-button
    >
  </ion-card>
</template>


<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { IonCard, IonLabel, IonInput, IonItem, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Register",
  components: {
    IonCard,
    IonLabel,
    IonInput,
    IonItem,
    IonButton,
  },
  methods: {
    async register() {
      if (this.form.password !== this.form.password2) return;
      await this.$store.dispatch("auth/register", this.form).then(() => {
        if (!this.$store.getters["auth/token"]) {
          console.log("echec d'authentification");
        } else if (this.$store.getters["auth/step"] > 0) {
          this.$router.push({
            name: `RegisterStep${this.$store.getters["auth/step"]}`,
          });
        } else {
          this.$router.push({ name: "account" });
        }
      });
    },
  },
  setup() {
    return { v$: useVuelidate() };
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
    };
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
});
</script>