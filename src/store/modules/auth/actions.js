import axios from "axios";
import router from "../../../router";

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
    })
    .catch((error) => {
      // const statusCode = error.response.status;
      console.log(error);
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
    })
    .catch((error) => {
      console.log(error);
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
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editUserInfo = async ({ commit, state }, form) => {
  const config = {
    headers: {
      Authorization: `Bearer ${state.user.token}`,
    },
  };

  let params = {
    firstname: form.firstname,
    lastname: form.lastname,
    email: form.email,
    password: form.password,
  };

  await axios
    .put(process.env.VUE_APP_API_URL + "/user", params, config)
    .then((response) => {
      commit("user", response.data.user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const account = async ({ commit, state }) => {
  console.log("bisbkbvdkbvkdbvjdbvkdfbfbk");
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
    .catch((error) => {
      console.log(error);
    });
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
    })
    .catch(() => {});
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
