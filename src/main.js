import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./script/user";
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let loggedIn = store.loggedIn();
    if (!loggedIn) {
      next({
        name: "Login"
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});
