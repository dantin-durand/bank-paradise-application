<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <div class="progressbar">
          <div class="active"></div>
          <div class="active"></div>
          <div class="active"></div>
          <div></div>
        </div>
      </div>
      <ion-card class="ion-padding">
        <p>PRIX TTC</p>
        <h1>3.99€ <span>/mois</span></h1>

        <div class="stripe">stripe ici</div>
        <div class="t-center">
          <ion-button @click="payement" class="ion-margin-top"
            >Payer</ion-button
          >
        </div>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StepThree",
  components: {
    IonContent,
    IonPage,
    IonCard,
    IonButton,
  },
  methods: {
    payement() {
      this.$router.push({ path: "/register/4" });
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