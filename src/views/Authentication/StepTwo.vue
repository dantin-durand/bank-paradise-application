<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <div class="progressbar">
          <div class="active"></div>
          <div class="active"></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Formules :path="'/register/3'" />
    </ion-content>
  </ion-page>
</template>

<script>
import Formules from "@/components/Formules.vue";
import { IonPage, IonContent } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StepTwo",
  components: {
    IonContent,
    IonPage,
    Formules,
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
</style>