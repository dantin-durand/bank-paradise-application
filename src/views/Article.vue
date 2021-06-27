<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="header" :style="`background-image: url(${article.banner})`">
        <button class="back" @click="backtoNews"><span>‹</span> Retour</button>
        <h2>{{ article.title }}</h2>
      </div>
      <div class="container">
        <p class="date">{{ getDate(article.created_at) }}</p>
        <div v-html="article.body"></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { mapGetters } from "vuex";
export default {
  name: "News",
  components: {
    IonContent,
    IonPage,
  },
  data() {},
  computed: {
    ...mapGetters({ article: "articles/article" }),
  },
  mounted() {
    this.getArticle(this.$route.params.id);
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
    backtoNews() {
      this.$router.push({ path: "/articles" });
    },
    async getArticle(id) {
      this.$store.dispatch("articles/article", id);
    },
  },
  watch: {
    $route(to) {
      if (to.name === "article") {
        this.getArticle(this.$route.params.id);
      }
    },
  },
};
</script>
<style scoped>
.header {
  height: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
}
.header::after {
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
}
.date {
  color: var(--main-color);
}
.header {
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.back {
  background-color: transparent;
  z-index: 2;
}
.back > span {
  font-size: 20px;
}
h2 {
  width: 80%;
}
</style>