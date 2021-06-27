import { toastController } from "@ionic/vue";

export const toastError = async (message) => {
  const toast = await toastController.create({
    message: message,
    duration: 2000,
    color: "danger",
  });
  return toast.present();
};

export const toastSuccess = async (message) => {
  const toast = await toastController.create({
    message: message,
    duration: 2000,
    color: "success",
  });
  return toast.present();
};
