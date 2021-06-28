import axios from "axios";
import router from "../../../router";
import { toastSuccess, toastError } from "@/utils/toast";

export const login = async ({ commit }, form) => {
  let params = {
    email: form.email,
    password: form.password,
    device_name: "vue",
  };

  await axios
    .post(process.env.VUE_APP_API_URL + "/auth/login", params)
    .then((response) => {
      commit("token", response.data.token);
      commit("step", response.data.current_step);
      toastSuccess("Connexion réussie ! ");
    })
    .catch(() => {
      toastError("Mauvais identifiants de connexion");
    });
};

export const register = async ({ commit }, form) => {
  let params = {
    email: form.email,
    password: form.password,
    firstname: form.firstname,
    lastname: form.lastname,
    device_name: "bank-paradise-application",
  };

  await axios
    .post(process.env.VUE_APP_API_URL + "/auth/register", params)
    .then((response) => {
      commit("token", response.data.token);
      commit("step", response.data.current_step);
      toastSuccess("Compte créé !");
    })
    .catch(() => {
      toastError("L'inscription à échouée !");
    });
};

export const community = async ({ commit, state }, form) => {
  const config = {
    headers: {
      Authorization: `Bearer ${state.user.token}`,
    },
  };

  let params = {
    name: form.name,
    description: form.description,
  };
  await axios
    .post(process.env.VUE_APP_API_URL + "/community", params, config)
    .then((response) => {
      commit("community", response.data.community);
      toastSuccess("Communauté créé !");
    })
    .catch(() => {
      toastError("Création de la communauté à échouée");
    });
};

export const editUserInfo = async ({ commit, state }, form) => {
  console.log(commit);
  const config = {
    headers: {
      Authorization: `Bearer ${state.user.token}`,
    },
  };

  const params = {
    firstname: form.firstname,
    lastname: form.lastname,
    email: form.email,
    password: form.password,
  };

  await axios
    .put(process.env.VUE_APP_API_URL + "/user", params, config)
    .then(() => {
      router.push({ name: "account" });
      toastSuccess("Vos informations ont été mise à jour");
    })
    .catch(() => {
      toastError("Echec de la mise à jour");
    });
};

export const account = async ({ commit, state }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${state.user.token}`,
    },
  };

  await axios
    .post(process.env.VUE_APP_API_URL + "/auth/account", null, config)
    .then((response) => {
      commit("data", ...response.data);
    })
    .catch(() => {});
};

export const logout = ({ commit, state }) => {
  if (!state.user.token) return;
  const config = {
    headers: { Authorization: `Bearer ${state.user.token}` },
  };

  axios
    .post(process.env.VUE_APP_API_URL + "/auth/logout", null, config)
    .then(() => {
      commit("token", "");
      commit("data", {});
      commit("subscription", {
        stripe_url: "",
        plan: {
          name: "",
          price: "",
          created_at: "",
          ends_at: null,
        },
      });
      router.push({ name: "authentication" });
      toastSuccess("Déconnecté !");
    })
    .catch(() => {
      toastError("La déconnexion à échouée !");
    });
};

export const getSubscription = async ({ commit, state }) => {
  if (!state.user.token) return;
  const config = {
    headers: { Authorization: `Bearer ${state.user.token}` },
  };
  await axios
    .get(process.env.VUE_APP_API_URL + "/auth/getsubscription", config)
    .then((response) => {
      commit("subscription", response.data);
      return response.data;
    })
    .catch(() => {});
};
