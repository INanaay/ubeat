<template>
  <div id="app">
    <nav-menu />
    <router-view> </router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
//import Cookies from "js-cookie";
import { store } from "./script/user";

export default {
  name: "app",
  components: {
    "nav-menu": Navigation
  },
  created() {
    let loggedIn = store.loggedIn();
    if (!loggedIn) {
      this.$router.push({ name: "Login" }).catch(() => {
      });
    }
  }
};
</script>

<style>
@import "https://cdn.materialdesignicons.com/4.5.95/css/materialdesignicons.min.css";

body {
  font-family: "Poppins", sans-serif;
}

h1 {
  font-size: 25px;
  color: white;
  margin-left: 50px;
}

@media screen and (max-width: 992px) {
  h1 {
    font-size: 22px;
    margin-left: 30px;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 17px;
      margin-left: 15px;
    }
  }
}
</style>
