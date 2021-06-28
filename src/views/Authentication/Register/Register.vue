<template>
  <ion-card class="ion-padding">
    <h2>Inscription</h2>
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Adresse mail</ion-label>
      <ion-input v-model="form.email" autocomplete="email"></ion-input>
    </ion-item>
    <div v-for="error of v$.form.email.$silentErrors" :key="error.$uid">
      <p class="error-message">{{ error.$message }}</p>
    </div>
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Prénom RP</ion-label>
      <ion-input v-model="form.firstname" autocomplete="firstname"></ion-input>
    </ion-item>
    <div v-for="error of v$.form.firstname.$silentErrors" :key="error.$uid">
      <p class="error-message">{{ error.$message }}</p>
    </div>
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Nom RP</ion-label>
      <ion-input v-model="form.lastname" autocomplete="lastname"></ion-input>
    </ion-item>
    <div v-for="error of v$.form.lastname.$silentErrors" :key="error.$uid">
      <p class="error-message">{{ error.$message }}</p>
    </div>
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Mot de passe</ion-label>
      <ion-input
        type="password"
        v-model="form.password"
        autocomplete="password"
      ></ion-input>
    </ion-item>
    <div v-for="error of v$.form.password.$silentErrors" :key="error.$uid">
      <p class="error-message">{{ error.$message }}</p>
    </div>
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Confirmez le mot de passe</ion-label>
      <ion-input
        type="password"
        v-model="form.confirmPassword"
        autocomplete="confirm_password"
      ></ion-input>
    </ion-item>
    <div
      v-for="error of v$.form.confirmPassword.$silentErrors"
      :key="error.$uid"
    >
      <p class="error-message">{{ error.$message }}</p>
    </div>
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
import { toastError } from "@/utils/toast";
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
      if (this.v$.$invalid) {
        toastError("Vous devez remplir tout les champs.");
        return;
      }
      await this.$store.dispatch("auth/register", this.form).then(() => {
        if (this.$store.getters["auth/step"] > 0) {
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
        confirmPassword: "",
      },
    };
  },
  validations() {
    return {
      form: {
        email: { required, email },
        firstname: { required },
        lastname: { required },
        password: { required, minLength: minLength(8) },
        confirmPassword: { required, sameAs: sameAs(this.form.password) },
      },
    };
  },
});
</script>