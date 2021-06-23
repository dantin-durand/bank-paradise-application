import { createStore } from "vuex";
import auth from "./modules/auth";
import payment from "./modules/payment";

export default createStore({
  modules: {
    auth,
    payment,
  },
});
