export const token = (state, token) => {
  state.user.token = token;
};

export const data = (state, data) => {
  state.user.data = data;
};

export const step = (state, step) => {
  state.user.step = step;
};
