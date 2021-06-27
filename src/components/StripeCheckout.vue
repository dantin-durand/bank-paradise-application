<template>
  <form method="post" @submit.prevent="submit">
    <ion-item class="ion-no-padding">
      <ion-label position="floating">Nom</ion-label>
      <ion-input v-model="name"></ion-input>
    </ion-item>
    <div id="card-element"></div>

    <ion-item class="ion-no-padding">
      <ion-label position="floating">Code promo</ion-label>
      <ion-input v-model="coupon"></ion-input>
    </ion-item>

    <input type="hidden" v-model="payment_method" />
    <br />
    <div class="t-center">
      <ion-button type="submit" class="ion-margin-top">Payer</ion-button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import {
  IonItem,
  IonInput,
  IonLabel,
  IonButton,
  loadingController,
} from "@ionic/vue";
import { toastError, toastSuccess } from "@/utils/toast";

export default {
  name: "StripeCheckout",
  components: {
    IonInput,
    IonLabel,
    IonButton,
    IonItem,
  },
  data() {
    return {
      name: "",
      coupon: "",
      payment_method: "",
      payment_processing: false,
    };
  },

  props: ["card", "stripe", "secret", "token", "plan"],
  methods: {
    async loadingPayment() {
      const loading = await loadingController.create({
        message: "Paiement en cours...",
      });

      await loading.present();
    },
    resetForm() {
      this.name = "";
      this.coupon = "";
      this.payment_method = "";
      this.payment_processing = false;
    },
    async submit() {
      if (!this.name.length) {
        toastError("Vous devez saisir votre nom.");
        return;
      }
      const loading = await loadingController.create({
        message: "Paiement en cours...",
      });
      this.payment_processing = true;

      const { setupIntent, error } = await this.stripe.confirmCardSetup(
        this.secret,
        {
          payment_method: {
            card: this.card,
            billing_details: { name: this.name },
          },
        }
      );
      if (error) {
        toastError(error.message);
      } else {
        this.payment_method = setupIntent.payment_method;
        loading.present();
        await axios
          .post(
            `${process.env.VUE_APP_API_URL}/checkout/subscribe`,
            {
              plan: this.plan,
              name: this.name,
              payment_method: this.payment_method,
              coupon: this.coupon,
            },
            {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
            }
          )
          .then((response) => {
            if (
              response.data.status &&
              response.data.status == "requires_action"
            ) {
              // Confirmation
              this.$emit("paymentMethod", this.payment_method);
              this.$emit("requiresAction", true);
              this.$emit("paymentIntent", response.data);
            } else {
              // je veux dismiss ici
              loading.dismiss();
              this.$router.push({ name: "RegisterStep4" });
              toastSuccess("Abonnement réalisé avec succès");
            }
          })
          .catch((error) => {
            toastError(error.response.data);
            loading.dismiss();
          });
      }
    },
  },
};
</script>

<style scoped>
#card-element {
  padding: 40px 0px 10px;
}
form {
  padding: 20px 0px;
}
</style>