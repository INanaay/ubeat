<template id="app">
  <nav v-bind:class="{ hiddenNavbar: !showNavbar }">
    <ul v-show="showNavbar">
      <li v-if="loggedIn" id="nav-search-bar" class="navbar navleft">
        <input
          type="search"
          placeholder="Search album or artist"
          v-on:keyup.enter="submit($event)"
        />
      </li>
      <li id="nav-home" class="navbar navleft">
        <router-link to="/">Home</router-link>
      </li>
      <li id="nav-album" class="navbar navleft">
        <router-link to="/albumOverview">Album</router-link>
      </li>
      <li id="nav-artist" class="navbar navleft">
        <router-link to="/artist">Artist</router-link>
      </li>
      <li id="nav-playlist" class="navbar navleft">
        <router-link to="/playlist">Playlist</router-link>
      </li>
      <li v-if="loggedIn" id="nav-disconnect" class="navbar navright">
        <span v-on:click="DisconnectUser" to="">Logout</span>
      </li>
      <li v-if="!loggedIn" id="nav-disconnect" class="navbar navright">
        <router-link to="/login">Login</router-link>
      </li>
      <li id="nav-user" class="navbar navright" v-show="storeState.username">
        {{ storeState.username }}
      </li>
      <li id="nav-user-settings" class="navbar navleft">
        <router-link v-bind:to="{ path: '/user/' + storeState.id }"
          >User</router-link
        >
      </li>
      <button v-on:click="showNavbar = false" id="nav-hide-btn"><span class="mdi mdi-window-close"></span></button>
    </ul>
    <div id="nav-show-bar" v-show="!showNavbar">
      <button id="nav-show-button" v-on:click="showNavbar = true">
        <span class="mdi mdi-chevron-double-up"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import { store } from "../script/user";

export default {
  data: () => ({
    storeState: store.state,
    showNavbar: window.innerWidth >= 992
  }),
  computed: {
    loggedIn() {
      return store.loggedIn();
    }
  },
  methods: {
    DisconnectUser: function() {
      store.DiscoUser();
      this.$router.push({ name: "Login" });
      location.reload();
    },
    submit(event) {
      if (
        this.$route.params.tag &&
        this.$route.params.tag === event.srcElement.value
      )
        return;
      this.$router.push({
        name: "Search",
        params: { tag: event.srcElement.value }
      });
    }
  }
};
</script>

<style>
.hiddenNavbar {
  background-color: white;
  border: none;
  margin-top: 0;
}

.mdi-chevron-double-up {
  font-size: 20px;
}

#nav-disconnect span {
  font-size: 22px;
  color: white;
  cursor: pointer;
}

#nav-show-bar {
  text-align: center;
  margin-top: -5px;
  background-color: #1b1b1b;
}

#nav-show-button {
  font-size: 13px;
  background-color: #1b1b1b;
  color: white;
  border: 2px solid #1b1b1b;
}

#nav-hide-btn {
  font-size: 12px;
  border: none;
  background-color: #222326;
  color: white;
  cursor: pointer;
  position: absolute;
  left: 50%;
  margin-top: -13px;
  margin-right: -15px;
}

ul {
  padding: 0;
}
.navright {
  float: right;
  padding-right: 15px;
}
.navleft {
  padding-left: 15px;
}
.navbar > a {
  font-size: 22px;
  color: white;
  text-decoration: none;
}
.navbar {
  display: inline;
}
nav {
  background-color: #222326;
  overflow: hidden;
  width: 100%;
}

#nav-user {
  font-size: 25px;
  color: lightgray;
}

#nav-search-bar > input {
  width: 210px;
  font-size: 18px;
  border-radius: 5px;
  border-color: #222326;
  padding-left: 10px;
  padding-top: 2px;
}

@media screen and (max-width: 992px) {
  .navleft {
    padding-left: 10px;
  }
  .navright {
    margin-top: -8px;
    padding-right: 10px;
  }
  .navbar {
    padding-top: 10px;
  }
  .navbar > a {
    font-size: 12px;
  }
  #nav-user {
    margin-top: -7px;
    font-size: 15px;
  }
  #nav-search-bar > input {
    width: 130px;
    font-size: 13px;
  }
  #nav-hide-btn {
    font-size: 9px;
    border: none;
    background-color: #222326;
    color: white;
    cursor: pointer;
    float: right;
    margin-top: -15px;
    margin-right: -10px;
  }
}

@media screen and (max-width: 600px) {
  .navbar > a {
    font-size: 18px;
  }
  .navbar {
    text-align: center;
    display: block;
  }
  #nav-search-bar > input {
    font-size: 15px;
    width: 180px;
  }
  .navleft,
  .navright {
    padding: 5px 0 20px 0;
    float: none;
  }
  #nav-user {
    font-size: 22px;
    padding-bottom: 5px;
  }
  #nav-hide-btn {
    float: right;
    font-size: 12px;
    margin-top: -290px;
    margin-right: 0px;
  }
}
</style>
