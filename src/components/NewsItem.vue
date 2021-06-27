<template>
  <ion-card @click="openNews" :style="`background: url(${article.banner})`">
    <div>
      <p>{{ getDate(article.created_at) }}</p>
      <h2>{{ article.title }}</h2>
    </div>
  </ion-card>
</template>

<script>
import { IonCard } from "@ionic/vue";

export default {
  name: "NewsItem",
  components: { IonCard },
  props: {
    article: {
      id: 0,
      banner: "",
      created_at: "",
      title: "",
    },
  },
  methods: {
    getDate(date) {
      function AddZero(val) {
        // adding 0 if the value is a single digit
        return `0${val}`.slice(-2);
      }

      const formatedDate = new Date(date);
      const year = formatedDate.getFullYear();
      const month = AddZero(formatedDate.getMonth());
      const day = formatedDate.getDate();
      return `${day}/${month}/${year}`;
    },
    openNews() {
      this.$router.push({ name: "article", params: { id: this.article.id } });
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