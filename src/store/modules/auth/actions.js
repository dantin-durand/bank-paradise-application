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
      commit("step", response.data.current_step);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const customerCare = async ({ commit }, form) => {
  console.log(commit);
  console.log(form);
  let params = {
    object: form.object,
    email: form.email,
    lastname: form.lastname,
    firstname: form.firstname,
    body: form.body,
  };

  await axios
    .post(process.env.VUE_APP_API_URL + "/customerCare", params)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
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
      router.push({ name: "authentication" });
    })
    .catch(() => {});
};
