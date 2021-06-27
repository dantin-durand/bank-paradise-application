import { createStore } from "vuex";
import auth from "./modules/auth";
import services from "./modules/services";
import articles from "./modules/articles";
import payment from "./modules/payment";

export default createStore({
  modules: {
    auth,
    services,
    articles,
    payment,
  },
});
