<template>
  <ion-card class="ion-padding">
    <h2>Connexion</h2>
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Adresse mail*</ion-label>
      <ion-input v-model="form.email"></ion-input>
    </ion-item>
    <div v-for="error of v$.form.email.$silentErrors" :key="error.$uid">
      <p class="error-message">{{ error.$message }}</p>
    </div>
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Mot de passe*</ion-label>
      <ion-input type="password" v-model="form.password"></ion-input>
    </ion-item>
    <div v-for="error of v$.form.password.$silentErrors" :key="error.$uid">
      <p class="error-message">{{ error.$message }}</p>
    </div>
    <br />
    <ion-button @click="login" class="ion-margin-top">Connexion</ion-button>
  </ion-card>
</template>



<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { IonCard, IonLabel, IonInput, IonItem, IonButton } from "@ionic/vue";
import { toastError } from "@/utils/toast";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  components: {
    IonCard,
    IonLabel,
    IonInput,
    IonItem,
    IonButton,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      form: {
        email: { required, email },
        password: { required, minLength: minLength(8) },
      },
    };
  },
  methods: {
    async login() {
      if (this.v$.$invalid) {
        toastError("Vous devez remplir tout les champs.");
        return;
      }
      await this.$store.dispatch("auth/login", this.form).then(() => {
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
});
</script>
