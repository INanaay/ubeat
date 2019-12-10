<template>
  <div id="login-page">
    <h2>Login Page</h2>
    <p>
      <label for="name">Email Adress</label>
      <br />
      <input id="email" v-model="email" type="text" name="email" />
    </p>

    <p>
      <label for="passw">Password</label>
      <br />
      <input id="passw" v-model="passw" type="password" name="passw" />
    </p>
    <p>
      <input v-on:click="userLogin" type="submit" value="Submit" />
    </p>
    <p>
      You don't have a account go register now
      <router-link to="/register">Click Here</router-link>
    </p>
  </div>
</template>

<script>
import { store } from "../script/user";

export default {
  name: "Login",
  data: () => ({
    storeState: store.state,
    email: [],
    passw: [],
    userInfo: []
  }),
  methods: {
    userLogin: function() {
      store.loginUser(this.email, this.passw);
    }
  }
};
</script>

<style scoped>
#login-page {
  text-align: center;
  color: white;
}
.inputcontainer input {
  padding: 10px;
  margin: 10px;
}
</style>
