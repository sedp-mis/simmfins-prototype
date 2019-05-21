import Vue from "vue";
import router from "./router/index.js";
import store from "./store/index.js";
import App from "./App";

import Quasar, * as All from "quasar/dist/quasar.umd.js";
import "quasar/dist/quasar.css";
import VeeValidate from "vee-validate";
import Vue2Filters from 'vue2-filters';

Vue.use(VeeValidate, {
  validity: true
});

Vue.config.productionTip = false;

Vue.use(Quasar, {
  components: All,
  directives: All,
  plugins: {
    ...All
  }
});

Vue.use(Vue2Filters)

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
