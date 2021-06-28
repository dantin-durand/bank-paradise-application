import axios from "axios";
// import router from "../../../router";
import { toastSuccess, toastError } from "@/utils/toast";

export const plans = async ({ commit }) => {
  await axios
    .get(process.env.VUE_APP_API_URL + "/checkout/plans")
    .then((response) => {
      commit("plans", response.data);
    })
    .catch(() => {});
};

export const customerCare = async ({ commit }, form) => {
  console.log(commit);

  let params = {
    object: form.object,
    email: form.email,
    lastname: form.lastname,
    firstname: form.firstname,
    body: form.body,
  };

  await axios
    .post(process.env.VUE_APP_API_URL + "/customerCare", params)
    .then(() => {
      toastSuccess("Email envoyé au service client");
    })
    .catch(() => {
      toastError("Email non envoyé");
    });
};

export const customerCareInfo = async ({ commit }) => {
  await axios
    .get(process.env.VUE_APP_API_URL + "/customerCareInfo")
    .then((response) => {
      commit("customerCareInfo", response.data.configs);
    });
};
