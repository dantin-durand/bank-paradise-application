<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <div class="progressbar">
          <div class="active"></div>
          <div class="active"></div>
          <div class="active"></div>
          <div></div>
        </div>
      </div>
      <ion-card class="ion-padding">
        <p>PRIX TTC</p>
        <h1 v-if="plan.id">{{ plan.price }}€ <span>/mois</span></h1>
        <h1 v-else>
          <ion-skeleton-text animated style="height: 40px"></ion-skeleton-text>
        </h1>

        <StripeCheckout
          v-if="!requires_action && !payment_processed"
          :card="card"
          :stripe="stripe"
          :secret="secret"
          :token="token"
          :plan="plan.id"
        />
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonSkeletonText } from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";
import StripeCheckout from "../../components/StripeCheckout.vue";

export default defineComponent({
  name: "StepThree",
  components: {
    IonContent,
    IonPage,
    IonCard,

    IonSkeletonText,
    StripeCheckout,
  },
  data() {
    return {
      plan: {},
      secret: null,
      stripe: null,
      payment_method: null,
      requires_action: null,
      payment_intent: null,
      card: null,
      payment_processed: false,
      token: null,
    };
  },
  created() {
    if (!this.$store.getters["auth/token"]) {
      return this.$router.push({ name: "authentication" });
    }

    this.$store.dispatch("payment/plans").then(() => {
      const plans = this.$store.getters["payment/plans"];
      console.log("plans =>", plans);
      console.log("formule =>", this.$route.query.formule);
      let plansFilter = [];
      plansFilter = plans.filter(
        (plan) => plan.id === Number(this.$route.query.formule)
      );
      console.log("PLANS_FILTER =>", plansFilter);
      if (plansFilter.length === 0) {
        this.$router.push({ name: "RegisterStep2" });
      } else {
        this.plan = plansFilter[0];
        console.log(this.plan.id);
      }
    });
  },

  mounted() {
    this.stripe = window.Stripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY);
    const elements = this.stripe.elements();
    this.card = elements.create("card", {
      iconStyle: "solid",
      style: {
        base: {
          iconColor: "#d61016",
          color: "#000",
          fontWeight: 500,
          fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
          fontSize: "16px",
          fontSmoothing: "antialiased",

          ":-webkit-autofill": {
            color: "#d61016",
          },
          "::placeholder": {
            color: "#000",
          },
        },
        invalid: {
          iconColor: "#eb1c26",
          color: "#eb1c26",
        },
      },
    });
    this.card.mount("#card-element");
    this.token = this.$store.getters["auth/token"];
    axios
      .post(`${process.env.VUE_APP_API_URL}/checkout/intent`, null, {
        headers: {
          Authorization: `Bearer ${this.$store.getters["auth/token"]}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.secret = response.data.client_secret;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    payement() {
      this.$router.push({ path: "/register/4" });
    },
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

h1,
p {
  margin: 0px;
}

.stripe {
  height: 100px;
  width: 100%;
  background-color: #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>