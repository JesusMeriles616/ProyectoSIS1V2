import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia, PiniaVuePlugin } from "pinia";
import Buefy from "buefy";
import "../css/mystyles.css"
import 'firebase/auth'



Vue.use(Buefy);
Vue.use(PiniaVuePlugin);


new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount("#app");
