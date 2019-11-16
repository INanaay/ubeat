<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "app",
  components: {
    "nav-menu": Navigation
  }
};
</script>

<style>
  @import "https://cdn.materialdesignicons.com/4.5.95/css/materialdesignicons.min.css";
</style>
