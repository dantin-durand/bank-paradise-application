<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <div class="progressbar">
          <div class="active"></div>
          <div class="active"></div>
          <div class="active"></div>
          <div class="active"></div>
        </div>
      </div>
      <h1 class="t-center">Création de la communauté</h1>
      <ion-card class="ion-padding">
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Nom de la communauté</ion-label>
          <ion-input v-model="form.name"></ion-input>
          <div
            class="input-errors"
            v-for="error of v$.form.name.$errors"
            :key="error.$uid"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </ion-item>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Description</ion-label>
          <ion-input v-model="form.description"></ion-input>
          <div
            class="input-errors"
            v-for="error of v$.form.description.$errors"
            :key="error.$uid"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </ion-item>
        <div class="t-center">
          <ion-button @click="createCommunity" class="ion-margin-top"
            >Créer</ion-button
          >
        </div>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
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
  name: "StepThree",
  components: {
    IonContent,
    IonPage,
    IonCard,
    IonLabel,
    IonInput,
    IonItem,
    IonButton,
  },
  data() {
    return {
      form: {
        name: "",
        description: "",
      },
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      form: {
        name: { required },
        description: { required },
      },
    };
  },
  methods: {
    async createCommunity() {
      if (this.form.password !== this.form.password2) return;
      await this.$store.dispatch("auth/community", this.form).then(() => {
        this.$router.push({ path: "/account" });
      });
    },
  },
});
</script>

<style scoped>
.progressbar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  position: fixed;
  width: 100vw;
  padding: 20px 50px;
  left: 0;
  top: 0;
  z-index: 5;
  background-color: #fff;
  box-shadow: 0px 3px 8px #00000019;
}
.progressbar div {
  height: 11px;
  width: 100%;
  border: 1px solid var(--main-color);
  border-radius: 20px;
}
.progressbar div[class="active"] {
  background-color: var(--main-color);
}

h1,
p {
  margin: 0px;
}

.stripe {
  height: 100px;
  width: 100%;
  background-color: #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>