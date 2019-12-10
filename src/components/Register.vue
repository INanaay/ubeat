<template>
  <div id="register-page">
    <h2>Register Page</h2>
    <p>
      <label for="username">Name</label>
      <br />
      <input id="username" v-model="username" type="text" name="username" />
    </p>
    <p>
      <label for="email">Email Address</label>
      <br />
      <input id="email" v-model="email" type="text" name="email" />
    </p>
    <p>
      <label for="passwword">Password</label>
      <br />
      <input id="passwword" v-model="passw" type="password" name="password" />
    </p>
    <p>
      <input v-on:click="userCreate" type="submit" value="Submit" />
    </p>
  </div>
</template>

<script>
import { store } from "../script/user";

export default {
  name: "Register",
  data: () => ({
    username: [],
    email: [],
    passw: [],
    storeState: store.state
  }),
  methods: {
    userCreate: function() {
      store.createUser(this.username, this.email, this.passw);
    }
  }
};
</script>

<style scoped>
#register-page {
  text-align: center;
  color: white;
}
.inputcontainer input {
  padding: 10px;
  margin: 10px;
}
</style>
