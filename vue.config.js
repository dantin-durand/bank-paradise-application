// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: "Bank Paradise",
    themeColor: "#D61016",
    msTileColor: "#D61016",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#D61016",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
};
