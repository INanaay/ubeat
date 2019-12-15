<template>
  <div id="login-page">
    <div class="login-box">
      <h2>Login Page</h2>
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
          v-on:click="userLogin"
          type="submit"
          value="Submit"
        />
      </p>
      <p id="register_p">
        You don't have a account go register now
        <router-link id="reg" to="/register">Click Here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { store } from "../script/user";
export default {
  name: "Login",
  data: () => ({
    storeState: store.state,
    email: [],
    passw: []
  }),
  methods: {
    userLogin: function() {
      if (this.email.length === 0) {
        this.$alert("Please enter your email !");
        return;
      }
      if (this.passw.length === 0) {
        this.$alert("Select your password first !");
        return;
      }
      document.getElementById("passw").value = "";
      document.getElementById("email").value = "";
      // eslint-disable-next-line no-unused-vars
      store.loginUser(this.email, this.passw).then(response => {
          this.$router.push({ name: "Home" }).catch(() => {
          });
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
          alert("Sorry something wrong happend !");
        });
    },
    validateForm: function(e) {
      if (e.keyCode === 13) {
        this.userLogin();
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
  font-size: 40px;
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
#login-page {
  text-align: center;
  color: white;
}

#reg {
  text-decoration: none;
  color: grey;
}
</style>
