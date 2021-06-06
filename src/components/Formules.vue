<template>
  <section>
    <h1 class="t-center">Formules</h1>
    <ion-card>
      <ion-card-content>
        <h1 class="t-center">1.99€</h1>
        <p>Nouvel arrivant</p>
        <div class="formule_spacer"></div>
        <ul>
          <li>Jusqu'à <strong>10 membres</strong></li>
          <li>Transactions <strong>illimitées</strong></li>
          <li>Historique des transactions</li>
        </ul>
        <div class="t-center">
          <ion-button @click="changePage">Sélectionner</ion-button>
        </div>
      </ion-card-content>
    </ion-card>
    <ion-card class="recommanded">
      <ion-card-content>
        <h1 class="t-center">3.99€</h1>
        <p>Communauté</p>
        <div class="formule_spacer"></div>
        <ul>
          <li>Jusqu'à <strong>30 membres</strong></li>
          <li>Transactions <strong>illimitées</strong></li>
          <li>Historique des transactions</li>
          <li>
            <strong>3 Comptes entreprises</strong> par <strong>membre</strong>
          </li>
        </ul>
        <div class="t-center">
          <ion-button @click="changePage">Sélectionner</ion-button>
        </div>
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-content>
        <h1 class="t-center">5.99€</h1>
        <p>Évasion</p>
        <div class="formule_spacer"></div>
        <ul>
          <li>Membres<strong>illimités</strong></li>
          <li>Transactions <strong>illimitées</strong></li>
          <li>Transactions <strong>Extracommunautaires</strong></li>
          <li>Historique des transactions</li>
          <li>Compte entreprise <strong>illimité</strong></li>
        </ul>

        <div class="t-center">
          <ion-button @click="changePage">Sélectionner</ion-button>
        </div>
      </ion-card-content>
    </ion-card>
  </section>
</template>

<script>
import { IonCard, IonCardContent, IonButton } from "@ionic/vue";

export default {
  name: "Formules",
  components: { IonCard, IonCardContent, IonButton },
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  methods: {
      changePage() {
          this.$router.push({path: this.path})
      }
  }
};
</script>

<style scoped>
section {
  padding: 20px;
}
p {
  font-family: var(--poppins);
  font-weight: var(--poppins-light);
  text-align: center;
  font-size: 14px;
  line-height: 18px;
}
.formule_spacer {
  height: 1px;
  width: 170px;
  background: #000;
  margin: 10px auto;
}

ul {
  padding: 20px 20px 40px;
}
strong {
  color: var(--main-color);
}

.recommanded {
  border: 2px solid var(--main-color);
}

.recommanded::before {
  content: "Recommandé";
  display: block;
  position: absolute;
  font-family: var(--poppins);
  top: 0;
  left: 0;
  background-color: var(--main-color);
  padding: 3px 10px;
  color: #fff;
  z-index: -1;
  font-size: 12px;
  border-radius: 0px 0px 10px 0px;
}
</style>