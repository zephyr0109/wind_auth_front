import "core-js/stable";
import "regenerator-runtime/runtime";
import "intersection-observer";

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueLodash from "vue-lodash";
import lodash from "lodash";

import routes from "~/router/routes";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const router = new VueRouter({ routes });

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueLodash, { name: "custom", lodash: lodash });

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
