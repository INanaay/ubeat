<template>
  <div id="register-page">
    <div class="login-box">
      <h2>Register Page</h2>
      <div class="textbox">
        <label for="username" />
        <i class="fa fa-user" />
        <input
          id="username"
          v-model="username"
          type="text"
          name="username"
          placeholder="Name"
          v-on:keyup="validateForm"
        />
      </div>
      <div class="textbox">
        <label for="email" />
        <i class="fa fa-at" aria-hidden="true" />
        <input
          id="email"
          v-model="email"
          type="text"
          name="email"
          placeholder="Email Address"
          v-on:keyup="validateForm"
        />
      </div>
      <div class="textbox">
        <label for="passw" />
        <i class="fa fa-lock" aria-hidden="true" />
        <input
          id="passw"
          v-model="passw"
          type="password"
          name="passw"
          placeholder="Password"
          v-on:keyup="validateForm"
        />
      </div>
      <p>
        <input
          class="btn"
          v-on:click="userCreate"
          type="submit"
          value="Submit"
        />
      </p>
    </div>
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
      if (this.username.length === 0) {
        this.$alert("You should enter your name !");
        return;
      }
      if (this.email.length === 0) {
        this.$alert("You should enter your email !");
        return;
      }
      if (this.passw.length === 0) {
        this.$alert("Please enter a password !");
        return;
      }
      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("passw").value = "";
      // eslint-disable-next-line no-unused-vars
      store.createUser(this.username, this.email, this.passw).then(response => {
        this.$router.push({ name: "Login" });
      });
    },
    validateForm: function(e) {
      if (e.keyCode === 13) {
        this.userCreate();
      }
    }
  }
};
</script>

<style scoped>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
.login-box {
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.login-box h2 {
  font-size: 32px;
  border-bottom: 6px solid;
}
.textbox {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid;
}
.textbox i {
  width: 26px;
  float: left;
  text-align: center;
}
.textbox input {
  border: none;
  outline: none;
  background: none;
  color: white;
  font-size: 18px;
  width: 80%;
  float: left;
  margin: 0 10px;
}
.btn {
  width: 100%;
  color: white;
  background-color: #2c3e50;
  border: 0px;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  margin: 12px 0;
  border-radius: 8px;
}
input::-moz-focus-inner {
  border: 0;
}
</style>
