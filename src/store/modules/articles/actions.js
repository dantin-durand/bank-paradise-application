import axios from "axios";
import { toastError } from "@/utils/toast";

export const articles = async ({ commit }) => {
  await axios
    .get(process.env.VUE_APP_API_URL + "/articles")
    .then((response) => {
      commit("articles", response.data.articlesList);
    })
    .catch(() => {});
};

export const article = async ({ commit }, id) => {
  await axios
    .get(`${process.env.VUE_APP_API_URL}/articles/${id}`)
    .then((response) => {
      commit("article", response.data.article);
    })
    .catch(() => {
      toastError("L'article n'existe pas");
    });
};
