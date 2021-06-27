<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>News</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <h1>News</h1>
      <div class="newslist container" v-if="articles.length">
        <NewsItem
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
      <div class="newslist container" v-else>
        <ion-skeleton-text
          v-for="index in 10"
          :key="index"
          animated
          style="height: 200px"
        ></ion-skeleton-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSkeletonText,
} from "@ionic/vue";
import NewsItem from "@/components/NewsItem.vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "News",
  components: {
    NewsItem,
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonSkeletonText,
  },
  mounted() {
    this.getArticles();
  },
  computed: {
    ...mapGetters({ articles: "articles/articles" }),
  },
  methods: {
    async getArticles() {
      await this.$store.dispatch("articles/articles");
    },
  },
});
</script>
<style scoped>
.newslist {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 10px;
}
h1 {
  padding: 20px 40px 0px;
}
</style>