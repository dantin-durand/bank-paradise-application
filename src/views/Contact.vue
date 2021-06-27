<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="container">
        <h1>Nous contacter</h1>
        <p>
          Nous restons disponible par mail ou téléphone pour toue demandes,
          aide.
        </p>
        <form action="">
          <ion-item>
            <ion-label position="floating">Nom*</ion-label>
            <ion-input v-model="form.lastname"></ion-input>
          </ion-item>
          <div
            v-for="error of v$.form.lastname.$silentErrors"
            :key="error.$uid"
          >
            <p class="error-message">{{ error.$message }}</p>
          </div>
          <ion-item>
            <ion-label position="floating">Prénom*</ion-label>
            <ion-input v-model="form.firstname"></ion-input>
          </ion-item>
          <div
            v-for="error of v$.form.firstname.$silentErrors"
            :key="error.$uid"
          >
            <p class="error-message">{{ error.$message }}</p>
          </div>
          <ion-item>
            <ion-label position="floating">Adresse Mail*</ion-label>
            <ion-input v-model="form.email"></ion-input>
          </ion-item>
          <div v-for="error of v$.form.email.$silentErrors" :key="error.$uid">
            <p class="error-message">{{ error.$message }}</p>
          </div>
          <ion-item>
            <ion-label position="floating">Objet</ion-label>
            <ion-input v-model="form.object"></ion-input>
          </ion-item>
          <div v-for="error of v$.form.object.$silentErrors" :key="error.$uid">
            <p class="error-message">{{ error.$message }}</p>
          </div>
          <ion-item>
            <ion-label position="floating">Message</ion-label>
            <ion-textarea
              v-model="form.body"
              placeholder="Message"
              rows="6"
            ></ion-textarea>
          </ion-item>
          <div v-for="error of v$.form.body.$silentErrors" :key="error.$uid">
            <p class="error-message">{{ error.$message }}</p>
          </div>

          <ion-button
            @click.prevent="sendCustomerCareMail"
            class="ion-margin-top"
            >Envoyer</ion-button
          >
        </form>
        <div class="contact">
          <ul>
            <li>
              <ion-icon :icon="map"></ion-icon>
              <p>{{ contactInfo.address }}</p>
            </li>
            <li>
              <ion-icon :icon="call"></ion-icon>
              <p>{{ contactInfo.phone }}</p>
            </li>
            <li>
              <ion-icon :icon="mail"></ion-icon>
              <p>{{ contactInfo.email }}</p>
            </li>
          </ul>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.356464221063!2d2.360851416019276!3d48.870480779288705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0950555883%3A0x25e6ea66d950d9ec!2s19%20Rue%20Yves%20Toudic%2C%2075010%20Paris!5e0!3m2!1sfr!2sfr!4v1622667036116!5m2!1sfr!2sfr"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { mapGetters } from "vuex";
import { toastError } from "@/utils/toast";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonInput,
  IonItem,
  IonTextarea,
  IonButton,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import { map, call, mail } from "ionicons/icons";

export default {
  name: "Contact",
  components: {
    IonPage,
    IonContent,
    IonLabel,
    IonInput,
    IonItem,
    IonTextarea,
    IonButton,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  setup() {
    return {
      map,
      call,
      mail,
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      form: {
        object: "",
        firstname: "",
        lastname: "",
        email: "",
        body: "",
      },
    };
  },
  computed: {
    ...mapGetters({ contactInfo: "services/contactInfo" }),
  },
  validations() {
    return {
      form: {
        object: { required },
        firstname: { required },
        lastname: { required },
        email: { required, email },
        body: { required },
      },
    };
  },
  mounted() {
    this.getContactInfo();
  },
  methods: {
    getContactInfo() {
      this.$store.dispatch("services/customerCareInfo");
    },
    sendCustomerCareMail() {
      if (this.v$.$invalid) {
        toastError("Vous devez remplir tout les champs.");
        return;
      }
      this.$store.dispatch("services/customerCare", this.form);
      this.resetFields();
    },
    resetFields() {
      this.form.object = "";
      this.form.firstname = "";
      this.form.lastname = "";
      this.form.email = "";
      this.form.body = "";
    },
  },
};
</script>
<style scoped>
ion-item {
  --padding-start: 0px;
}
ion-icon {
  margin-top: 5px;
  color: var(--main-color) !important;
}

ul {
  list-style: none;
  padding: 20px 0px;
}
li {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}
p {
  margin: 0;
}
iframe {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
}
</style>