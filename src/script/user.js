import axios from "axios";
import qs from "querystring";
import Cookies from "js-cookie";

const apiUrl = "http://ubeat.herokuapp.com/";

export const store = {
  state: {
    username: Cookies.get("name") || null,
    token: Cookies.get("token") || null
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
      Cookies.set("name", this.state.username);
      Cookies.set("token", this.state.token);
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
    Cookies.remove("name");
    Cookies.remove("token");
  }
};
