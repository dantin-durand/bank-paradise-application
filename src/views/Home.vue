<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="header__home">
        <img src="/assets/logo-white.svg" alt="bank paradise" />
        <h1>Gérez et automatisez vos transactions <span>roleplay</span></h1>
      </div>
      <div class="container">
        <h2>Administration et<br />gestion de la communauté</h2>
        <p>
          En tant que fondateur d'une communauté, vous avez la possibilité de
          contrôler et de supprimer des virements ou des membres.
        </p>
        <br />
        <img src="/assets/transactions.svg" alt="transactions" />
      </div>
      <Formules :path="'/authentication'" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";

import Formules from "@/components/Formules.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    IonPage,
    IonContent,
    Formules,
  },
});
</script>

<style scoped>
.header__home {
  clip-path: polygon(0 0, 100% 0%, 100% 86%, 0% 100%);
  min-height: 300px;
  background: linear-gradient(
    45deg,
    rgba(214, 16, 22, 1) 0%,
    rgba(246, 102, 107, 1) 100%
  );
  padding: 20px 40px;
}
.header__home h1 {
  color: #fff;
  font-family: var(--poppins);
  font-size: 25;
  font-weight: var(--poppins-semi-bold);
  line-height: 40px;
  text-shadow: 0px 3px 6px #00000032;
}
.header__home h1 > span {
  border-bottom: 5px solid #fff;
  text-transform: uppercase;
  font-weight: var(--poppins-bold);
}
</style>