<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  watch: {
    $route(to, from) {
      if (to.name === "account" || from.name === "account") {
        if (!this.$store.getters["auth/token"]) {
          this.$router.push({ name: "authentication" });
        } else {
          this.$store.dispatch("auth/account");
          this.$store.dispatch("auth/getSubscription");
        }
      }
    },
  },
});
</script>

<style>
.t-center {
  text-align: center;
}
h1 {
  font-family: var(--poppins);
  font-weight: var(--poppins-bold) !important;
  color: var(--main-color);
  font-size: 30px !important;
  line-height: 30px;
}
h2 {
  font-family: var(--poppins);
  font-weight: var(--poppins-bold) !important;
  color: var(--main-color);
  font-size: 20px !important;
  line-height: 30px;
}
.container {
  padding: 40px;
}

p {
  font-family: var(--poppins);
  font-weight: var(--poppins-medium);
  font-size: 16px;
  line-height: 27px;
}
ion-button {
  --background: var(--main-color);
  --background-activated: #9b0e13;
}
.error-message {
  color: #d32727;
  font-size: 14px;
}
</style>