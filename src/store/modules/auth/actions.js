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
      console.log(response.data);
      // this.$router.push({ path: "/account" });
    })
    .catch((error) => {
      const statusCode = error.response.status;
      console.log(statusCode);
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
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
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
      router.push({ name: "authentication" });
    })
    .catch(() => {});
};
