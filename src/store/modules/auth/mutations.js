export const token = (state, token) => {
  state.user.token = token;
};

export const data = (state, data) => {
  state.user.data = data;
};

export const step = (state, step) => {
  state.user.step = step;
};

export const community = (state, community) => {
  state.user.community = community;
};

export const user = (state, user) => {
  state.user.firstname = user.firstname;
  state.user.lastname = user.lastname;
  state.user.email = user.email;
  state.user.password = user.password;
};
