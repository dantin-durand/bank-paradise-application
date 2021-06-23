<template>
  <form method="post" @submit.prevent="submit">
    <ion-item>
      <ion-label>Nom</ion-label>
      <ion-input v-model="name"></ion-input>
    </ion-item>
    <div id="card-element"></div>

    <ion-item>
      <ion-label>Code promo</ion-label>
      <ion-input v-model="coupon"></ion-input>
    </ion-item>

    <input type="hidden" v-model="payment_method" />

    <div class="ion-padding-top">
      <ion-button type="submit">Payer</ion-button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { IonItem, IonInput, IonLabel, IonButton } from "@ionic/vue";

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
      plan: "1",
      name: "",
      coupon: "",
      payment_method: "",
      payment_processing: false,
    };
  },
  props: ["card", "stripe", "secret", "token"],
  methods: {
    resetForm() {
      this.plan = 1;
      this.name = "";
      this.coupon = "";
      this.payment_method = "";
      this.payment_processing = false;
    },
    async submit() {
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
        console.log("error => ", error);
        // const toast = await toastController.create({
        //   message: error.message,
        //   duration: 2000,
        //   color: "danger",
        // });
        // return toast.present();
      } else {
        console.log(setupIntent);
        this.payment_method = setupIntent.payment_method;
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
            console.log(response.data);
            if (
              response.data.status &&
              response.data.status == "requires_action"
            ) {
              // Confirmation
              this.$emit("paymentMethod", this.payment_method);
              this.$emit("requiresAction", true);
              this.$emit("paymentIntent", response.data);
            } else {
              this.resetForm();
              this.$emit("paymentProcessed", true);
              this.$emit("messageProcessed", "Merci de votre abonnement ! 🤑");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
</style>