export default {
  buildModules: ["@nuxt/typescript-build"],
  srcDir: "src",
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios"],
  mode: "spa",
  bootstrapVue: {
    icons: true
  }
};
