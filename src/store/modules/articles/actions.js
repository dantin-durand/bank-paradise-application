import axios from "axios";
import router from "../../../router";


export const articles = ({ commit }) => {
    await axios
    .get(process.env.VUE_APP_API_URL + "/news")
    .then((response) => {
      commit("articles", response.data);
    })
    .catch((error) => {
      const statusCode = error.response.status;
      console.log(statusCode);
    });
}