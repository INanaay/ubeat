import axios from "axios";
import qs from "querystring";

const apiUrl = "http://localhost:3000/";

export const store = {
  state: {
    username: localStorage.getItem("name") || null,
    token: localStorage.getItem("token") || null
  },
  loggedIn() {
    return this.state.token !== null;
  },
  loginUser(emailaddress, passw) {
    const newurl = apiUrl + "login";
    return axios({
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: newurl,
      data: qs.stringify({
        email: emailaddress,
        password: passw
      })
    }).then(response => {
      this.state.username = response.data.name;
      this.state.token = response.data.token;
      localStorage.setItem("name", this.state.username);
      localStorage.setItem("token", this.state.token);
    });
  },
  createUser(username, emailaddress, passw) {
    const newurl = apiUrl + "signup";
    return axios({
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: newurl,
      data: qs.stringify({
        name: username,
        email: emailaddress,
        password: passw
      })
    }).then(response => {
      return response.data;
    });
  },
  DiscoUser() {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
  }
};
