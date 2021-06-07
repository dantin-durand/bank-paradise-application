<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div
        class="header"
        style="background-image: url('https://via.placeholder.com/200x400')"
      >
        <button class="back" @click="backtoNews"><span>‹</span> Retour</button>
        <h2>Mise en place d'un chat</h2>
      </div>
      <div class="container">
        <p class="date">20/04/2021 à 18h00</p>
        <p>
          Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii
          montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus
          Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae
          coniunxit. Quam ob rem ut ii qui superiores sunt submittere se debent
          in amicitia, sic quodam modo inferiores extollere. Sunt enim quidam
          qui molestas amicitias faciunt, cum ipsi se contemni putant; quod non
          fere contingit nisi iis qui etiam contemnendos se arbitrantur; qui hac
          opinione non modo verbis sed etiam opere levandi sunt. Dum haec in
          oriente aguntur, Arelate hiemem agens Constantius post theatralis
          ludos atque circenses ambitioso editos apparatu diem sextum idus
          Octobres, qui imperii eius annum tricensimum terminabat, insolentiae
          pondera gravius librans, siquid dubium deferebatur aut falsum, pro
          liquido accipiens et conperto, inter alia excarnificatum Gerontium
          Magnentianae comitem partis exulari maerore multavit.
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";

export default {
  name: "News",
  components: {
    IonContent,
    IonPage,
  },
  methods: {
    backtoNews() {
      this.$router.push({ path: "/articles" });
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