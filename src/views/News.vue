<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>News</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <h1>News</h1>
      <div class="newslist container">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
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
} from "@ionic/vue";
import NewsItem from "@/components/NewsItem.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "News",
  components: {
    NewsItem,
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
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