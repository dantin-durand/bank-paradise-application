import axios from "axios";
// import router from "../../../router";

export const plans = async ({ commit }) => {
  await axios
    .get(process.env.VUE_APP_API_URL + "/checkout/plans")
    .then((response) => {
      commit("plans", response.data);
    })
    .catch(() => {
    });
};
