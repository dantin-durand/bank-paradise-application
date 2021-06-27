export const plans = (state, plans) => {
  state.plans = plans;
};

export const customerCareInfo = (state, configs) => {
  state.contactInfo.address = configs.address;
  state.contactInfo.phone = configs.phone;
  state.contactInfo.email = configs.email;
};
