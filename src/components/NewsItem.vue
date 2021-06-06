<template>
  <ion-card
    @click="openNews"
    style="background: url('https://via.placeholder.com/200x250')"
  >
    <div>
      <p>20/04/2021</p>
      <h2>Mise en place d'un chat</h2>
    </div>
  </ion-card>
</template>

<script>
import { IonCard } from "@ionic/vue";

export default {
  name: "NewsItem",
  components: { IonCard },
  methods: {
    openNews() {
      this.$router.push({ path: "/news/1" });
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 16px !important;
  color: #fff;
  padding: 0px;
  margin: 0px !important;
}

p {
  font-size: 15px !important;
  color: #fff;
  margin: 0px !important;
}

ion-card {
  margin: 0px;
  position: relative;
  padding: 10px;
  height: 200px;
  display: flex;
  align-items: flex-end;
  background-position: center !important;
  background-size: cover !important;
}

ion-card::before {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  content: "";
  background: linear-gradient(
    0deg,
    rgba(214, 16, 23, 0.297) 0%,
    rgba(214, 16, 22, 0) 100%
  );
  position: absolute;
  z-index: -1;
}
</style>