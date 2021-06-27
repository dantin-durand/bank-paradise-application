import axios from "axios";
import { toastError } from "@/utils/toast";

export const articles = async ({ commit }) => {
  await axios
    .get(process.env.VUE_APP_API_URL + "/articles")
    .then((response) => {
      commit("articles", response.data.articlesList);
    })
    .catch((error) => {
      const statusCode = error.response.status;
      console.log(statusCode);
    });
};

export const article = async ({ commit }, id) => {
  await axios
    .get(`${process.env.VUE_APP_API_URL}/articles/${id}`)
    .then((response) => {
      commit("article", response.data.article);
    })
    .catch((error) => {
      const statusCode = error.response.status;
      console.log(statusCode);
      toastError("L'article n'existe pas");
    });
};
