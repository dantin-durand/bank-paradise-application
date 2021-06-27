<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Paramètres</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card class="ion-padding">
        <h2>Formulaire d'édition</h2>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Adresse mail</ion-label>
          <ion-input v-model="form.email"></ion-input>
        </ion-item>
        <div v-for="error of v$.form.email.$silentErrors" :key="error.$uid">
          <p class="error-message">{{ error.$message }}</p>
        </div>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Prénom RP</ion-label>
          <ion-input v-model="form.firstname"></ion-input>
        </ion-item>
        <div v-for="error of v$.form.firstname.$silentErrors" :key="error.$uid">
          <p class="error-message">{{ error.$message }}</p>
        </div>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Nom RP</ion-label>
          <ion-input v-model="form.lastname"></ion-input>
        </ion-item>
        <div v-for="error of v$.form.lastname.$silentErrors" :key="error.$uid">
          <p class="error-message">{{ error.$message }}</p>
        </div>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input type="password" v-model="form.password"></ion-input>
        </ion-item>
        <div v-for="error of v$.form.password.$silentErrors" :key="error.$uid">
          <p class="error-message">{{ error.$message }}</p>
        </div>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Confirmez le mot de passe</ion-label>
          <ion-input type="password" v-model="form.confirmPassword"></ion-input>
        </ion-item>
        <div
          v-for="error of v$.form.confirmPassword.$silentErrors"
          :key="error.$uid"
        >
          <p class="error-message">{{ error.$message }}</p>
        </div>
        <br />
        <ion-button @click="editUserInfo" class="ion-margin-top"
          >Mettre à jour</ion-button
        >
      </ion-card>
    </ion-content>
  </ion-page>
</template>


<script>
import useVuelidate from "@vuelidate/core";
import { mapGetters } from "vuex";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import {
  IonCard,
  IonLabel,
  IonInput,
  IonItem,
  IonButton,
  IonTitle,
  IonToolbar,
  IonContent,
  IonHeader,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { toastSuccess, toastError } from "@/utils/toast";

export default defineComponent({
  name: "Settings",
  components: {
    IonCard,
    IonLabel,
    IonInput,
    IonItem,
    IonButton,
    IonTitle,
    IonToolbar,
    IonContent,
    IonHeader,
    IonPage,
  },

  methods: {
    async editUserInfo() {
      if (this.v$.$invalid) {
        toastError("Vous devez remplir tout les champs.");
        return;
      }
      await this.$store
        .dispatch("auth/editUserInfo", this.form)
        .then((result) => {
          this.user = result.data.user;
          toastSuccess("Vos informations ont été mise à jour");
        })
        .catch(() => {
          toastError("Echec de la mise à jour");
        });
    },
    loadUserInfo() {
      this.form.email = this.userInfo.email;
      this.form.firstname = this.userInfo.firstname;
      this.form.lastname = this.userInfo.lastname;
    },
  },
  mounted() {
    this.loadUserInfo();
  },
  created() {
    if (!this.$store.getters["auth/token"]) {
      this.$router.push({ name: "authentication" });
      return;
    }
  },
  computed: {
    ...mapGetters({ userInfo: "auth/data" }),
  },
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        id: 0,
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
        password: { required, minLength: minLength(12) },
        confirmPassword: {
          required,
          sameAsPassword: sameAs(this.form.password),
        },
      },
    };
  },
});
</script>
